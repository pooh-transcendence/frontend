import React, { useContext, useEffect, useState } from 'react';
import { api_get, api_post, socket } from '@/app/api';
import { UserContext, chatStates } from '@/app/UserContext';

interface Props {
  type: 'mod' | 'default';
}

const UserInfo = ({ type }: Props): JSX.Element => {
  const [userName, setUserName] = useState<string>('loading');
  const [profileImg, setProfileImg] = useState<string>('pngegg-1@2x.png');
  const { state, actions } = useContext(UserContext);
  useEffect(() => {
    console.log(state.chatTargetUser);
    api_get(`/user/${state.chatTargetUser}`).then((res) => {
      setUserName(res.data.data.nickname);
      setProfileImg(res.data.data.avatar ?? 'pngegg-1@2x.png');
    });

    interface block {
      id: number;
      nickname: string;
      avatar: string;
    }
    const createBlockToBlockList = (blockedFriend: block) => {
      console.log('createBlockToBlockList', blockedFriend);
      // setFriendList(friendList.map((elem) => )) // delete
      if (state.chatState == chatStates.friendChat)
        actions.setChatState(chatStates.friendList);
      actions.setShowChatUserInfo(false);
    };

    socket.on('createBlockToBlockList', createBlockToBlockList);

    return () => {
      socket.off('createBlockToBlockList', createBlockToBlockList);
    };
  }, []);

  const gameInviteHandler = () => {
    actions.setShowMakeGame(true);
    actions.setTargetGameInvite(state.chatTargetUser); // todo
  };
  const followHandler = () => {
    socket.emit('createFriend', {
      followingUserId: state.chatTargetUser,
    });
  };
  const muteHandler = () => {
    const target = state.chatTargetUser;
    actions.setMutedUser({
      userId: state.chatTargetUser,
      until: new Date().getTime() + 1000 * 30, // 10초간 음소거
    });
  };

  const blockHandler = () => {
    socket.emit(
      'createBlock',
      { blockUserId: Number(state.chatTargetUser) },
      (ack: any) => {
        console.log(ack);
        actions.setShowChatUserInfo(false);
        if (state.chatState == chatStates.friendChat)
          actions.setChatState(chatStates.friendList);
      },
    );
  };
  const infoHandler = () => {
    actions.setInfoTargetUser(state.chatTargetUser);
    actions.setShowInfo(true);
    actions.setShowChatUserInfo(false);
  };
  const banHandler = () => {
    console.log('ban', state.chatTargetUser, state.channelChattingInfo.id);
    socket.emit('updateChannelUser', {
      userId: Number(state.chatTargetUser),
      channelId: Number(state.channelChattingInfo.id),
      isBanned: true,
    });
  };
  const addModHandler = () => {
    console.log('addMod', state.chatTargetUser, state.channelChattingInfo.id);
    socket.emit(
      'admin',
      {
        userId: Number(state.chatTargetUser),
        channelId: Number(state.channelChattingInfo.id),
        isBanned: true,
      },
      (data: any) => {
        console.log(data);
      },
    );
  };
  const kickHandler = () => {
    console.log('kick', state.chatTargetUser, state.channelChattingInfo.id);
    socket.emit('kickChannelUser', {
      userId: Number(state.chatTargetUser),
      channelId: Number(state.channelChattingInfo.id),
      isBanned: true,
    });
  };

  // if(type === "mod")
  if (state.channelChattingInfo.userType == 'MODERATOR')
    return (
      <div className="z-100 w-[276px] h-[205px] bg-[#FEFEFE] relative">
        {/* mod buttons */}
        <div className="left-[56px] top-[136px] absolute justify-start items-start gap-8 inline-flex italic">
          <button
            onClick={banHandler}
            className="w-8 h-12 flex-col justify-start items-center inline-flex"
          >
            <img className="w-8 h-8 relative" src="ban.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              ban
            </div>
          </button>
          <button
            onClick={addModHandler}
            className="w-8 h-12 flex-col justify-start items-center inline-flex"
          >
            <img className="w-8 h-8 relative" src="addMod.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              addMod
            </div>
          </button>
          <button
            onClick={kickHandler}
            className="w-8 h-12 flex-col justify-start items-center inline-flex"
          >
            <img className="w-8 h-8 relative" src="kick.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              kick
            </div>
          </button>
        </div>
        {/* default buttons */}
        <div className="left-[37px] top-[69px] absolute justify-start items-start gap-[23px] inline-flex italic">
          <button
            onClick={gameInviteHandler}
            className="flex-col justify-start items-center inline-flex"
          >
            <img className="w-8 h-8 relative" src="mark_as_unread.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              1 vs 1
            </div>
          </button>
          <button
            onClick={followHandler}
            className="flex-col justify-start items-start inline-flex"
          >
            <img className="w-8 h-8 relative" src="person_add.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              follow
            </div>
          </button>
          <button
            onClick={muteHandler}
            className="flex-col justify-start items-start inline-flex"
          >
            <img className="w-8 h-8 relative" src="mute.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              mute
            </div>
          </button>
          <button
            onClick={blockHandler}
            className="flex-col justify-start items-start inline-flex"
          >
            <img className="w-8 h-8 relative" src="block.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              block
            </div>
          </button>
        </div>
        {/* title section */}
        <div className="left-[65px] top-[27px] absolute text-neutral-600 text-base font-normal">
          {userName}
        </div>
        <img
          className="w-8 h-8 rounded-[70%] left-[23px] top-[22px] absolute"
          src={profileImg}
        />
        <button onClick={infoHandler}>
          <img
            className="w-7 h-7 left-[200px] top-[22px] absolute"
            src="info.svg"
          />
        </button>
        <button
          onClick={() => {
            actions.setShowChatUserInfo(false);
          }}
          className="z-10"
        >
          <img
            className="w-6 h-6 left-[238px] top-[24px] absolute"
            src="cancel.svg"
          />
        </button>
      </div>
    );
  // if(type == "default")
  else
    return (
      <div className="w-[276px] h-[138px] rounded-[10px] bg-[#FEFEFE] relative">
        {/* default buttons */}
        <div className="left-[37px] top-[69px] absolute justify-start items-start gap-[23px] inline-flex italic">
          <button
            onClick={gameInviteHandler}
            className="flex-col justify-start items-center inline-flex"
          >
            <img className="w-8 h-8 relative" src="mark_as_unread.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              1 vs 1
            </div>
          </button>
          <button
            onClick={followHandler}
            className="flex-col justify-start items-start inline-flex"
          >
            <img className="w-8 h-8 relative" src="person_add.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              follow
            </div>
          </button>
          <button
            onClick={muteHandler}
            className="flex-col justify-start items-start inline-flex"
          >
            <img className="w-8 h-8 relative" src="mute.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              mute
            </div>
          </button>
          <button
            onClick={blockHandler}
            className="flex-col justify-start items-start inline-flex"
          >
            <img className="w-8 h-8 relative" src="block.svg" />
            <div className="text-neutral-600 text-[13px] font-bold italic">
              block
            </div>
          </button>
        </div>
        {/* title section */}
        <div className="left-[65px] top-[27px] absolute text-neutral-600 text-base font-normal">
          {userName}
        </div>
        <img
          className="w-8 h-8 rounded-[70%] left-[23px] top-[22px] absolute"
          src={profileImg}
        />
        <button onClick={infoHandler}>
          <img
            className="w-7 h-7 left-[200px] top-[22px] absolute"
            src="info.svg"
          />
        </button>
        <button
          onClick={() => {
            actions.setShowChatUserInfo(false);
          }}
        >
          <img
            className="w-6 h-6 left-[238px] top-[24px] absolute"
            src="cancel.svg"
          />
        </button>
      </div>
    );
};

export default UserInfo;
