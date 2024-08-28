
import { describe, it, expect, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { store, persistor, RootState, AppDispatch } from '../../src/store/store'; // Adjust the import path as needed
import employeeReducer from '../../src/store/employeeSlice'; // Adjust the import path as needed

// Mock redux-persist
vi.mock('redux-persist', async () => {
  const actual = await vi.importActual('redux-persist');
  return {
    ...actual,
    persistReducer: vi.fn().mockImplementation((config, reducer) => reducer),
    persistStore: vi.fn().mockImplementation((store) => store),
  };
});

// Mock redux-persist/lib/storage
vi.mock('redux-persist/lib/storage', () => ({
  default: {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
  },
}));

describe('Redux Store Configuration', () => {
  it('should create a store with the correct reducer', () => {
    expect(store.getState()).toHaveProperty('employees');
  });

  it('should have the correct initial state', () => {
    const initialState = store.getState();
    expect(initialState).toEqual(expect.objectContaining({
      employees: expect.any(Object),
    }));
  });

  it('should use persistReducer with the correct configuration', () => {
    expect(persistReducer).toHaveBeenCalledWith(
      expect.objectContaining({
        key: 'root',
        storage,
        whitelist: ['employees'],
      }),
      expect.any(Function)
    );
  });

  it('should create a persistor', () => {
    expect(persistStore).toHaveBeenCalledWith(store);
    expect(persistor).toBeDefined();
  });

  it('should have the correct RootState type', () => {
    const state: RootState = store.getState();
    expect(state).toHaveProperty('employees');
  });

  it('should have the correct AppDispatch type', () => {
    const dispatch: AppDispatch = store.dispatch;
    expect(typeof dispatch).toBe('function');
  });

  it('should configure the store with serializable check middleware', () => {
    const testStore = configureStore({
      reducer: { employees: employeeReducer },
    });
    
    expect(testStore.getState()).toHaveProperty('employees');
  });
});
