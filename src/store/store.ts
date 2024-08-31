import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import employeeReducer from './employeeSlice';

/**
 * The root reducer combining all slice reducers.
 * In this case, it includes only the employeeReducer.
 * 
 * @type {import('@reduxjs/toolkit').Reducer<import('redux').CombinedState<{ employees: import('./employeeSlice').EmployeeState }>>}
 */
const rootReducer = combineReducers({
  employees: employeeReducer,
});

/**
 * Configuration for Redux Persist to enable state persistence.
 * 
 * @type {import('redux-persist').PersistConfig<any>}
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['employees'], // Only persist the 'employees' slice
};

/**
 * The persisted reducer integrates Redux Persist with the root reducer.
 * 
 * @type {import('redux').Reducer<import('redux').CombinedState<{ employees: import('./employeeSlice').EmployeeState }>, import('redux').AnyAction>}
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * The Redux store is configured with the persisted reducer.
 * It includes middleware for serializable checks with Redux Persist actions.
 * 
 * @type {import('@reduxjs/toolkit').Store<import('redux').CombinedState<{ employees: import('./employeeSlice').EmployeeState }>, import('redux').AnyAction, [import('redux').Middleware<any, import('redux').AnyAction, any>]>}
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignoring specific actions for serialization checks
      },
    }),
});

/**
 * Creates a persistor for the store, which is used to persist the store's state.
 * 
 * @type {import('redux-persist').Persistor}
 */
export const persistor = persistStore(store);

// For testing purposes, attach the store to the global window object if Playwright is detected
if (typeof window !== 'undefined' && (window as any).IS_PLAYWRIGHT) {
  (window as any).store = store;
}

/**
 * Type representing the entire Redux state of the application.
 * 
 * @type {import('@reduxjs/toolkit').InferType<ReturnType<typeof store.getState>>}
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Type representing the dispatch function of the Redux store.
 * 
 * @type {import('redux').Dispatch<import('redux').AnyAction>}
 */
export type AppDispatch = typeof store.dispatch;

