import { combineReducers } from 'redux';
import auth from './Auth';
import profile from './Profile';


/** Combine all the reducers and export */
const rootReducer = combineReducers({
    auth,
    profile 
});

export default rootReducer;
