'use client'

import React, { useContext, useEffect } from 'react'
import { ChatChannel } from './chatting/ChatChannel'
import { ChatFriendList } from './lists/ChatFriendList'
import { ChatChannelList } from './lists/ChatChannelList'
import { ChatFriend } from './chatting/ChatFriend'
import { UserContext, chatStates } from '../UserContext'
import { socket, api_get } from '@/app/api'

export default function Chat() {
  const { state, actions } = useContext(UserContext);

  useEffect(() => {
    const userMessageListener = (data: any) => {
      const renderTime = new Date().getTime();
      console.log("received", data);
      if (!state.mutedUser[data[0].userId] || state.mutedUser[data[0].userId].until < renderTime) {
        console.log("added", data);
        actions.setUserChat({
          userId: data[0].userId,
          nickname: data[0].nickname,
          message: data[0].message
        });
      }
    };

    const channelMessageListener = (data: any) => {
      console.log("channelMessageListener", data);
      const renderTime = new Date().getTime();
      if (!state.mutedUser[data[0].userId] || state.mutedUser[data[0].userId].until < renderTime) {
        console.log("added", data);
        actions.setChannelChat({
          channelId: data[0].channelId,
          userId: data[0].userId,
          nickname: data[0].nickname,
          message: data[0].message
        });
      }
    };

    socket.on("userMessage", userMessageListener);
    socket.on("channelMessage", channelMessageListener);

    return () => {
      socket.off("userMessage", userMessageListener);
      socket.off("channelMessage", channelMessageListener);
    };
  }, []);

  switch (state.chatState) {
    case chatStates.channelChat:
      return <ChatChannel title={state.channelChattingInfo.channelName} />;
    case chatStates.channelList:
      return <ChatChannelList />;
    case chatStates.friendChat:
      return <ChatFriend title={state.friendChattingInfo.nickname} />;
    case chatStates.friendList:
      return <ChatFriendList />;
    default:
      throw Error("unexpected chatReducer.state " + state.chatState);
  }
}