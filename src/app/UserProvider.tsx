'use client';

import React, { useEffect, useState } from 'react';
import {
  UserContext,
  chatStates,
  mainStates,
  friendInfo,
  channelInfo,
  userInfo as userInfoInterface,
  targetChannelInfo,
} from './UserContext';
import { getAuth } from './api';

import { setAuth, setUserId, updateSocket } from './api';
export interface savedContext {
  userInfo: userInfoInterface;
  authToken: string;
  mutedUser: Record<number, { until: number }>;
  userChat: Record<
    number,
    { userId: number; nickname: string; message: string }[]
  >;
  channelChat: Record<
    number,
    { channelId: number; userId: number; nickname: string; message: string }[]
  >;
}

export default function UserProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isConnected, setConnectionState] = useState<boolean>(false);
  const [userInfo, setUserInfo] = useState<userInfoInterface>({
    token: null,
    registered: false,
    nickname: 'defaultNick',
    avatar: 'pngegg-1@2x.png',
    id: -1,
    winnerGame: [],
    loserGame: [],
  });
  const [chatState, setChatState] = useState(chatStates.friendList);
  const [mainState, setMainState] = useState(mainStates.gameLobby);
  const [friendChattingInfo, setFriendChattingInfo] = useState<friendInfo>(
    {} as friendInfo,
  );
  const [channelChattingInfo, setChannelChattingInfo] = useState<channelInfo>({
    inviteSelectedList: [] as number[],
  } as channelInfo);

  const [showChatUserInfo, setShowChatUserInfo] = useState<boolean>(false);
  const [showChatSetting, setShowChatSetting] = useState<boolean>(false);
  const [showChatInvite, setShowChatInvite] = useState<boolean>(false);
  const [showChatAddFriend, setShowChatAddFriend] = useState<boolean>(false);
  const [showChannelPassword, setShowChannelPassword] =
    useState<boolean>(false);
  const [showCreateChannel, setShowCreateChannel] = useState<boolean>(false);
  const [showMakeGame, setShowMakeGame] = useState<boolean>(false);
  const [showMatching, setShowMatching] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [showGame, setShowGame] = useState<boolean>(false);

  const [chatTargetUser, setChatTargetUser] = useState<number>(-1);
  const [infoTargetUser, setInfoTargetUser] = useState<number>(-1);
  const [targetChannel, setTargetChannel] = useState<targetChannelInfo>(
    {} as targetChannelInfo,
  );
  const [targetGame, setTargetGame] = useState<number>(-1);
  const [targetGameInvite, setTargetGameInvite] = useState<number | null>(null);
  const [mutedUser, setMutedUser] = useState<Record<number, { until: number }>>(
    {},
  );
  const [userChat, setUserChat] = useState<
    Record<number, { userId: number; nickname: string; message: string }[]>
  >({});
  const [channelChat, setChannelChat] = useState<
    Record<
      number,
      { channelId: number; userId: number; nickname: string; message: string }[]
    >
  >({});

  useEffect(() => {
    if (sessionStorage.getItem('userContext')) {
      console.log('restoring', sessionStorage.getItem('userContext'));
      const target: savedContext = JSON.parse(
        sessionStorage.getItem('userContext')!,
      );
      // restore auth
      setAuth(target.authToken);
      setUserId(target.userInfo.id);
      userContextValue.actions.setUserInfo(target.userInfo);
      updateSocket();

      // restore chat states
      for (const userIds in target.mutedUser) {
        const userId = parseInt(userIds);
        userContextValue.actions.setMutedUser({
          userId,
          until: target.mutedUser[userIds].until,
        });
        console.log('muted ', userIds, target.mutedUser[userIds]);
      }
      for (const userIds in target.userChat)
        target.userChat[userIds].map((msg) => {
          userContextValue.actions.setUserChat(msg);
        });
      for (const channelIds in target.channelChat)
        target.channelChat[channelIds].map((msg) => {
          userContextValue.actions.setChannelChat(msg);
        });
    }
  }, []);
  useEffect(() => {
    if (userInfo.id != -1) {
      console.log('saved userContext');
      sessionStorage.setItem(
        'userContext',
        JSON.stringify({
          userInfo: userInfo,
          authToken: getAuth(),
          mutedUser: mutedUser,
          userChat: userChat,
          channelChat: channelChat,
        }),
      );
    }
  }, [userInfo, mutedUser, userChat, channelChat]);

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
      showInfo,
      showGame,

      chatTargetUser,
      infoTargetUser,
      targetChannel,
      targetGame,
      targetGameInvite,
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
      setChannelChattingInfo: (newState: any) =>
        setChannelChattingInfo(newState),

      setShowChatUserInfo: (newState: boolean) => setShowChatUserInfo(newState),
      setShowChatSetting: (newState: boolean) => setShowChatSetting(newState),
      setShowChatInvite: (newState: boolean) => setShowChatInvite(newState),
      setShowChatAddFriend: (newState: boolean) =>
        setShowChatAddFriend(newState),
      setShowChannelPassword: (newState: boolean) =>
        setShowChannelPassword(newState),
      setShowCreateChannel: (newState: boolean) =>
        setShowCreateChannel(newState),
      setShowMakeGame: (newState: boolean) => setShowMakeGame(newState),
      setShowMatching: (newState: boolean) => setShowMatching(newState),
      setShowInfo: (newState: boolean) => setShowInfo(newState),
      setShowGame: (newState: boolean) => setShowGame(newState),

      setChatTargetUser: (newState: number) => setChatTargetUser(newState),
      setInfoTargetUser: (newState: number) => setInfoTargetUser(newState),
      setTargetChannel: (newState: targetChannelInfo) =>
        setTargetChannel(newState),
      setTargetGame: (newState: number) => setTargetGame(newState),
      setTargetGameInvite: (newState: number | null) =>
        setTargetGameInvite(newState),
      setMutedUser: (newState: { userId: number; until: number }) =>
        setMutedUser((prevMutedUser) => {
          if (prevMutedUser.hasOwnProperty(newState.userId))
            prevMutedUser[newState.userId].until = newState.until;
          else prevMutedUser[newState.userId] = { until: newState.until };
          return prevMutedUser;
        }),
      setUserChat: (newState: {
        userId: number;
        nickname: string;
        message: string;
      }) =>
        setUserChat((prevUserChat) => {
          const newChat = { ...prevUserChat };
          if (!newChat[newState.userId]) newChat[newState.userId] = [];
          newChat[newState.userId].push(newState);
          return newChat;
        }),
      setChannelChat: (newState: {
        channelId: number;
        userId: number;
        nickname: string;
        message: string;
      }) =>
        setChannelChat((prevChannelChat) => {
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
