import persistReducer from 'redux-persist/es/persistReducer';
import { filterReducer } from './Filter/filterSlice';
import storage from 'redux-persist/lib/storage';
import { contactsApi } from './Contacts/contactsApi';
import { authReducer } from './Auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(authPersistConfig, authReducer);

export const reducer = {
  auth: persistedReducer,
  [contactsApi.reducerPath]: contactsApi.reducer,
  filter: filterReducer,
};
