'use client'

import Image from 'next/image'
import React from 'react'
import { ChatChannel } from './chatting/ChatChannel'
import { ChatFriendList } from './lists/ChatFriendList'
import { ChatChannelList } from './lists/ChatChannelList'
import RoomSettings from './chatting/RoomSettings'
import ChatUserSearch from './ChatUserSearch'
import UserInfo from './lists/UserInfo'
import { ChatBubble } from './chatting/ChatBubble'
import { useSelector } from 'react-redux'
import { chatStateEnum } from './reducer'

export default function Chat() {
  const { state } = useSelector((state: any) => ({
    state: state.chatReducer.state,
  }));

  switch(state)
  {
    case (chatStateEnum.channelChat):
      return <ChatChannel title="test1"/>;
    case (chatStateEnum.channelList):
      return <ChatChannelList/>;
    case (chatStateEnum.friendChat):
      return <ChatChannel title="test2"/>
    case (chatStateEnum.friendList):
      return <ChatFriendList/>;
    default:
      throw Error("unexpected chatReducer.state "+state);
  }
};