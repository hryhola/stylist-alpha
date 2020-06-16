import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import stylistReducer from './stylits/stylist.reducer';
import organizerReducer from './organizer/organizer.reducer';
import organizerServicesReducer from './organizerServices/reducer';
import organizerClientsReducer from './organizerClients/reducer';
import organizerSessionsReducer from './organizerSessions/sessions.reducer';
import organizeraCommentsReducer from './organizerComments/comments.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['organizer'],
};

const rootReducer = combineReducers({
  stylist: stylistReducer,
  organizer: organizerReducer,
  organizerServices: organizerServicesReducer,
  organizerClients: organizerClientsReducer,
  organizerSessions: organizerSessionsReducer,
  organizerComments: organizeraCommentsReducer,
});

export default persistReducer(persistConfig, rootReducer);
