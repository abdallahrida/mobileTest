import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore, Middleware} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {setupListeners} from '@reduxjs/toolkit/query';
import {apiSlice} from '../redux/apiService';

const mainPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [...[apiSlice.reducerPath], 'selectedProject', 'annotateImage'],
};

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const middleware: Middleware[] = [apiSlice.middleware];

const persistedReducer = persistReducer(mainPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
  devTools: __DEV__,
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
