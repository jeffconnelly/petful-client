import { createStore, applyMiddleware } from 'redux';
import catReducer from './reducers/cat-reducer';
import dogReducer from './reducers/dog-reducer';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';

let reducers = combineReducers({
  catReducer: catReducer,
  dogReducer: dogReducer
});

export default createStore(reducers,
applyMiddleware(thunk));