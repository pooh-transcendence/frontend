'use client'

import React, { useState } from 'react';
import { UserContext, chatStates, mainStates, friendInfo, channelInfo, userInfo as userInfoInterface, userInfo } from './UserContext';

export default function UserProvider({ children }: { children: React.ReactNode }) {
  const [isConnected, setConnectionState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<userInfoInterface>({token: "-1", registered: false, nickname: "defaultNick", avatar: "https://via.placeholder.com/32x32", id: "-1"});
  const [chatState, setChatState] = useState(chatStates.friendList);
  const [mainState, setMainState] = useState(mainStates.gameLobby);
  const [friendChattingInfo, setFriendChattingInfo] = useState<friendInfo>({} as friendInfo);
  const [channelChattingInfo, setChannelChattingInfo] = useState<channelInfo>({} as channelInfo);

  const [showChatUserInfo, setShowChatUserInfo] = useState<boolean>(false);
  const [showChatSetting, setShowChatSetting] = useState<boolean>(false);
  const [showChatInvite, setShowChatInvite] = useState<boolean>(false);

  const [chatTargetUser, setChatTargetUser] = useState<string>("");
  const [mutedUser, setMutedUser] = useState<Record<string, { until: number }>>({});
  const [userChat, setUserChat] = useState<Record<string, { userId: string, nickname: string, message: string }[]>>({});
  const [channelChat, setChannelChat] = useState<Record<string, { channelId: string, userId: string, nickname: string, message: string }[]>>({});

  function loadState(prevState: any)
  {
    setUserInfo(prevState.userInfo);
    setUserChat(prevState.userChat);
    setChannelChat(prevState.channelChat);
    setMutedUser(prevState.mutedUser);
  };

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

      chatTargetUser,
      mutedUser,
      userChat,
      channelChat,
    },
    actions: {
      loadState: (prevState: Object) => loadState(prevState),

      setConnectionState: (newState: boolean) => setConnectionState(newState),
      setChatState: (newState: chatStates) => setChatState(newState),
      setUserInfo: (newState: userInfoInterface) => setUserInfo(newState),
      setMainState: (newState: mainStates) => setMainState(newState),
      setFriendChattingInfo: (newState: any) => setFriendChattingInfo(newState),
      setChannelChattingInfo: (newState: any) => setChannelChattingInfo(newState),

      setShowChatUserInfo: (newState: boolean) => setShowChatUserInfo(newState),
      setShowChatSetting: (newState: boolean) => setShowChatSetting(newState),
      setShowChatInvite: (newState: boolean) => setShowChatInvite(newState),

      setChatTargetUser: (newState: string) => setChatTargetUser(newState),
      setMutedUser: (newState: { userId: string, until: number }) => setMutedUser({ ...mutedUser, [newState.userId]: { until: newState.until } }),
      setUserChat: (newState: { userId: string, nickname: string, message: string }) => setUserChat(prevUserChat => {
        const newChat = { ...prevUserChat };
        if (!newChat[newState.userId]) newChat[newState.userId] = [];
        newChat[newState.userId].push({ userId: newState.userId, nickname: newState.nickname, message: newState.message });
        return newChat;
      }),
      setChannelChat: (newState: { channelId: string, userId: string, nickname: string, message: string }) => setChannelChat(prevChannelChat => {
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
