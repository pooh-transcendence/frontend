'use client'
import { useContext, useEffect, useState } from "react";
import MatchCard from "./matchCard";
import { UserContext, gameInfo, userInfo } from "@/app/UserContext";

function getRelativeWinRate(winnerGames: gameInfo[], loserGames: gameInfo[], target: number, type: number) {
  const winCount = winnerGames.filter((elem) => elem.winner.id == target).length;
  const loseCount = loserGames.filter((elem) => elem.loser.id == target).length;

  let numerator;
  if (type == 0) numerator = winCount; // winner is me
  else numerator = loseCount;

  const denominator = winCount + loseCount;

  if (denominator === 0) {
    return '0.00%';
  }
  const rate = (numerator / denominator) * 100;
  return `${rate.toFixed(2)}%`;
}

export default function MatchHistory({ target }: { target: userInfo }) {
  const { state, actions } = useContext(UserContext);
  // left is always me(infoTarget) 
  
  // winner is me
  if (target.winnerGame && target.loserGame)
    return (
      <>
        <div className="absolute h-[58.15%] w-[94.4%] top-[38.15%] right-[2.8%] bottom-[3.69%] left-[2.8%] rounded-3xs bg-gray shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)]" />
        <div className="absolute scroll-hidden top-[calc(50%_-_69px)] left-[calc(50%_-_450px)] h-[22.5rem] overflow-y-auto flex flex-col items-start justify-start gap-[0.63rem]">
          {
            [...target.winnerGame, ...target.loserGame].sort((a, b) => Date.parse(a.updatedAt) - Date.parse(b.updatedAt))
              .map((elem, idx) => {
                return (
                  <MatchCard key={idx} game={elem} relativeWinRate={getRelativeWinRate(target.winnerGame, target.loserGame, target.id, 0)} leftUserId={state.infoTargetUser} />
                )
              })
          }
        </div>
        <div className="absolute h-[4%] w-[15.8%] top-[32.92%] right-[79.6%] bottom-[63.08%] left-[4.6%] text-[1.25rem]">
          <div className="absolute h-full w-[99.76%] top-[0%] right-[0%] bottom-[0%] left-[0.24%]">
            <div className="absolute h-full w-[81.21%] top-[0%] left-[18.79%] inline-block">
              match history
            </div>
            <img
              className="absolute h-[82.49%] w-[13.47%] top-[16.05%] right-[86.53%] bottom-[1.47%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/match_history.svg"
            />
          </div>
        </div>
      </>
    );
    return <></>;
};