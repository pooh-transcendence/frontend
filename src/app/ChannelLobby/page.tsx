import type { NextPage } from "next";
import { useCallback } from "react";
import styles from "../index.module.css";
import UserImage from "@/components/userImage";

import Image from "next/image";


const ChannelLobby: NextPage = () => {
  const onSideButton2Click = useCallback(() => {
  }, []);
  return (
    <>    
        <div className="w-[50rem] h-[40.625rem] left-[7.44rem] top-[7.81rem] relative">
        <div className="w-[800px] h-[650px] left-[7.44rem] top-[7.81rem] right-[22.56rem]rounded-[10px] border border-neutral-600" />
        <div className="w-[745px] h-[606px] left-[27px] top-[19px]">
            <div className="w-[745px] h-[603px] left-0 top-[3px] justify-center items-center inline-flex" />
            <div className="w-[247px] h-[25px] left-[63.44em] top-0 text-neutral-600 text-xl font-normal">channel list</div>
            <div className="w-[697px] h-[530px] left-[27px] top-[56px] flex-col justify-start items-start gap-[13px] inline-flex">
                <div className="flex-col justify-center items-center gap-[5px] flex">
                    <div className="text-center text-neutral-600 text-base font-normal">public</div>
                </div>
                <UserImage></UserImage>
                <UserImage></UserImage>
                <UserImage></UserImage>
                <UserImage></UserImage>
                <UserImage></UserImage>
                <UserImage></UserImage>
                <UserImage></UserImage>
                <div className="flex-col justify-center items-center gap-[5px] flex">
                    <div className="text-center text-neutral-600 text-base font-normal">protected</div>
                </div>
                <div className="w-[697px] h-[41px] relative">
                <Image src="/userImage.png" alt="Logo" width={25} height={25} />
                    <div className="w-[149px] h-[21px] left-[495px] top-[15px] text-right text-neutral-600 text-[13px] font-normal">ownername</div>
                    <div className="left-[51px] top-[1px] justify-center items-end gap-3 inline-flex">
                        <div className="text-neutral-600 text-2xl font-normal">sfesfe</div>
                        <div className="justify-center items-end gap-[3px] flex">
                            <div className="text-neutral-600 text-[13px] font-normal">1</div>
                            <div className="text-neutral-600 text-[13px] font-normal">person</div>
                        </div>
                        <div className="w-4 h-4 relative" />
                    </div>
                    <div className="w-8 h-8 left-[658px] top-[4px]" />
                </div>
                <div className="w-[697px] h-[41px] relative">
                <Image src="/userImage.png" alt="Logo" width={25} height={25} />
                    <div className="w-[149px] h-[21px] left-[495px] top-[15px] text-right text-neutral-600 text-[13px] font-normal">owner</div>
                    <div className="left-[51px] top-[1px] justify-center items-end gap-3 inline-flex">
                        <div className="text-neutral-600 text-2xl font-normal">title</div>
                        <div className="justify-center items-end gap-[3px] flex">
                            <div className="text-neutral-600 text-[13px] font-normal">3</div>
                            <div className="text-neutral-600 text-[13px] font-normal">people</div>
                        </div>
                        <div className="w-4 h-4 relative" />
                    </div>
                    <div className="w-8 h-8 left-[658px] top-[4px] " />
                </div>
                <div className="w-[697px] h-[41px] relative">
                <Image src="/userImage.png" alt="Logo" width={25} height={25} />
                    <div className="w-[149px] h-[21px] left-[495px] top-[15px] text-right text-neutral-600 text-[13px] font-normal">owner</div>
                    <div className="left-[51px] top-[1px] absolute justify-center items-end gap-3 inline-flex">
                        <div className="text-neutral-600 text-2xl font-normal">title</div>
                        <div className="justify-center items-end gap-[3px] flex">
                            <div className="text-neutral-600 text-[13px] font-normal">3</div>
                            <div className="text-neutral-600 text-[13px] font-normal">people</div>
                        </div>
                        <div className="w-4 h-4 relative" />
                    </div>
                    <div className="w-8 h-8 left-[658px] top-[4px] absolute" />
                </div>
                <div className="w-[697px] h-[41px] relative">
                <Image src="/userImage.png" alt="Logo" width={25} height={25} />
                    <div className="w-[149px] h-[21px] left-[495px] top-[15px] absolute text-right text-neutral-600 text-[13px] font-normal">testtes</div>
                    <div className="left-[51px] top-[1px] absolute justify-center items-end gap-3 inline-flex">
                        <div className="text-neutral-600 text-2xl font-normal">title</div>
                        <div className="justify-center items-end gap-[3px] flex">
                            <div className="text-neutral-600 text-[13px] font-normal">3</div>
                            <div className="text-neutral-600 text-[13px] font-normal">people</div>
                        </div>
                        <div className="w-4 h-4 relative" />
                    </div>
                    <div className="w-8 h-8 left-[658px] top-[4px] absolute" />
                </div>
            </div>
            <div className="w-[88px] h-8 left-[633px] top-[9px] absolute justify-start items-center gap-0.5 inline-flex">
                <div className="w-[54px] h-[27px] text-neutral-600 text-xl font-normal">create<br/></div>
                <div className="w-8 h-8 relative" />
            </div>
            
        </div>
        
    </div>
    
    </>
  );
};

export default ChannelLobby;
