'use client'

import { UserContext } from "@/app/UserContext";
import { useContext } from "react";

// completed

export default function UserStats() {
  const {state, actions}=useContext(UserContext);

  const getWinRate=(win: Object[], lose: Object[]): string => {
    const numerator = win.length;
    const denominator = win.length + lose.length;
    if (denominator === 0) {
      return '0.00%';
    }
    const rate = (numerator / denominator) * 100;
    return `${rate.toFixed(2)}%`;
  };

  const getGameCount=(a: Object[], b: Object[]|void): String => {
    if(b)
      return a.length+b.length+'';
    else
      return a.length+'';
  };

    return (
        <>
        <div className="absolute h-[24.62%] w-[51.75%] top-[2.92%] right-[42.88%] bottom-[72.46%] left-[5.38%] text-[0.94rem]">
            <div className="absolute h-[19.38%] w-[96.62%] top-[80.63%] right-[0%] bottom-[0%] left-[3.38%]">
              <div className="absolute h-[16.13%] w-full top-[0%] right-[0%] bottom-[83.87%] left-[0%]">
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-blueviolet w-[25rem] h-[0.44rem] overflow-hidden opacity-[0.2]" />
                <div className="absolute top-[0rem] left-[0rem] rounded-3xs bg-slateblue w-[25rem] h-[0.44rem] overflow-hidden" style={{ width: getWinRate(state.userInfo.winnerGame || [], state.userInfo.loserGame || []) }}/>
              </div>
              <div className="absolute w-[24.59%] top-[25.81%] left-[0%] leading-[150%] inline-block">
                winrate {getWinRate(state.userInfo.winnerGame || [], state.userInfo.loserGame || [])}
              </div>
            </div>
            <div className="absolute h-[46.88%] w-[96.62%] top-[23.75%] right-[0%] bottom-[29.38%] left-[3.38%] flex flex-row items-center justify-center gap-[1.94rem] text-center text-[2.5rem]">
              <div className="relative w-[7.06rem] h-[4.69rem]">
                <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                  {getGameCount(state.userInfo.winnerGame || [], state.userInfo.loserGame || [])}
                </b>
                <div className="absolute top-[60%] left-[24.78%] text-[1.25rem] leading-[150%]">
                  games
                </div>
              </div>
              <div className="relative w-[7.06rem] h-[4.69rem] text-midnightblue">
                <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                  {getGameCount(state.userInfo.winnerGame || [])}
                </b>
                <div className="absolute top-[60%] left-[31.86%] text-[1.25rem] leading-[150%]">
                  wins
                </div>
              </div>
              <div className="relative w-[7.06rem] h-[4.69rem] text-brown">
                <b className="absolute h-[81.33%] w-full top-[0%] left-[0%] leading-[150%] inline-block">
                {getGameCount(state.userInfo.loserGame || [])}
                </b>
                <div className="absolute top-[60%] left-[30.09%] text-[1.25rem] leading-[150%]">
                  loses
                </div>
              </div>
            </div>
            <div className="absolute h-[16.88%] w-[31.64%] top-[0%] left-[7.97%] text-[1.25rem] inline-block">
              my info
            </div>
            <img
              className="absolute h-[13.13%] w-[5.56%] top-[2.5%] right-[94.44%] bottom-[84.38%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/vector2.svg"
            />
        </div>
        </>
    );
}