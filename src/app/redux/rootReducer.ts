import { combineReducers } from 'redux';
import chatReducer from '@/app/chat/reducer';

const rootReducer = combineReducers({
    chatReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;