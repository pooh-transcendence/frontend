import React from "react";

interface Props{
    type: "mod" | "default",
    userName: string,
    profileImg: string,
};
const UserInfo = ({
    type,
    userName = "temporalUser",
    profileImg = "https://via.placeholder.com/32x32",
    }: Props): JSX.Element => {
    if(type === "mod")
        return (
            <div className="w-[276px] h-[205px] bg-[#FEFEFE] relative">
                {/* mod buttons */}
                <div className="left-[56px] top-[136px] absolute justify-start items-start gap-8 inline-flex italic">
                    <div className="w-8 h-12 flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="ban.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">ban</div>
                    </div>
                    <div className="w-8 h-12 flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="addMod.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">addMod</div>
                    </div>
                    <div className="w-8 h-12 flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="kick.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">kick</div>
                    </div>
                </div>
                {/* default buttons */}
                <div className="left-[37px] top-[69px] absolute justify-start items-start gap-[23px] inline-flex italic">
                    <div className="flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="mark_as_unread.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">1 vs 1</div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="person_add.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">follow</div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="mute.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">mute</div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="block.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">block</div>
                    </div>
                </div>
                {/* title section */}
                <div className="left-[65px] top-[27px] absolute text-neutral-600 text-base font-normal">{userName}</div>
                <img className="w-8 h-8 left-[23px] top-[22px] absolute" src={profileImg} />
                <img className="w-7 h-7 left-[200px] top-[22px] absolute" src="info.svg" />
                <img className="w-6 h-6 left-[238px] top-[24px] absolute" src="cancel.svg" />
            </div>
        );
    else // if(type == "default")
        return (
            <div className="w-[276px] h-[138px] bg-[#FEFEFE] relative">
                {/* default buttons */}
                <div className="left-[37px] top-[69px] absolute justify-start items-start gap-[23px] inline-flex italic">
                    <div className="flex-col justify-start items-center inline-flex">
                        <img className="w-8 h-8 relative" src="mark_as_unread.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">1 vs 1</div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="person_add.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">follow</div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="mute.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">mute</div>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                        <img className="w-8 h-8 relative" src="block.svg" />
                        <div className="text-neutral-600 text-[13px] font-bold">block</div>
                    </div>
                </div>
                {/* title section */}
                <div className="left-[65px] top-[27px] absolute text-neutral-600 text-base font-normal">{userName}</div>
                <img className="w-8 h-8 left-[23px] top-[22px] absolute" src={profileImg} />
                <img className="w-7 h-7 left-[200px] top-[22px] absolute" src="info.svg" />
                <img className="w-6 h-6 left-[238px] top-[24px] absolute" src="cancel.svg" />
            </div>
        );
} 

export default UserInfo;