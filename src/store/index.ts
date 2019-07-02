import { combineReducers } from 'redux';

import todo from './modules/todo';

const rootReducer = combineReducers({
    todo,
});

export default rootReducer;