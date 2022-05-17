import {combineReducers} from 'redux';
import { Detail } from './Detail';
import { Count } from './Count';

const rootReducers = combineReducers({
    count:Count,
    detail:Detail,
});

export default rootReducers;