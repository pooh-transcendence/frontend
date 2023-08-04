'use client'

import Image from 'next/image'
import React from 'react'
import { ChatChannel } from './ChatChannel'
import { ChatFriendList } from './ChatFriendList'
import { ChatChannelList } from './ChatChannelList'
import RoomSettings from './RoomSettings'
import ChatUserSearch from './ChatUserSearch'
import UserInfo from './UserInfo'
import { ChatBubble } from './ChatBubble'

export default function Home() {
  return (
    <>
      <UserInfo type="mod" />
      <UserInfo type="default" />
      <ChatUserSearch type="invite" />
      <ChatUserSearch type="add_friend" />
      <RoomSettings type="mod_protected" />
      <RoomSettings type="mod_public" />
      <RoomSettings type="default" />
      <ChatChannelList />
      <ChatFriendList />
      <ChatChannel title="testChannel" />
    </>
  )
}

const Frame = (): JSX.Element => {
  return <div className="w-[300px] h-[650px] rounded-[10px] border border-neutral-600" />
}