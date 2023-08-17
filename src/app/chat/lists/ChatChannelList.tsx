// 'use client'

import React, { useState, useContext, useEffect } from "react";
import { ChatBottomBar } from "../frame/ChatBottomBar";
import { ChatTitle } from "../frame/ChatTitle";
import { UserContext, chatStates, channelInfo as channel } from "@/app/UserContext";
import { api_get, api_post, socket } from "@/app/api";

interface ChannelListProps {
    channelName: string,
    channelOwner: string,
    channelPeopleCnt: number,
    channelProfileImg: string,
};

const ChannelListComponent = ({
    channelName,
    channelOwner,
    channelPeopleCnt,
    channelProfileImg = "https://via.placeholder.com/28x28",
}: ChannelListProps): JSX.Element => {
    return (
        <>
            <div className="w-[260px] h-[42px] relative">
                <img className="w-7 h-7 left-0 top-[4px] absolute" src={channelProfileImg} />
                <div className="w-[61px] left-[198px] top-0 absolute justify-end items-start inline-flex">
                    <img className="w-4 h-4 relative" src="person.svg" />
                    <div className="text-right text-neutral-600 text-[13px] font-normal">{channelPeopleCnt}</div>
                </div>
                <div className="w-[77px] h-[21px] left-[183px] top-[14px] absolute text-right text-neutral-600 text-[13px] font-normal">{channelOwner}</div>
                <div className="w-[152px] h-5 left-[41px] top-[8px] absolute text-neutral-600 text-xl font-normal">{channelName}<br /></div>
                <img className="absolute left-[34px] top-[39px]" src="channelListComp_underLine.svg" />
            </div>
        </>
    );
};

export const ChatChannelList = (): JSX.Element => {

    const { state, actions } = useContext(UserContext);
    const [channelList, setChannelList] = useState<channel[]>([]);

    useEffect(() => {
        api_get("/user/channel").then(async (data) => {
            console.log("/user/channel", data.data.data);
            const res: channel[] = data.data.data;
            const ret: channel[] = [];
            for (const elem of res) {
                let tmp = elem;
                await api_get(`/channel/admin/${elem.id}`).then((data) => {
                    // console.log(data.data.data.filter(
                    //     (it: any) => state.userInfo.id == it.id));
                    tmp.userType = data.data.data.filter(
                        (it: any) => state.userInfo.id == it.id).length ? "MODERATOR" : "DEFAULT";
                });
                await api_get(`/user/${elem.ownerId}`).then((data) => {
                    console.log(data.data.data.nickname);
                    tmp.ownerId = data.data.data.nickname;
                });
                ret.push({ ...tmp, inviteSelectedList: [], channelUser: [] });
            }
            setChannelList(ret);
        });
    }, []);

    function makeChannelListComp(channel: channel) {
        const { state, actions } = useContext(UserContext);

        const gotoChat = () => {
            actions.setChatState(chatStates.channelChat);
            actions.setChannelChattingInfo(channel);
            console.log("change to channelChat", channel.id);
        }
        return (
            <button key={channel.id+""} onClick={gotoChat}>
                <ChannelListComponent channelName={channel.channelName} channelOwner={channel.ownerId+""} channelPeopleCnt={42/* channel.channelUser.length */} channelProfileImg="https://via.placeholder.com/32x32" />
            </button>
        )
    }

    return (
        <div className="w-[300px] h-[650px] relative">
            {/* BottomBarSection */}
            <div className="w-[300px] h-[51px] left-0 top-[599px] absolute">
                <ChatBottomBar />
            </div>
            {/* ContentsSection */}
            <div className="w-[260px] py-2 left-[20px] top-[58px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                {
                    channelList.map((channel, idx) => {
                        return makeChannelListComp(channel);
                    })
                }
            </div>
            {/* TitleSection */}
            <div className="w-[300px] h-[50px] left-0 top-0 absolute">
                <ChatTitle title="" type="channelList" id={-1} />
            </div>
        </div>
    )
}
