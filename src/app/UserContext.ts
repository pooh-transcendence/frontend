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

export interface friendInfo
{
    id: string;
    nickname: string;
    avatar: string;
    userState: "ONLINE" | "OFFLINE" | "GAMING";
};

export interface channelInfo
{
    id: string;
    channelType: string;
    channelName: string;
    ownerId: string;
};

export interface userInfo
{
  nickname: string;
  avatar: string;
  userId: string;
};

export const UserContext = React.createContext({
  state: {
    isConnected: false,
    userInfo: {} as userInfo,
    chatState: chatStates.friendList,
    mainState: mainStates.gameLobby,
    friendChattingInfo: {} as friendInfo,
    channelChattingInfo: {} as channelInfo,

    showChatUserInfo: false,
    showChatSetting: false,
    showChatInvite: false,

    chatTargetUser: "",
    mutedUser: {} as Record<string, { until: number }>,
    userChat: {} as Record<string, { userId: string, nickname: string, message: string }[]>,
    channelChat: {} as Record<string, { channelId: string, userId: string, nickname: string, message: string }[]>,
  },
  actions: {
    setConnectionState: (newState: boolean) => {},
    setChatState: (newState: chatStates) => {},
    setUserInfo: (newState: userInfo) => {},
    setMainState: (newState: mainStates) => {},
    setFriendChattingInfo: (newState: any) => {},
    setChannelChattingInfo: (newState: any) => {},
    
    setShowChatUserInfo: (newState: boolean) => {},
    setShowChatSetting: (newState: boolean) => {},
    setShowChatInvite: (newState: boolean) => {},
    
    setChatTargetUser: (newState: string) => {},
    setMutedUser: (newState: {userId: string, until: number}) => {},
    setUserChat: (newState: {userId: string, nickname: string, message: string}) => {},
    setChannelChat: (newState: {channelId: string, userId: string, nickname: string, message: string}) => {},
  },
});