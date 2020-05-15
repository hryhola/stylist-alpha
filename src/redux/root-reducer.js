import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import stylistReducer from './stylits/stylist.reducer';
import organizerReducer from './organizer/organizer.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['organizer'],
};

const rootReducer = combineReducers({
  stylist: stylistReducer,
  organizer: organizerReducer,
});

export default persistReducer(persistConfig, rootReducer);
