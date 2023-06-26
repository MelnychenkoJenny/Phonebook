import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { contactsApi } from './Contacts/contactsApi';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions,
      },
    }).concat(contactsApi.middleware),
});

export const persistor = persistStore(store);
