'use client';

import { useState, useEffect } from 'react';

import { gameInfo, userInfo } from '@/app/UserContext';
import { api_get } from '@/app/api';

export function getGameSettingString(game : gameInfo | GameWaitingInfo)
{
  let res="";
  res+="racket ";
  switch (game.racketSize) {
    case 1:
      res+="small / ";
      break;
    case 2:
      res+="medium / ";
      break;
    case 3:
      res+="large / ";
      break;
  }
  res+="speed ";
  switch (game.ballSpeed) {
    case 1:
      res+="low";
      break;
    case 2:
      res+="moderate";
      break;
    case 3:
      res+="high";
      break;
  }
  return res;
}

export interface GameWaitingInfo {
  userId: number;
  id: number;
  gameType: string;
  racketSize: number;
  ballSpeed: number;
};

export default function GameCard({ game }: { game: GameWaitingInfo }): JSX.Element {
  const [opponent, setOpponent] = useState<userInfo>();
  
  useEffect(() => {
    api_get(`/user/${game.userId}`).then((res) => {
      setOpponent(res.data.data);
    });
  }, []);

  const getWinRate = (win: Object[], lose: Object[]): string => {
    const numerator = win.length;
    const denominator = win.length + lose.length;
    if (denominator === 0) {
      return '0.00%';
    }
    const rate = (numerator / denominator) * 100;
    return `${rate.toFixed(2)}%`;
  };

  const gameEnterHandler = () => {
    console.log('enter to ', game.id);
  };

  return (
    <>
      <div className="relative w-[43.56rem] h-[2.56rem]">
        <img
          className="relative top-[2.31rem] left-[2.69rem]"
          src="/line-2.svg"
        />
        <img
          className="relative rounded-[70%] h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          src={opponent?.avatar ? opponent.avatar : "/pngegg-4@2x.png"}
        />
        <div className="absolute top-[0.94rem] left-[20.94rem] text-right inline-block w-[20rem] h-[1.31rem]">
          {getGameSettingString(game)}
        </div>
        <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
          <div className="relative">
            {opponent ? opponent.nickname : 'loading'}
          </div>
          <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
            <div className="relative">winrate</div>
            <div className="relative">
              {getWinRate(
                opponent ? opponent.winnerGame : [],
                opponent ? opponent.loserGame : [],
              )}
            </div>
          </div>
        </div>

        <button onClick={gameEnterHandler}>
          <img
            className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/enterbutton.svg"
          />
        </button>
      </div>
    </>
  );
}
