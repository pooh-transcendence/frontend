import React from 'react'

export const ChatBottomBar = (): JSX.Element => {
    return (
      <div className="w-[300px] h-[51px] relative">
        <div className="w-[300px] h-[50px] left-0 top-0 absolute bg-slate-100 rounded-[10px]" />
        <div className="left-[24px] top-[11px] w-[252px] h-[28px] absolute justify-center items-center gap-[26px] inline-flex">
          <div className="h-7 justify-center items-center gap-1.5 flex">
            <div className="text-neutral-600 text-[15px] font-normal">friends</div>
            <img src="group.svg" className="w-7 h-7 justify-center items-center flex" />
          </div>
          <img src="vBar_for_chat_tab.svg" />
          <div className="h-7 justify-center items-center gap-1 flex">
            <div className="text-neutral-600 text-[15px] font-normal">channels</div>
            <img src="forum.svg" className="w-7 h-7 relative" />
          </div>
        </div>
      </div>
    );
}