import { createStore, AnyAction } from 'redux';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { auth } from '../api/socket';
import { ThunkAction } from 'redux-thunk'; 
import { RootState } from '@/app/redux/rootReducer';

export const changeToFriendList = () => ({
    type: "CHANGE_TO_FRIEND_LIST",
});

export const changeToChannelList = () => ({
    type: "CHANGE_TO_CHANNEL_LIST",
});

export const changeToFriendChat = (test: any) => ({
    type: "CHANGE_TO_FRIEND_CHAT",
    payload: test,
});

export const changeToChannelChat = (test: any) => ({
    type: "CHANGE_TO_CHANNEL_CHAT",
    payload: test,
});

export const setFriendList = (list: Object[]) => ({
    type: "SET_FRIEND_LIST",
    friendList: list,
});

export const chatStateEnum={
    friendList: "FriendsList",
    channelList: "ChannelList",
    friendChat: "FriendChat",
    channelChat: "ChannelChat"
} as const;

const initialState={
    state: chatStateEnum.friendList,
    friendList: null,
    loading: true,
};

type ThunkResult<R> = ThunkAction<R, RootState, undefined, AnyAction>;
export const fetchInitialValue = (): ThunkResult<Promise<void>> => async (dispatch, getState) => {
  try {
    const friendList = await axios.get("http://192.168.1.3:3000/user/friend", {
      headers: {
        Authorization: "Bearer " + auth,
      },
    });

    dispatch(setFriendList(friendList.data.data));
    console.log(friendList.data.data);
  } catch (error) {
    console.error("Error fetching initial value:", error);
  }
}


export default function chatReducer(state: any=initialState, action: any) {
    switch(action.type) {
        case "CHANGE_TO_FRIEND_LIST":
            return {...state, state: chatStateEnum.friendList};
        case "CHANGE_TO_CHANNEL_LIST":
            return {...state, state: chatStateEnum.channelList};
        case "CHANGE_TO_FRIEND_CHAT":
            return {...state, state: chatStateEnum.friendChat};
        case "CHANGE_TO_CHANNEL_CHAT":
            return {...state, state: chatStateEnum.channelChat};
        
        case "SET_FRIEND_LIST":
            return {... state, friendList: state.list, loading: false};

        default:
            return state;
        //     throw Error("unexpected action on chatReducer " + action);
    }
};