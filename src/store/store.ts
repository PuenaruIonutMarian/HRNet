import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import employeeReducer from './employeeSlice';


/**
 * Combines all the reducers into a single root reducer.
 * 
 * @see https://redux-toolkit.js.org/api/combineReducers
 */
const rootReducer = combineReducers({
  employees: employeeReducer,
});

/**
 * Configuration object for Redux Persist.
 * 
 * @typedef {Object} PersistConfig
 * @property {string} key - The key for the persisted state in local storage.
 * @property {Storage} storage - The storage engine to use (localStorage in this case).
 * @property {string[]} whitelist - The list of reducers to persist.
 */

/**
 * The configuration for persisting the Redux state.
 * 
 * @type {PersistConfig}
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['employees'],
};

/**
 * Enhances the root reducer with persistence capabilities.
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);


/**
 * Configures and creates the Redux store with middleware for handling 
 * serializable checks and persistence.
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

/**
 * Creates a persistor to be used with the store to persist the state.
 */
export const persistor = persistStore(store);

/**
 * Type representing the root state of the Redux store.
 * 
 * @typedef {ReturnType<typeof store.getState>} RootState
 */

/**
 * Type representing the dispatch function of the Redux store.
 * 
 * @typedef {typeof store.dispatch} AppDispatch
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
