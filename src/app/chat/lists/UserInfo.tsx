import React, { useContext, useEffect, useState } from "react";
import { api_get, api_post, socket } from "@/app/api";
import { UserContext, chatStates } from "@/app/UserContext";

interface Props{
    type: "mod" | "default",
};

const UserInfo = ({
    type,
    }: Props): JSX.Element => {

    const [userName, setUserName]=useState<string>("loading");
    const [profileImg, setProfileImg]=useState<string>("https://via.placeholder.com/32x32");
    const {state, actions}=useContext(UserContext);
    useEffect(() => {
        console.log(state.chatTargetUser);
        api_get(`/user/${state.chatTargetUser}`).then((res) => {
            setUserName(res.data.data.nickname);
            setProfileImg(res.data.data.avatar ?? "https://via.placeholder.com/32x32");
        })
    }, []);

    const gameHandler=() => {};
    const followHandler=() => {socket.emit("createFriend", {
        followingUserId: state.chatTargetUser
    })};
    const muteHandler = () => {actions.setMutedUser({
          userId: state.chatTargetUser,
          until: new Date().getTime() + 1000 * 10, // 10초간 음소거
    })};
    // const blockHandler=() => {socket.emit("createBlock", Number(state.chatTargetUser), (ack: any) => {console.log(ack)})}; // ?
    const blockHandler=() => {
        api_post("/block", {"bannedUserId": state.chatTargetUser})
        if(state.chatState===chatStates.friendChat)
            actions.setChatState(chatStates.friendList);
        // else
        //     actions.setChatState(chatStates.channelList);
    }; // http 400 
    const infoHandler=() => {console.log("info button", state.chatTargetUser)};
    const banHandler=() => {
        socket.emit("updateChannelUser", {userId: state.chatTargetUser, channelId: state.channelChattingInfo.id, isBanned: true});
    };
    const addModHandler=() => {
        socket.emit("kickChannelUser", {userId: state.chatTargetUser, channelId: state.channelChattingInfo.id});
    };
    const kickHandler=() => {
        socket.emit("admin", {userId: state.chatTargetUser, channelId: state.channelChattingInfo.id});
    };

    // if(type === "mod")
    if(state.channelChattingInfo.userType=="MODERATOR")
        return (
            <div className="z-100 w-[276px] h-[205px] bg-[#FEFEFE] relative">
                {/* mod buttons */}
                <div className="left-[56px] top-[136px] absolute justify-start items-start gap-8 inline-flex italic">
                    <button onClick={banHandler} className="w-8 h-12 flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="ban.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">ban</div>
                    </button>
                    <button onClick={addModHandler} className="w-8 h-12 flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="addMod.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">addMod</div>
                    </button>
                    <button onClick={kickHandler} className="w-8 h-12 flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="kick.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">kick</div>
                    </button>
                </div>
                {/* default buttons */}
                <div className="left-[37px] top-[69px] absolute justify-start items-start gap-[23px] inline-flex italic">
                    <button onClick={gameHandler} className="flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="mark_as_unread.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">1 vs 1</div>
                    </button>
                    <button onClick={followHandler} className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="person_add.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">follow</div>
                    </button>
                    <button onClick={muteHandler} className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="mute.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">mute</div>
                    </button>
                    <button onClick={blockHandler} className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="block.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">block</div>
                    </button>
                </div>
                {/* title section */}
                <div className="left-[65px] top-[27px] absolute text-neutral-600 text-base font-normal">{userName}</div>
                <img className="w-8 h-8 left-[23px] top-[22px] absolute" src={profileImg} />
                <button onClick={infoHandler}>
                    <img className="w-7 h-7 left-[200px] top-[22px] absolute" src="info.svg" />
                </button>
                <button onClick={()=>{actions.setShowChatUserInfo(false)}} className="z-10">
                    <img className="w-6 h-6 left-[238px] top-[24px] absolute" src="cancel.svg" />
                </button>
            </div>
        );
    else // if(type == "default")
        return (
            <div className="w-[276px] h-[138px] bg-[#FEFEFE] relative">
                {/* default buttons */}
                <div className="left-[37px] top-[69px] absolute justify-start items-start gap-[23px] inline-flex italic">
                    <button onClick={gameHandler} className="flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="mark_as_unread.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">1 vs 1</div>
                    </button>
                    <button onClick={followHandler} className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="person_add.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">follow</div>
                    </button>
                    <button onClick={muteHandler} className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="mute.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">mute</div>
                    </button>
                    <button onClick={blockHandler} className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="block.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold italic">block</div>
                    </button>
                </div>
                {/* title section */}
                <div className="left-[65px] top-[27px] absolute text-neutral-600 text-base font-normal">{userName}</div>
                <img className="w-8 h-8 left-[23px] top-[22px] absolute" src={profileImg} />
                <button onClick={infoHandler}>
                    <img className="w-7 h-7 left-[200px] top-[22px] absolute" src="info.svg" />
                </button>
                <button onClick={()=>{actions.setShowChatUserInfo(false)}}>
                    <img className="w-6 h-6 left-[238px] top-[24px] absolute" src="cancel.svg" />
                </button>
            </div>
        );
    }

export default UserInfo;