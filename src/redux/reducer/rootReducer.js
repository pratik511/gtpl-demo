import {combineReducers} from 'redux';
import { Reducer } from './Reducer';

const rootReducers = combineReducers({
    count:Reducer,
});

export default rootReducers;