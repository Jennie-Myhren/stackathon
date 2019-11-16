import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

export default store;
