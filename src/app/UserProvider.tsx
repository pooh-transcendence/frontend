'use client'

import React, { useEffect, useState } from 'react';
import { UserContext, chatStates, mainStates, friendInfo, channelInfo, userInfo as userInfoInterface, targetChannelInfo } from './UserContext';
import { getAuth } from './api';

export interface savedContext {
  userInfo: userInfoInterface,
  authToken: string,
  mutedUser: Record<number, { until: number }>,
  userChat: Record<number, { userId: number, nickname: string, message: string }[]>,
  channelChat: Record<number, { channelId: number, userId: number, nickname: string, message: string }[]>,
};

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setConnectionState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<userInfoInterface>({token: "-1", registered: false, nickname: "defaultNick", avatar: "https://via.placeholder.com/32x32", id: -1, winnerGame: [], loserGame: []});
  const [chatState, setChatState] = useState(chatStates.friendList);
  const [mainState, setMainState] = useState(mainStates.gameLobby);
  const [friendChattingInfo, setFriendChattingInfo] = useState<friendInfo>({} as friendInfo);
  const [channelChattingInfo, setChannelChattingInfo] = useState<channelInfo>({} as channelInfo);

  const [showChatUserInfo, setShowChatUserInfo] = useState<boolean>(false);
  const [showChatSetting, setShowChatSetting] = useState<boolean>(false);
  const [showChatInvite, setShowChatInvite] = useState<boolean>(false);
  const [showChatAddFriend, setShowChatAddFriend] = useState<boolean>(false);
  const [showChannelPassword, setShowChannelPassword] = useState<boolean>(false);
  const [showCreateChannel, setShowCreateChannel] = useState<boolean>(false);
  const [showMakeGame, setShowMakeGame] = useState<boolean>(false);
  const [showMatching, setShowMatching] = useState<boolean>(false);


  const [chatTargetUser, setChatTargetUser] = useState<number>(-1);
  const [targetChannel, setTargetChannel] = useState<targetChannelInfo>({} as targetChannelInfo);
  const [mutedUser, setMutedUser] = useState<Record<number, { until: number }>>({});
  const [userChat, setUserChat] = useState<Record<number, { userId: number, nickname: string, message: string }[]>>({});
  const [channelChat, setChannelChat] = useState<Record<number, { channelId: number, userId: number, nickname: string, message: string }[]>>({});

  useEffect(() => {
    sessionStorage.setItem("userContext", JSON.stringify({
      userInfo: userInfo,
      authToken: getAuth(),
      mutedUser: mutedUser,
      userChat: userChat,
      channelChat: channelChat,
    }));
  });

  const userContextValue = {
    state: {
      isConnected,
      userInfo,
      chatState,
      mainState,
      friendChattingInfo,
      channelChattingInfo,

      showChatUserInfo,
      showChatSetting,
      showChatInvite, 
      showChatAddFriend,
      showChannelPassword,
      showCreateChannel,
      showMakeGame,
      showMatching,

      chatTargetUser,
      targetChannel,
      mutedUser,
      userChat,
      channelChat,
    },
    actions: {
      setConnectionState: (newState: boolean) => setConnectionState(newState),
      setChatState: (newState: chatStates) => setChatState(newState),
      setUserInfo: (newState: userInfoInterface) => setUserInfo(newState),
      setMainState: (newState: mainStates) => setMainState(newState),
      setFriendChattingInfo: (newState: any) => setFriendChattingInfo(newState),
      setChannelChattingInfo: (newState: any) => setChannelChattingInfo(newState),

      setShowChatUserInfo: (newState: boolean) => setShowChatUserInfo(newState),
      setShowChatSetting: (newState: boolean) => setShowChatSetting(newState),
      setShowChatInvite: (newState: boolean) => setShowChatInvite(newState),
      setShowChatAddFriend: (newState: boolean) => setShowChatAddFriend(newState),
      setShowChannelPassword: (newState: boolean) => setShowChannelPassword(newState),
      setShowCreateChannel: (newState: boolean) => setShowCreateChannel(newState),
      setShowMakeGame: (newState: boolean) => setShowMakeGame(newState),
      setShowMatching: (newState: boolean) => setShowMatching(newState),

      setChatTargetUser: (newState: number) => setChatTargetUser(newState),
      setTargetChannel: (newState: targetChannelInfo) => setTargetChannel(newState),
      setMutedUser: (newState: { userId: number, until: number }) => setMutedUser({ ...mutedUser, [newState.userId]: { until: newState.until } }),
      setUserChat: (newState: { userId: number, nickname: string, message: string }) => setUserChat(prevUserChat => {
        const newChat = { ...prevUserChat };
        if (!newChat[newState.userId]) newChat[newState.userId] = [];
        newChat[newState.userId].push(newState);
        return newChat;
      }),
      setChannelChat: (newState: { channelId: number, userId: number, nickname: string, message: string }) => setChannelChat(prevChannelChat => {
        const newChat = { ...prevChannelChat };
        if (!newChat[newState.channelId]) newChat[newState.channelId] = [];
        newChat[newState.channelId].push(newState);
        return newChat;
      }),
    },
  };
  
  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
