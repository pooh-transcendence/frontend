import React from "react";

interface Props {
    title: string,
    type: "channelChat" | "friendChat" | "channelList" | "friendList",
}

export const ChatTitle = ({
    title = "testNickasdf",
    type,
}: Props): JSX.Element => {
    return (
        <section>
            {type == "channelChat" && (
                <div className="w-[300px] h-[50px] relative">
                    <div className="w-[300px] h-[50px] left-0 top-0 absolute bg-slate-100 rounded-tl-[10px] rounded-tr-[10px]" />
                    <div className="w-[195px] h-6 left-[51.43px] top-[19px] absolute text-neutral-600 text-base font-normal">{title}<br /><br /></div>
                    <div className="w-[23px] h-[23px] left-[16px] top-[17px] absolute">
                        <img className="w-[23px] h-[23px] left-0 top-0 absolute" src="backButton.svg" />
                    </div>
                    <img className="w-[25px] h-[25px] left-[224px] top-[16px] absolute justify-center items-center inline-flex" src="settings.svg" />
                    <img className="w-7 h-7 left-[258px] top-[14px] absolute justify-center items-center inline-flex" src="persons_add.svg" />
                </div>
            )}
            {type == "channelList" && (
                <div className="w-[300px] h-[50px] relative">
                    <div className="w-[300px] h-[50px] left-0 top-0 absolute bg-slate-100 rounded-tl-[10px] rounded-tr-[10px]" />
                    <div className="w-[195px] h-6 left-[51.43px] top-[19px] absolute text-neutral-600 text-base font-normal">channel<br /><br /></div>
                    <div className="w-[23px] h-[23px] left-[16px] top-[17px] absolute">
                        <img className="w-[23px] h-[23px] left-0 top-0 absolute" src="forum.svg" />
                    </div>
                </div>
            )}
            {type == "friendChat" && (
                <div className="w-[300px] h-[50px] relative">
                    <div className="w-[300px] h-[50px] left-0 top-0 absolute bg-slate-100 rounded-tl-[10px] rounded-tr-[10px]" />
                    <div className="w-[195px] h-6 left-[51.43px] top-[19px] absolute text-neutral-600 text-base font-normal">{title}<br /><br /></div>
                    <div className="w-[23px] h-[23px] left-[16px] top-[17px] absolute">
                        <img className="w-[23px] h-[23px] left-0 top-0 absolute" src="backButton.svg" />
                    </div>
                    <img className="w-7 h-7 left-[258px] top-[14px] absolute justify-center items-center inline-flex" src="settings.svg" />
                </div>
            )}
            {type == "friendList" && (
                <div className="w-[300px] h-[50px] relative">
                    <div className="w-[300px] h-[50px] left-0 top-0 absolute bg-slate-100 rounded-tl-[10px] rounded-tr-[10px]" />
                    <div className="w-[195px] h-6 left-[51.43px] top-[19px] absolute text-neutral-600 text-base font-normal">friends<br /><br /></div>
                    <div className="w-[23px] h-[23px] left-[16px] top-[17px] absolute">
                        <img className="w-[23px] h-[23px] left-0 top-0 absolute" src="group.svg" />
                    </div>
                    <img className="w-7 h-7 left-[258px] top-[14px] absolute justify-center items-center inline-flex" src="group_add.svg" />
                </div>
            )}
        </section>
    )
};