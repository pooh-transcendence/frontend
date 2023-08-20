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
    id: number;
    nickname: string;
    avatar: string;
    userState: "ONLINE" | "OFFLINE" | "GAMING";
};

export interface channelInfo
{
    id: number;
    channelType: "PRIVATE" | "PROTECTED" | "PUBLIC";
    channelName: string;
    ownerId: number;
    channelUser: Object[];
    userType: "DEFAULT" | "MODERATOR" | "OWNER";
    inviteSelectedList: number[];
};

export interface userInfo
{
  nickname: string;
  avatar: string;
  id: number;
  token: string; // this value is our backend's token 
  registered: boolean; // this value would be true after two-factor auth
  winnerGame: Object[];
  loserGame: Object[];
};

export interface targetChannelInfo {
  id: number,
  channelType: "PRIVATE" | "PROTECTED" | "PUBLIC",
  ownerNickname: string,
  channelName: string,
  ownerId: number,
  userCount: number,
  channelUser: object[],
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
    showChatAddFriend: false,
    showChannelPassword: false,
    showCreateChannel: false,
    showMakeGame: false,
    showMatching: false,

    chatTargetUser: -1,
    targetChannel: {} as targetChannelInfo,
    mutedUser: {} as Record<number, { until: number }>,
    userChat: {} as Record<number, { userId: number, nickname: string, message: string }[]>,
    channelChat: {} as Record<number, { channelId: number, userId: number, nickname: string, message: string }[]>,
  },
  actions: {
    setConnectionState: (newState: boolean) => {},
    setChatState: (newState: chatStates) => {},
    setUserInfo: (newState: userInfo) => {},
    setMainState: (newState: mainStates) => {},
    setFriendChattingInfo: (newState: friendInfo) => {},
    setChannelChattingInfo: (newState: channelInfo) => {},
    
    setShowChatUserInfo: (newState: boolean) => {},
    setShowChatSetting: (newState: boolean) => {},
    setShowChatInvite: (newState: boolean) => {},
    setShowChatAddFriend: (newState: boolean) => {},
    setShowChannelPassword: (newState: boolean) => {},
    setShowCreateChannel: (newState: boolean) => {},
    setShowMakeGame: (newState: boolean) => {},
    setShowMatching: (newState: boolean) => {},
    
    setChatTargetUser: (newState: number) => {},
    setTargetChannel: (newState: targetChannelInfo) => {},
    setMutedUser: (newState: {userId: number, until: number}) => {},
    setUserChat: (newState: {userId: number, nickname: string, message: string}) => {},
    setChannelChat: (newState: {channelId: number, userId: number, nickname: string, message: string}) => {},
  },
});