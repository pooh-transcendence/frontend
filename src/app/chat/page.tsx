'use client'

import React, { useContext } from 'react'
import { ChatChannel } from './chatting/ChatChannel'
import { ChatFriendList } from './lists/ChatFriendList'
import { ChatChannelList } from './lists/ChatChannelList'
import { UserContext, chatStates } from '../UserContext'

export default function Chat() {
  const {chatState} = useContext(UserContext).state;

  switch(chatState)
  {
    case (chatStates.channelChat):
      return <ChatChannel title="test1"/>;
    case (chatStates.channelList):
      return <ChatChannelList/>;
    case (chatStates.friendChat):
      return <ChatChannel title="temporal friend chat test"/>
    case (chatStates.friendList):
      return <ChatFriendList/>;
    default:
      throw Error("unexpected chatReducer.state "+chatState);
  }
};