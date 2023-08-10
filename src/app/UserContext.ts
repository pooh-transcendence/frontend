import React from 'react';

export enum chatStates {
    friendList,
    channelList,
    friendChat,
    channelChat,
};

export enum mainStates {
    gameLobby,
    ChannelLobby,
};

export const UserContext = React.createContext({
  state: {
    userInfo: null,
    chatState: chatStates.friendList,
    mainState: mainStates.gameLobby,
    friendChattingInfo: {},
  },
  actions: {
    setChatState: (newState: chatStates) => {},
    setMainState: (newState: mainStates) => {},
    setFriendChattingInfo: (newState: any) => {},
  },
});