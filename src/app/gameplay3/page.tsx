'use client';

import { useContext, useRef, useState, useEffect } from 'react';
import { socket, gameSocket } from '@/app/api';
import { get } from 'http';
import { io } from 'socket.io-client';
import { baseUrl } from '@/app/api';
import { staticGenerationAsyncStorage } from 'next/dist/client/components/static-generation-async-storage';
import { UserContext, userInfo } from '../UserContext';
import { Shippori_Antique } from 'next/font/google';
import { useRecoilStoreID } from 'recoil';
import { KeyObject } from 'crypto';

interface gameInfo {
  participants: number[];
  gameType: String;
  racket: number[][];
  score: number[];
  ball: number[];
  isGetScore: boolean;
  whoAmI: string;
  nickname: string;
}

interface ball {
  new: (incrementedSpeed?: number) => {
    width: number;
    height: number;
    x: number;
    y: number;
  };
}

interface ai {
  new: (side: string) => {
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
  initialize: () => void;
};

interface gameResult {
  "id": number,
  "gameType": "LADDER" | "1vs1 PUBLIC" | "1vs1 PRIVATE",
  "winner": userInfo,
  "loser": userInfo,
  "winScore": number,
  "loseScore": number,
  "ballSpeed": number,
  // "racketSize": number,
};

function GameEnd({ game }: { game: gameResult }) {
  const { state, actions } = useContext(UserContext);

  return (
    <>
      <div className="Property1Win w-[500px] h-[180px] absolute">
        <div className="Makegame w-[500px] h-[180px] left-0 top-0 absolute">
          <div className="Bg w-[500px] h-[180px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
          <button onClick={() => { actions.setShowGame(false) }}>
            <img src="sweep.svg" className="SweepFill0Wght300Grad0Opsz481 w-8 h-8 left-[234px] top-[135px] absolute" />
          </button>
          {
            game.winner.id == state.userInfo.id ? (
              <div className="YouWin left-[191px] top-[21px] absolute"><span className="text-neutral-600 text-[32px] font-bold">you </span><span className="text-blue-900 text-[32px] font-bold">win!</span></div>
            ) : (
              <div className="YouLose left-[188px] top-[21px] absolute"><span className="text-neutral-600 text-[32px] font-bold">you </span><span className="text-pink-800 text-[32px] font-bold">lose!</span></div>
            )
          }
          <div className="w-[100%] inline-flex items-center justify-center">
            <div className="Frame100 h-[34px] inline-flex items-center justify-center top-[73px] relative">
              <div className="absolute text-center text-neutral-600 text-[28px] w-[100px] font-bold">{game.winScore} : {game.loseScore}</div>
            </div>
            <div className="P1 justify-start items-start gap-[8px] absolute top-[4.69rem] right-[18.66rem] flex">
              <div className="Myname text-right text-neutral-600 text-[24px] font-bold">{game.winner.nickname}</div>
              <img className="Pngegg2 w-7 h-7" src={game.winner.avatar ? game.winner.avatar : "/pngegg-4@2x.png"} />
            </div>
            <div className="P2 justify-start items-start absolute left-[18.84rem] top-[4.69rem] gap-[8px] flex">
              <img className="Pngegg2 w-7 h-7" src={game.loser.avatar ? game.loser.avatar : "/pngegg-4@2x.png"} />
              <div className="Yourname text-left text-neutral-600 text-[24px] font-bold">{game.loser.nickname}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

function GamePlayRoomPages() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state, actions } = useContext(UserContext);
  const [gameUpdateDto, setGameUpdateDto] = useState<any>();
  const [gameEnd, setGameEnd] = useState<gameResult | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log('canvas', canvas);
    if (canvas) {
      Pong.initialize();
    }
  }, [canvasRef]);

  useEffect(() => {
    console.log('GameSOcket', gameSocket);

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
    const gameReadyListener = (data: gameInfo) => {
      console.log('gameReady', data);
      gameSocket.emit('gameStart');
      document.addEventListener('keydown', keyDownHandler);
    };
    const joinQueueListener = (data: any) => {
      console.log('joinQueue', data);
    };

    const gameEndListener = (data: any) => {
      setGameEnd(data);
      console.log("gameEnd", data);
      // if (data.winner.id === state.userInfo.id)
      //   alert(`You Win! with score ${data.winScore} : ${data.loseScore} `);
      // else alert(`You Lose! with score ${data.winScore} : ${data.loseScore}`);
    };

    gameSocket.emit('joinQueue');
    gameSocket.on('joinQueue', joinQueueListener);
    gameSocket.on('gameReady', gameReadyListener);
    gameSocket.on('gameUpdate', gameUpdateListener);
    gameSocket.on('gameEnd', gameEndListener);

    return () => {
      gameSocket.off('gameReady', gameReadyListener);
      gameSocket.off('joinQueue', joinQueueListener);
      gameSocket.off('gameUpdate', gameUpdateListener);
      gameSocket.on('gameEnd', gameEndListener);
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
    new: function (side: string) {
      // if (canvasRef.current === null) return null;

      return {
        width: 18,
        height: 180,
        x: side === 'left' ? 150 : canvasRef.current!.width - 150,
        y: canvasRef.current!.height / 2 - 35,
        score: 0,
      };
    },
  };

  const Game: any = {
    initialize: function (this: game) {
      // if (typeof this === null) return null;
      console.log('initialize');
      this.canvas = canvasRef;
      // console.log(this.canvas);
      if (this.canvas.current === null) return null;
      this.context = this.canvas.current.getContext('2d');

      this.canvas.width = 1400;
      this.canvas.height = 1000;

      this.player = Ai.new.call(this, 'left');
      this.ai = Ai.new.call(this, 'right');
      this.ball = Ball.new.call(this);

      this.ai.speed = 5;
      this.running = this.over = false;
      this.turn = this.ai;
      this.timer = this.round = 0;
      this.color = "#8c52ff00"; // background color

      Pong.menu();
    },

    endGameMenu: function (text: string) {
      // Change the canvas font size and color
      Pong.context.font = '45px Inria Sans';
      Pong.context.fillStyle = this.color;

      // Draw the rectangle behind the 'Press any key to begin' text.
      Pong.context.fillRect(
        Pong.canvas.width / 2 - 350,
        Pong.canvas.height / 2 - 48,
        700,
        100,
      );

      // Change the canvas color;
      Pong.context.fillStyle = "#9747ff";

      // Draw the end game menu text ('Game Over' and 'Winner')
      Pong.context.fillText(
        text,
        Pong.canvas.width / 2,
        Pong.canvas.height / 2 + 15,
      );
    },

    menu: function () {
      // Draw all the Pong objects in their current state
      Pong.draw();

      // Change the canvas font size and color
      this.context.font = '50px Inria Sans';
      this.context.fillStyle = this.color;

      // Draw the rectangle behind the 'Press any key to begin' text.
      this.context.fillRect(
        this.canvas.width / 2 - 350,
        this.canvas.height / 2 - 48,
        700,
        100,
      );

      // Change the canvas color;
      this.context.fillStyle = "#9747ff";

      // Draw the 'press any key to begin' text
      this.context.fillText(
        'Press any key to begin',
        this.canvas.width / 2,
        this.canvas.height / 2 + 15,
      );
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

      // Draw the Player
      this.context.fillRect(
        this.player.x,
        this.player.y,
        this.player.width,
        this.player.height,
      );

      // Draw the Ai
      this.context.fillRect(
        this.ai.x,
        this.ai.y,
        this.ai.width,
        this.ai.height,
      );

      // Draw the Ball
      // if (Pong._turnDelayIsOver.call(this))
      this.context.fillRect(
        this.ball.x,
        this.ball.y,
        this.ball.y,
        this.ball.width,
        this.ball.height
      ); // <-- 이거 뭐하는 거임?

      // Draw the net (Line in the middle)
      this.context.beginPath();
      this.context.setLineDash([7, 15]);
      this.context.moveTo(this.canvas.width / 2, this.canvas.height - 140);
      this.context.lineTo(this.canvas.width / 2, 140);
      this.context.lineWidth = 10;

      this.context.strokeStyle = "#9747ff";
      this.context.stroke();

      // Set the default canvas font and align it to the center
      this.context.font = '100px Inria Sans';
      this.context.textAlign = 'center';

      // Draw the players score (left)
      this.context.fillText(
        this.player.score.toString(),
        this.canvas.width / 2 - 300,
        200,
      );

      // Draw the paddles score (right)
      this.context.fillText(
        this.ai.score.toString(),
        this.canvas.width / 2 + 300,
        200,
      );

      // Change the font size for the center score text
      this.context.font = '30px Inria Sans';

      // Draw the winning score (center)
      this.context.fillText(
        'Round ' + (Pong.round + 1),
        this.canvas.width / 2,
        35,
      );

      // Change the font size for the center score value
      this.context.font = '40px Inria Sans';

      // Draw the current round number
      this.context.fillText(
        rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
        this.canvas.width / 2,
        100,
      );
    },

    drawData: function (data: gameInfo) {
      //console.log("drawData");
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Set the fill style to black
      this.context.fillStyle = this.color;

      // Draw the background
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

      // Set the fill style to white (For the paddles and the ball)
      this.context.fillStyle = "#9747ff";

      // Draw the Player
      this.context.fillRect(
        data.racket[0][0], //this.player.x,
        //this.player.y,
        data.racket[0][1], //this.player.width,
        this.player.width,
        this.player.height,
      );

      // Draw the Counter Player
      this.context.fillRect(
        // this.ai.x,
        // this.ai.y,
        data.racket[1][0],
        data.racket[1][1],
        this.ai.width,
        this.ai.height,
      );
      //console.log(data.racket);
      //console.log(this.ai.x);
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
      this.context.strokeStyle = "#9747ff";

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
        'Round ' + (Pong.round + 1),
        this.canvas.width / 2,
        35,
      );

      // Change the font size for the center score value
      this.context.font = '40px Inria Sans';

      // Draw the current round number
      this.context.fillText(
        rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
        this.canvas.width / 2,
        100,
      );
    },

    // Reset the ball location, the player turns and set a delay before the next round begins.
    _resetTurn: function (victor: any, loser: any) {
      this.ball = Ball.new.call(this, this.ball.speed);
      this.turn = loser;
      this.timer = new Date().getTime();

      victor.score++;
    },

    // Wait for a delay to have passed after each turn.
    _turnDelayIsOver: function () {
      return new Date().getTime() - this.timer >= 1000;
    },

    // Select a random color as the background of each level/round.
    _generateRoundColor: function () {
      var newColor = colors[Math.floor(Math.random() * colors.length)];
      if (newColor === this.color) return Pong._generateRoundColor();
      return newColor;
    },
  };

  let Pong = Object.assign({}, Game);

  return (
    <>
      {
        gameEnd && (
          <GameEnd game={gameEnd} />
        )
      }
      <canvas ref={canvasRef} width={1400} height={1000} className="w-[800px] h-[571.4px]" />
    </>
  );
}

export default GamePlayRoomPages;
