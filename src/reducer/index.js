import  {combineReducers} from 'redux';
import users from './users.js';
import songs from './songs.js';

export const allReducers=combineReducers({
    u:users,
    s:songs
});