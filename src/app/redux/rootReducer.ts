import { combineReducers } from 'redux';
import chatReducer from '../Chat/reducer';

const rootReducer = combineReducers({
    chatReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;