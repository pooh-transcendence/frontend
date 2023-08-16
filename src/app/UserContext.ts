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
    channelType: "PRIVATE" | "PROTECTED" | "PUBLIC";
    channelName: string;
    ownerId: string;
    channelUser: Object[];
    userType: "DEFAULT" | "MODERATOR" | "OWNER";
    inviteSelectedList: string[];
};

export interface userInfo
{
  nickname: string;
  avatar: string;
  id: string;
  token: string; // this value is our backend's token 
  registered: boolean; // this value would be true after two-factor auth
  winnerGame: Object[];
  loserGame: Object[];
};

export interface targetChannelInfo {
  id: string,
  channelType: "PRIVATE" | "PROTECTED" | "PUBLIC",
  ownerNickname: string,
  channelName: string,
  ownerId: string,
  userCount: number,
  channelUser: object[],
}

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

    chatTargetUser: "",
    targetChannel: {} as targetChannelInfo,
    mutedUser: {} as Record<string, { until: number }>,
    userChat: {} as Record<string, { userId: string, nickname: string, message: string }[]>,
    channelChat: {} as Record<string, { channelId: string, userId: string, nickname: string, message: string }[]>,
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
    
    setChatTargetUser: (newState: string) => {},
    setTargetChannel: (newState: targetChannelInfo) => {},
    setMutedUser: (newState: {userId: string, until: number}) => {},
    setUserChat: (newState: {userId: string, nickname: string, message: string}) => {},
    setChannelChat: (newState: {channelId: string, userId: string, nickname: string, message: string}) => {},
  },
});