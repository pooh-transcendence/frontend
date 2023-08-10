import React from "react";
import ChannelCards from "../cards/channelCards";
import UserStats from "./userStats";


export default function MyInfoFrame() {
    return (
        <>
        <div className="absolute top-[7.81rem] left-[7.44rem] w-[50rem] h-[40.63rem] text-[0.75rem]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
          <div className="absolute h-[65.69%] w-[93.13%] top-[30.46%] right-[3.25%] bottom-[3.85%] left-[3.63%] text-right text-[0.81rem]">
            <div className="absolute h-[90.87%] w-full top-[9.13%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)]" />
            <div className="absolute h-[64.09%] w-[93.56%] top-[15.69%] right-[2.68%] bottom-[20.22%] left-[3.76%] flex flex-col items-start justify-start gap-[0.81rem]">
              <ChannelCards />
              <ChannelCards />
              <ChannelCards />
              <ChannelCards />
              <ChannelCards />
            </div>
            <div className="absolute h-[9.23%] w-[33.15%] top-[0%] right-[60.54%] bottom-[90.77%] left-[6.31%] text-left text-[1.25rem]">
              <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
                match list
              </div>
            </div>
            <img
              className="absolute h-[5.24%] w-[3.09%] top-[1%] right-[95.03%] bottom-[93.77%] left-[1.88%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector1.svg"
            />
          </div>
          <UserStats />
          <div className="absolute h-[4.92%] w-[21.5%] top-[2.62%] right-[17.75%] bottom-[92.46%] left-[60.75%] text-[1.25rem]">
            <img
              className="absolute h-full w-[18.6%] top-[0%] right-[81.4%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/videogame-asset-fill0-wght300-grad0-opsz48-1.svg"
            />
            <div className="absolute h-[84.38%] w-[76.16%] top-[3.13%] left-[23.84%] inline-block">
              create game
            </div>
          </div>
          <div className="absolute h-[7.54%] w-[28.13%] top-[20.46%] right-[9.25%] bottom-[72%] left-[62.63%]">
            <img
              className="absolute top-[2.56rem] left-[0.02rem] w-[14.05rem] h-[0.5rem]"
              alt=""
              src="/line-3.svg"
            />
            <i className="absolute top-[0rem] left-[0.06rem] inline-block w-[11.44rem] h-[1rem]">
              create custom game
            </i>
            <button>
              <i className="flex-row absolute top-[0.69rem] text-[1.5rem] w-[14rem] font-bold text-right text-slateblue">
                <span>1 vs 1</span>
                <span className="text-dimgray"> Matching</span>
              </i>
            </button>
          </div>
          <div className="absolute h-[7.54%] w-[28.13%] top-[9.23%] right-[9.25%] bottom-[83.23%] left-[62.63%]">
            <img
              className="absolute top-[2.56rem] left-[0.02rem] w-[14.05rem] h-[0.5rem]"
              alt=""
              src="/line-3.svg"
            />
            <i className="absolute top-[0rem] left-[0.06rem] inline-block w-[11.44rem] h-[1rem]">
              play with online user
            </i>
            
            <button>
              <i className="flex-row absolute top-[0.69rem] text-[1.5rem] w-[14rem] font-bold text-right text-slateblue">
                <span>Random</span>
                <span className="text-dimgray"> Matching</span>
              </i>
            </button>
          </div>
        </div>
    </>
    );
}