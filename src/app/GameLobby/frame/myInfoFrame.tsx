'use client';

import React, { useEffect, useState, useContext, use } from 'react';
import GameCard, { GameInfo } from '../cards/gameCard';
import UserStats from './userStats';

import RandomButton from '../button/randomButton';
import VsButton from '../button/vsButton';

import { UserContext, channelInfo } from '@/app/UserContext';
import { gameSocket, api_post, api_get, api_delete } from '@/app/api';

function MakeGame() {
  const { state, actions } = useContext(UserContext);
  const [racketSize, setRacketSize] = useState<number>(0);
  const [ballSpeed, setBallSpeed] = useState<number>(0);
  const createButtonHandler = () => {
    if (racketSize === 0 || ballSpeed === 0) return;
    api_post('/game/oneToOneGame', {
      ballSpeed: ballSpeed,
      racketSize: racketSize,
    })
      .then((res) => {
        console.log(res);
        actions.setTargetGame(res.data.data.gameId);
        actions.setShowMakeGame(false);
        actions.setShowMatching(true);
      })
      .catch((e) => console.log(e));
  }; // todo

  // #7649BB
  return (
    <div className="Makegame w-[385px] h-[180px] relative">
      <div className="Bg w-[385px] h-[180px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />

      <div className="Ballspeedcheck w-[282px] left-[54px] top-[101px] absolute justify-center items-center gap-[5px] inline-flex">
        <button
          onClick={() => {
            setBallSpeed(1);
          }}
          className="text-left w-[60.50px] h-6 relative"
        >
          <img
            src={ballSpeed === 1 ? 'checkmarks1.svg' : 'checkmarks0.svg'}
            className="w-6 h-6 left-[0.50px] top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex"
          />
          <div className="Low w-9 h-[19px] left-[24.50px] top-[1px] absolute text-neutral-600 text-lg font-bold">
            low
          </div>
        </button>

        <button
          onClick={() => {
            setBallSpeed(2);
          }}
          className="text-left w-[108.25px] h-6 relative"
        >
          <img
            src={ballSpeed === 2 ? 'checkmarks1.svg' : 'checkmarks0.svg'}
            className="w-6 h-6 left-[0.25px] top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex"
          />
          <div className="Moderate w-[84px] h-[19px] left-[24.25px] top-[1px] absolute text-neutral-600 text-lg font-bold">
            moderate
          </div>
        </button>

        <button
          onClick={() => {
            setBallSpeed(3);
          }}
          className="text-left w-[109.88px] h-6 relative"
        >
          <img
            src={ballSpeed === 3 ? 'checkmarks1.svg' : 'checkmarks0.svg'}
            className="w-6 h-6 left-[0.88px] top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex"
          />
          <div className="High w-[85px] h-[19px] left-[24.88px] top-[1px] absolute text-neutral-600 text-lg font-bold">
            high
          </div>
        </button>
      </div>
      <div className="BallSpeed w-[110px] h-5 left-[63px] top-[77px] absolute text-neutral-600 text-base font-normal">
        ball speed
      </div>
      <div className="Ballspeedicon w-8 h-8 left-[17px] top-[71px] absolute" />

      <div className="RacketSizeCheck left-[51px] top-[41px] absolute justify-start items-start gap-[22px] inline-flex">
        <div className="racketSizecheck w-[243.25px] h-6 justify-start items-start gap-[9px] inline-flex">
          <button
            onClick={() => {
              setRacketSize(1);
            }}
            className=" w-[68px] h-6 relative"
          >
            <img
              src={racketSize === 1 ? 'checkmarks1.svg' : 'checkmarks0.svg'}
              className="w-6 h-6 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex"
            />
            <div className="Small w-11 h-[19px] left-[24px] top-[1px] absolute text-neutral-600 text-lg font-bold">
              small
            </div>
          </button>
          <button
            onClick={() => {
              setRacketSize(2);
            }}
            className=" w-[91.50px] h-6 relative"
          >
            <img
              src={racketSize === 2 ? 'checkmarks1.svg' : 'checkmarks0.svg'}
              className="w-6 h-6 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex"
            />
            <div className="Medium w-[67px] h-[19px] left-[24.50px] top-[1px] absolute text-neutral-600 text-lg font-bold">
              medium
            </div>
          </button>
          <button
            onClick={() => {
              setRacketSize(3);
            }}
            className=" w-[65.75px] h-6 relative"
          >
            <img
              src={racketSize === 3 ? 'checkmarks1.svg' : 'checkmarks0.svg'}
              className="w-6 h-6 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex"
            />
            <div className="Large w-[41px] h-[19px] left-[24.75px] top-[1px] absolute text-neutral-600 text-lg font-bold">
              large
            </div>
          </button>
        </div>
      </div>
      <div className="racketSize w-[129px] h-[19px] left-[63px] top-[17px] absolute text-neutral-600 text-base font-normal">
        racket size
      </div>
      <div className="racketSizeicon w-[33.39px] h-8 left-[18.78px] top-[14px] absolute" />

      <button
        onClick={() => {
          actions.setShowMakeGame(false);
        }}
      >
        <img
          src="cancel.svg"
          className="w-6 h-6 left-[355px] top-[5px] absolute"
        />
      </button>

      <button
        onClick={createButtonHandler}
        className="Createbutton w-[75px] h-8 left-[155px] top-[136px] absolute"
      >
        <img
          src="sweep.svg"
          className="SweepFill0Wght300Grad0Opsz481 w-8 h-8 left-0 top-0 absolute"
        />
        <div className="Create left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold">
          create
        </div>
      </button>
    </div>
  );
}

function WaitMatch() {
  const { state, actions } = useContext(UserContext);

  const cancelMatchHandler = () => {
    api_delete(`/game/oneToOneGame/${state.targetGame}`, {}).then((e) => {
      actions.setShowMatching(false);
    });
  }; // todo
  return (
    <div className="Waitmatch w-[385px] h-[147px] relative">
      <div className="Bg w-[385px] h-[147px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
      <button onClick={cancelMatchHandler}>
        <img
          src="cancel.svg"
          className="CancelFill0Wght300Grad0Opsz481 w-6 h-6 left-[355px] top-[5px] absolute"
        />
      </button>
      <div className="Matching w-[121px] h-8 left-[132px] top-[35px] absolute">
        <div className="Matching w-[121px] h-8 left-0 top-0 absolute text-right">
          <span className="text-neutral-600 text-2xl font-bold">ma</span>
          <span className="text-purple-500 text-2xl font-bold">tch</span>
          <span className="text-neutral-600 text-2xl font-bold">ing...</span>
        </div>
      </div>
      <div className="Loadingprogress w-[41px] h-[41px] left-[172px] top-[73px] absolute">
        <div className=" w-10 h-10 left-[0.90px] top-[0.90px] absolute">
          <div className=" w-10 h-10 left-0 top-0 absolute bg-purple-700 rounded-full" />
          <div className="Ellipse1 w-1.5 h-1.5 left-[17.20px] top-[34px] absolute bg-purple-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default function MyInfoFrame() {
  const { state, actions } = useContext(UserContext);
  const [gameList, setGameList] = useState<GameInfo[]>([]);

  useEffect(() => {
    api_get('/game/allOneToOneGame').then((res) => {
      console.log('/game/allOneToOneGame', res.data.data);
      setGameList(res.data.data);
    });

    const addOneToOneGame = (targetGame: GameInfo) => {
      console.log('addOneToOneGame', targetGame);
      setGameList([...gameList, targetGame]);
    };
    const deleteOneToOneGame = (targetGame: GameInfo) => {
      console.log('deleteOneToOneGame', targetGame);
      setGameList(gameList.filter((elem) => elem.id != targetGame.id));
    };

    console.log('game listener on');
    gameSocket.on('addOneToOneGame', addOneToOneGame);
    gameSocket.on('deleteOneToOneGame', deleteOneToOneGame);

    return () => {
      gameSocket.off('addOneToOneGame', addOneToOneGame);
      gameSocket.off('deleteOneToOneGame', deleteOneToOneGame);
    };
  }, []);

  return (
    <>
      <div className="absolute w-[50rem] h-[40.63rem] text-[0.75rem] text-[#555555]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />

        {/* match list section */}
        <div className="absolute h-[65.69%] w-[93.13%] top-[30.46%] right-[3.25%] bottom-[3.85%] left-[3.63%] text-right text-[0.81rem]">
          <div className="absolute h-[90.87%] w-full top-[9.13%] right-[0%] bottom-[0%] left-[0%] rounded-3xs bg-gray shadow-[0px_2px_10px_rgba(0,_0,_0,_0.25)]" />
          <div className="absolute h-[64.09%] w-[93.56%] top-[15.69%] right-[2.68%] bottom-[20.22%] left-[3.76%] flex flex-col items-start justify-start gap-[0.81rem]">
            {/* <GameCard game={{ opponentId: "1", gameId: "asdf", gameSettings: [] }} /> */}
            {gameList.map((game, idx) => {
              return <GameCard key={idx} game={game} />;
            })}
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

        {/* myinfo section */}
        <UserStats />

        {/* create game section */}
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

        {/* <button onClick={() => {}} className="text-left"> */}
        <VsButton />
        {/* </button> */}
        {/* <button onClick={() => {}} className="text-left"> */}
        <RandomButton />
        {/* </button> */}
      </div>

      {state.showMakeGame && (
        <div className="z-10 flex items-center justify-center h-[100%]">
          <MakeGame />
        </div>
      )}
      {state.showMatching && (
        <div className="z-10 flex items-center justify-center h-[100%]">
          <WaitMatch />
        </div>
      )}
    </>
  );
}
