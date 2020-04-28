import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import stylistReducer from './stylits/stylist.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  stylist: stylistReducer,
});

export default persistReducer(persistConfig, rootReducer);
