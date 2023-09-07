'use client';

import { useContext, useRef, useState, useEffect } from 'react';
import { gameSocket, api_get } from '@/app/api';
import { UserContext, userInfo } from '../UserContext';

interface gameInfo {
  participants: number[];
  gameType: String;
  racket: number[][];
  score: number[];
  ball: number[];
  isGetScore: boolean;
  whoAmI: 'left' | 'right';
  nickname: string;
}

interface ball {
  new: (
    incrementedSpeed?: number,
    paddleSize?: number,
  ) => {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}

interface ai {
  new: (
    side: string,
    whoAmI: boolean,
  ) => {
    width: number;
    height: number;
    x: number;
    y: number;
    score: number;
  };
}

type GameObject = {
  canvas: any;
  context: any;
};

type game = GameObject & {
  player: any;
  ai: any;
  ball: any;
  running: boolean;
  over: boolean;
  turn: any;
  timer: number;
  round: number;
  color: string;
  gameType: string;
  whoAmI: string;
  initialize: (gameReadyDto: any) => void;
};

interface gameResult {
  id: number;
  gameType: 'LADDER' | '1vs1 PUBLIC' | '1vs1 PRIVATE';
  winner: userInfo;
  loser: userInfo;
  winScore: number;
  loseScore: number;
  ballSpeed: number;
  // "racketSize": number,
}
function ReadyForm() {
  const [ready, setReady] = useState<boolean>(false);

  const readyHandler = () => {
    setReady(true);
    gameSocket.emit('gameStart');
  };

  return (
    <div className="Property1Default w-[385px] h-[147px] relative">
      <div className="Bg w-[385px] h-[147px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
      {ready == true ? (
        <div className="Loadingprogress w-[41px] h-[41px] left-[172px] top-[73px] absolute">
          <div className=" w-10 h-10 left-[0.90px] top-[0.90px] absolute">
            <img src="loading_spinner.png" className="animate-spin" />
          </div>
        </div>
      ) : (
        <button
          onClick={readyHandler}
          className="Createbutton w-[75px] h-8 left-[158px] top-[81px] absolute"
        >
          <img
            src="sweep.svg"
            className="SweepFill0Wght300Grad0Opsz481 w-8 h-8 left-0 top-0 absolute"
          />
          <div className="Ready left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold">
            ready
          </div>
        </button>
      )}
      <div
        className="WaitForReady w-[163px] h-8 left-[111px] top-[35px] absolute text-right text-neutral-600 text-2xl font-bold"
        style={{
          background: `linear-gradient(
        to right,
        #9747FF 30%,
        #555555 50%
      )`,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textFillColor: 'transparent',
          backgroundSize: '500% auto',
          animation: 'textShine 1s ease-in-out infinite alternate',
        }}
      >
        wait for ready...
      </div>
    </div>
  );
}

function GameEnd({ game }: { game: gameResult }) {
  const { state, actions } = useContext(UserContext);

  return (
    <>
      <div className="Property1Win w-[500px] h-[180px] absolute">
        <div className="Makegame w-[500px] h-[180px] left-0 top-0 absolute">
          <div className="Bg w-[500px] h-[180px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
          <button
            onClick={() => {
              actions.setShowGame(false);
              api_get('/user').then((res) => {
                console.log('/user', res);
                const data: userInfo = res.data.data;
                actions.setUserInfo({
                  ...state.userInfo,
                  winnerGame: data.winnerGame,
                  loserGame: data.loserGame,
                });
              });
            }}
          >
            <img
              src="sweep.svg"
              className="SweepFill0Wght300Grad0Opsz481 w-8 h-8 left-[234px] top-[135px] absolute"
            />
          </button>
          {game.winner.id == state.userInfo.id ? (
            <div className="YouWin left-[191px] top-[21px] absolute">
              <span className="text-neutral-600 text-[32px] font-bold">
                you{' '}
              </span>
              <span className="text-blue-900 text-[32px] font-bold">win!</span>
            </div>
          ) : (
            <div className="YouLose left-[188px] top-[21px] absolute">
              <span className="text-neutral-600 text-[32px] font-bold">
                you{' '}
              </span>
              <span className="text-pink-800 text-[32px] font-bold">lose!</span>
            </div>
          )}
          <div className="w-[100%] inline-flex items-center justify-center">
            <div className="Frame100 h-[34px] inline-flex items-center justify-center top-[73px] relative">
              <div className="absolute text-center text-neutral-600 text-[28px] w-[100px] font-bold">
                {game.winScore} : {game.loseScore}
              </div>
            </div>
            <div className="P1 justify-start items-start gap-[8px] absolute top-[4.69rem] right-[18.66rem] flex">
              <div className="Myname text-right text-neutral-600 text-[24px] font-bold">
                {game.winner.nickname}
              </div>
              <img
                className="Pngegg2 w-7 h-7"
                src={
                  game.winner.avatar ? game.winner.avatar : '/pngegg-4@2x.png'
                }
              />
            </div>
            <div className="P2 justify-start items-start absolute left-[18.84rem] top-[4.69rem] gap-[8px] flex">
              <img
                className="Pngegg2 w-7 h-7"
                src={game.loser.avatar ? game.loser.avatar : '/pngegg-4@2x.png'}
              />
              <div className="Yourname text-left text-neutral-600 text-[24px] font-bold">
                {game.loser.nickname}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function GamePlayRoomPages() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state, actions } = useContext(UserContext);
  const [gameEnd, setGameEnd] = useState<gameResult | null>(null);
  const [gameInfo, setGameInfo] = useState<gameInfo>({} as gameInfo);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      Pong.initialize(null);
    }
  }, [canvasRef]);

  useEffect(() => {
    const gameUpdateListener = (data: gameInfo) => {
      Pong.drawData(data);
    };

    const keyDownHandler = (key: KeyboardEvent) => {
      // Handle up arrow and w key events
      if (key.keyCode === 38 || key.keyCode === 87)
        gameSocket.emit('updateRacket', {
          userId: state.userInfo.id,
          direction: 1,
        });

      // Handle down arrow and s key events
      if (key.keyCode === 40 || key.keyCode === 83)
        gameSocket.emit('updateRacket', {
          userId: state.userInfo.id,
          direction: -1,
        });
    };

    const joinQueueListener = (data: any) => {
      console.log('joinQueue', data);
    };

    const gameEndListener = (data: any) => {
      setGameEnd(data);
      console.log('gameEnd', data);
    };

    const gameGiveupEndListener = (data: any) => {
      actions.setShowGame(false); // back to lobby
    };

    const gameStartHandler = (data: gameInfo) => {
      setGameInfo(data);
      console.log('gameStartHandler', data);
      console.log(data);
      Pong.initialize(data);
      document.addEventListener('keydown', keyDownHandler);
      gameSocket.emit('gameStart');
    };

    gameSocket.on('joinQueue', joinQueueListener); // only for random match
    gameSocket.on('gameUpdate', gameUpdateListener);
    gameSocket.on('gameEnd', gameEndListener);
    gameSocket.on('gameStart', gameStartHandler); // detects game is started

    return () => {
      gameSocket.off('joinQueue', joinQueueListener);
      gameSocket.off('gameUpdate', gameUpdateListener);
      gameSocket.off('gameEnd', gameEndListener);
      gameSocket.off('gameStart', gameStartHandler);
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  const rounds = [5];
  const colors = ['#1abc9c', '#2ecc71', '#3498db', '#8c52ff', '#9b59b6'];

  let Ball: ball = {
    new: function (incrementedSpeed?: number) {
      // if (canvasRef.current === null) return null;
      return {
        width: 18,
        height: 18,
        x: canvasRef.current!.width / 2 - 9,
        y: canvasRef.current!.height / 2 - 9,
      };
    },
  };

  let Ai: ai = {
    new: function (side: string, gameReadyDto?: any) {
      // if (canvasRef.current === null) return null;
      return {
        width: 18,
        height: gameReadyDto.paddleSize,
        x: side === 'left' ? 150 : canvasRef.current!.width - 150,
        y: canvasRef.current!.height / 2 - 35,
        score: 0,
      };
    },
  };

  const Game: any = {
    initialize: function (this: game, gameReadyDto: any) {
      console.log('initialize');
      this.canvas = canvasRef;
      if (this.canvas.current === null) return null;
      this.context = this.canvas.current.getContext('2d');

      this.canvas.width = 1400;
      this.canvas.height = 1000;

      this.player = new Array(2);
      if (gameReadyDto) {
        this.player[0] = Ai.new.call(this, 'left', gameReadyDto);
        this.player[1] = Ai.new.call(this, 'right', gameReadyDto);
        this.ball = Ball.new.call(this, gameReadyDto.racketSize);
        this.whoAmI = gameReadyDto.whoAmI;
      } else {
        this.player[0] = Ai.new.call(this, 'left', true);
        this.player[1] = Ai.new.call(this, 'right', false);
        this.ball = Ball.new.call(this);
      }
      // this.ai.speed = 5;
      this.running = this.over = false;

      // this.turn = this.ai;
      this.timer = this.round = 0;
      this.color = '#8c52ff00'; // background color
      if (gameReadyDto) Pong.draw();
    },

    // Draw the objects to the canvas element
    draw: function () {
      // Clear the Canvas
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Set the fill style to black
      this.context.fillStyle = this.color;

      // Draw the background
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Set the fill style to white (For the paddles and the ball)
      this.context.fillStyle = '#9747ff';

      this.player.forEach((player: any) => {
        this.context.fillRect(player.x, player.y, player.width, player.height);
      });

      this.context.beginPath();
      this.context.setLineDash([7, 15]);
      this.context.moveTo(this.canvas.width / 2, this.canvas.height - 140);
      this.context.lineTo(this.canvas.width / 2, 140);
      this.context.lineWidth = 10;

      this.context.strokeStyle = '#9747ff';
      this.context.stroke();

      // Set the default canvas font and align it to the center
      this.context.font = '100px Inria Sans';
      this.context.textAlign = 'center';

      this.player.forEach((player: any, index: number) => {
        const place = index === 0 ? -300 : 300;
        this.context.fillText(
          player.score.toString(),
          this.canvas.width / 2 + index,
          200,
        );
      });

      // Change the font size for the center score text
      this.context.font = '100px Inria Sans';

      // Change the font size for the center score value
      this.context.font = '40px Inria Sans';

      // Draw the current round number
      this.context.fillText(
        rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
        this.canvas.width / 2,
        100,
      );
      if (this.whoAmI) {
        this.context.fillText(
          'Where Am I ? : ' + this.whoAmI, //"Round " + (Pong.round + 1),
          this.canvas.width / 2,
          35,
        );
      }
    },

    drawData: function (data: gameInfo, whoAmI: string, isGameeady: boolean) {
      //console.log("drawData");
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Set the fill style to black
      this.context.fillStyle = this.color;

      // Draw the background
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Set the fill style to white (For the paddles and the ball)
      this.context.fillStyle = '#9747ff';

      // Draw the Player
      this.context.fillRect(
        data.racket[0][0], //this.player.x,
        //this.player.y,
        data.racket[0][1], //this.player.width,
        this.player[0].width,
        this.player[0].height,
      );

      // Draw the Counter Player
      this.context.fillRect(
        data.racket[1][0],
        data.racket[1][1],
        this.player[1].width,
        this.player[1].height,
      );
      // Draw the Ball
      //if (Pong._turnDelayIsOver.call(this))
      this.context.fillRect(
        data.ball[0], //|| this.ball.x,
        data.ball[1], //| this.ball.y,
        //this.ball.y,
        this.ball.width,
        this.ball.height,
      );
      // Draw the net (Line in the middle)
      this.context.beginPath();
      this.context.setLineDash([7, 15]);
      this.context.moveTo(this.canvas.width / 2, this.canvas.height - 140);
      this.context.lineTo(this.canvas.width / 2, 140);
      this.context.lineWidth = 10;
      this.context.strokeStyle = '#9747ff';

      this.context.stroke();

      // Set the default canvas font and align it to the center
      this.context.font = '100px Inria Sans';
      this.context.textAlign = 'center';

      // Draw the players score (left)
      this.context.fillText(
        data.score[0].toString(),
        //this.player.score.toString(),
        this.canvas.width / 2 - 300,
        200,
      );

      // Draw the paddles score (right)
      this.context.fillText(
        data.score[1].toString(),
        this.canvas.width / 2 + 300,
        200,
      );

      // Change the font size for the center score text
      this.context.font = '30px Inria Sans';

      // Draw the winning score (center)
      this.context.fillText(
        'Where Am I ? : ' + this.whoAmI, //"Round " + (Pong.round + 1),
        this.canvas.width / 2,
        35,
      );

      // Change the font size for the center score value
      this.context.font = '40px Inria Sans';
    },
  };

  let Pong = Object.assign({}, Game);

  return (
    <>
      {gameEnd && <GameEnd game={gameEnd} />}
      <canvas
        ref={canvasRef}
        width={1400}
        height={1000}
        className="w-[800px] h-[571.4px]"
      />
    </>
  );
}

export default GamePlayRoomPages;
