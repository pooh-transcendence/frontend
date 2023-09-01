'use client';

import { useState, useCallback, useEffect } from 'react';

import { userInfo } from '@/app/UserContext';
import { api_get } from '@/app/api';

export interface GameInfo {
  userId: number;
  id: number;
  gameType: string;
  racketSize: number;
  ballSpeed: number;
}

export default function GameCard({ game }: { game: GameInfo }): JSX.Element {
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
          className="absolute top-[2.31rem] left-[2.69rem] w-[40.88rem] h-[0.13rem]"
          alt=""
          src="/line-2.svg"
        />
        <img
          className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/pngegg-4@2x.png"
        />
        <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
          [game settings(todo) {game.ballSpeed} {game.racketSize}]
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
