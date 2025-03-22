import { configureStore } from '@reduxjs/toolkit'
import nexusReducer from './nexusSlice'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

// Configurazione del persister
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['nexus'], // slice da salvare
}

const persistedReducer = persistReducer(persistConfig, nexusReducer)

export const store = configureStore({
  reducer: {
    nexus: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
