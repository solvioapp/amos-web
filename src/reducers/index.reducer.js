import { combineReducers } from 'redux';
import app from './app.reducer';
import data from './data.reducer';

const mainReducer = combineReducers({
    app,
    data,
});

export default mainReducer;
