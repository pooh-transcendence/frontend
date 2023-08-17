import React, { useContext } from 'react'
import { UserContext, chatStates } from '@/app/UserContext';

export const ChatBottomBar = (): JSX.Element => {
  const context = useContext(UserContext);

  const onChangeToFriendList = () => context.actions.setChatState(chatStates.friendList);
  const onChangeToChannelList = () => context.actions.setChatState(chatStates.channelList);

  return (
    <div className="w-[18.75rem] h-[3.1875rem] relative">
      <div className="w-[18.74rem] h-[3.125rem] left-[-0.18rem] top-0 absolute bg-slate-100 rounded-[0.625rem]" />
      <div className="left-[1.5rem] top-[0.6875rem] w-[15.75rem] h-[1.75rem] absolute justify-center items-center gap-[1.625rem] inline-flex">
        <div className="h-7 justify-center items-center gap-1.5 flex" onClick={onChangeToFriendList}>
          <div className="text-neutral-600 text-[0.9375rem] font-normal">friends</div>
          <img src="group.svg" className="w-7 h-7 justify-center items-center flex" />
        </div>
        <img src="vBar_for_chat_tab.svg" />
        <div className="h-7 justify-center items-center gap-1 flex" onClick={onChangeToChannelList}>
          <div className="text-neutral-600 text-[0.9375rem] font-normal">channels</div>
          <img src="forum.svg" className="w-7 h-7 relative" />
        </div>
      </div>
    </div>
  );
}