"use client";

import { useContext, useRef, useState, useEffect } from "react";
import { socket, gameSocket } from "@/app/api";
import { get } from "http";
import { io } from "socket.io-client";
import { baseUrl } from "@/app/api";
import { staticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage";
import { UserContext } from "../UserContext";
import { Shippori_Antique } from "next/font/google";

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
    moveX: number;
    moveY: number;
    speed: number;
  };
}

interface ai {
  new: (side: string) => {
    width: number;
    height: number;
    x: number;
    y: number;
    score: number;
    move: number;
    speed: number;
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

function GamePlayRoomPages() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { state, actions } = useContext(UserContext);
  const [gameUpdateDto, setGameUpdateDto] = useState<any>();

  useEffect(() => {
    const canvas = canvasRef.current;
    console.log("canvas", canvas);
    if (canvas) {
      Pong.initialize();
    }
  }, [canvasRef]);

  useEffect(() => {
    //Pong.draw();
    //console.log("gameUpdateDto in useEffect", gameUpdateDto);
  }, [gameUpdateDto]);

  useEffect(() => {
    console.log(gameSocket);

    const gameUpdateListener = (data: gameInfo) => {
      //console.log("getGameUpdate");
      Pong.drawData(data);
      //console.log(data);
      //setGameUpdateDto(data);
    };

    const gameReadyListener = (data: gameInfo) => {
      console.log("gameReady");
      setGameUpdateDto(data);
      gameSocket.emit("gameStart");
      document.addEventListener("keydown", function (key) {
        // Handle up arrow and w key events
        if (key.keyCode === 38 || key.keyCode === 87)
          gameSocket.emit("updateRacket", {
            userId: state.userInfo.id,
            direction: 1,
          });

        // Handle down arrow and s key events
        if (key.keyCode === 40 || key.keyCode === 83)
          gameSocket.emit("updateRacket", {
            userId: state.userInfo.id,
            direction: -1,
          });
      });
    };
    const joinQueueListener = (data: any) => {
      console.log("joinQueue", data);
    };

    gameSocket.emit("joinQueue");
    gameSocket.on("joinQueue", joinQueueListener);
    gameSocket.on("gameReady", gameReadyListener);
    gameSocket.on("gameUpdate", gameUpdateListener);
    document.addEventListener("keydown", function (key) {
      // Handle the 'Press any key to begin' function and start the game.
      // if (Pong.running === false) {
      //   Pong.running = true;
      //   window.requestAnimationFrame(Pong.loop);
      // }
      console.log("HELLO");
      console.log(state.userInfo.id);
      // Handle up arrow and w key events
      if (key.keyCode === 38 || key.keyCode === 87)
        gameSocket.emit("updateRacket", {
          userId: 3,
          direction: 1,
        });

      // Handle down arrow and s key events
      if (key.keyCode === 40 || key.keyCode === 83)
        gameSocket.emit("updateRacket", {
          userId: 3,
          direction: -1,
        });
    });
    return () => {
      gameSocket.off("gameReady", gameReadyListener);
      gameSocket.off("joinQueue", joinQueueListener);

      // socket.off("getPaddleSize", getPaddleSizeLisnter);
      // gameSocket.off("getGameUpdate", getGameUpdateListener);
      // socket.off("joinQueue", ready);
    };
  }, []);

  const DIRECTION = {
    IDLE: 0,
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4,
  };

  const rounds = [5];
  const colors = ["#1abc9c", "#2ecc71", "#3498db", "#8c52ff", "#9b59b6"];

  let Ball: ball = {
    new: function (incrementedSpeed?: number) {
      // if (canvasRef.current === null) return null;
      return {
        width: 18,
        height: 18,
        x: canvasRef.current!.width / 2 - 9,
        y: canvasRef.current!.height / 2 - 9,
        moveX: DIRECTION.IDLE,
        moveY: DIRECTION.IDLE,
        speed: incrementedSpeed || 7,
      };
    },
  };

  let Ai: ai = {
    new: function (side: string) {
      // if (canvasRef.current === null) return null;

      return {
        width: 18,
        height: 180,
        x: side === "left" ? 150 : canvasRef.current!.width - 150,
        y: canvasRef.current!.height / 2 - 35,
        score: 0,
        move: DIRECTION.IDLE,
        speed: 8,
      };
    },
  };

  const Game: any = {
    initialize: function (this: game) {
      // if (typeof this === null) return null;
      console.log("initialize");
      this.canvas = canvasRef;
      // console.log(this.canvas);
      if (this.canvas.current === null) return null;
      this.context = this.canvas.current.getContext("2d");

      // this.canvas.width = 1400;
      // this.canvas.height = 1000;

      // this.canvas.style.width = (this.canvas.width / 2) + 'px';
      // this.canvas.style.height = (this.canvas.height / 2) + 'px';

      // this.player = Ai.new.call(this, gameData.whoAmI);
      this.player = Ai.new.call(this, "left");
      this.ai = Ai.new.call(this, "right");
      this.ball = Ball.new.call(this);

      this.ai.speed = 5;
      this.running = this.over = false;
      this.turn = this.ai;
      this.timer = this.round = 0;
      this.color = "#8c52ff";

      Pong.menu();
      //Pong.listen();
    },

    endGameMenu: function (text: string) {
      // Change the canvas font size and color
      Pong.context.font = "45px Courier New";
      Pong.context.fillStyle = this.color;

      // Draw the rectangle behind the 'Press any key to begin' text.
      Pong.context.fillRect(
        Pong.canvas.width / 2 - 350,
        Pong.canvas.height / 2 - 48,
        700,
        100
      );

      // Change the canvas color;
      Pong.context.fillStyle = "#ffffff";

      // Draw the end game menu text ('Game Over' and 'Winner')
      Pong.context.fillText(
        text,
        Pong.canvas.width / 2,
        Pong.canvas.height / 2 + 15
      );

      //   setTimeout(function () {
      //     Pong = Object.assign({}, Game);
      //     Pong.initialize();
      //   }, 3000);
    },

    menu: function () {
      // Draw all the Pong objects in their current state
      Pong.draw();

      // Change the canvas font size and color
      this.context.font = "50px Courier New";
      this.context.fillStyle = this.color;

      // Draw the rectangle behind the 'Press any key to begin' text.
      this.context.fillRect(
        this.canvas.width / 2 - 350,
        this.canvas.height / 2 - 48,
        700,
        100
      );

      // Change the canvas color;
      this.context.fillStyle = "#ffffff";

      // Draw the 'press any key to begin' text
      this.context.fillText(
        "Press any key to begin",
        this.canvas.width / 2,
        this.canvas.height / 2 + 15
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
      this.context.fillStyle = "#ffffff";

      // Draw the Player
      this.context.fillRect(
        this.player.x,
        this.player.y,
        this.player.width,
        this.player.height
      );

      // Draw the Ai
      this.context.fillRect(
        this.ai.x,
        this.ai.y,
        this.ai.width,
        this.ai.height
      );

      // Draw the Ball
      //if (Pong._turnDelayIsOver.call(this))
      this.context.fillRect(
        this.ball.x,
        this.ball.y,
        this.ball.y,
        this.ball.width,
        this.ball.height
      );
      // Draw the net (Line in the middle)
      this.context.beginPath();
      this.context.setLineDash([7, 15]);
      this.context.moveTo(this.canvas.width / 2, this.canvas.height - 140);
      this.context.lineTo(this.canvas.width / 2, 140);
      this.context.lineWidth = 10;
      this.context.strokeStyle = "#ffffff";
      this.context.stroke();

      // Set the default canvas font and align it to the center
      this.context.font = "100px Courier New";
      this.context.textAlign = "center";

      // Draw the players score (left)
      this.context.fillText(
        this.player.score.toString(),
        this.canvas.width / 2 - 300,
        200
      );

      // Draw the paddles score (right)
      this.context.fillText(
        this.ai.score.toString(),
        this.canvas.width / 2 + 300,
        200
      );

      // Change the font size for the center score text
      this.context.font = "30px Courier New";

      // Draw the winning score (center)
      this.context.fillText(
        "Round " + (Pong.round + 1),
        this.canvas.width / 2,
        35
      );

      // Change the font size for the center score value
      this.context.font = "40px Courier";

      // Draw the current round number
      this.context.fillText(
        rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
        this.canvas.width / 2,
        100
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
      this.context.fillStyle = "#ffffff";
      // Draw the Player
      this.context.fillRect(
        data.racket[0][0], //this.player.x,
        //this.player.y,
        data.racket[0][1], //this.player.width,
        this.player.width,
        this.player.height
      );

      // Draw the Counter Player
      this.context.fillRect(
        // this.ai.x,
        // this.ai.y,
        data.racket[1][0],
        data.racket[1][1],
        this.ai.width,
        this.ai.height
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
        this.ball.height
      );
      // Draw the net (Line in the middle)
      this.context.beginPath();
      this.context.setLineDash([7, 15]);
      this.context.moveTo(this.canvas.width / 2, this.canvas.height - 140);
      this.context.lineTo(this.canvas.width / 2, 140);
      this.context.lineWidth = 10;
      this.context.strokeStyle = "#ffffff";
      this.context.stroke();

      // Set the default canvas font and align it to the center
      this.context.font = "100px Courier New";
      this.context.textAlign = "center";

      // Draw the players score (left)
      this.context.fillText(
        data.score[0].toString(),
        //this.player.score.toString(),
        this.canvas.width / 2 - 300,
        200
      );

      // Draw the paddles score (right)
      this.context.fillText(
        data.score[1].toString(),
        this.canvas.width / 2 + 300,
        200
      );

      // Change the font size for the center score text
      this.context.font = "30px Courier New";

      // Draw the winning score (center)
      this.context.fillText(
        "Round " + (Pong.round + 1),
        this.canvas.width / 2,
        35
      );

      // Change the font size for the center score value
      this.context.font = "40px Courier";

      // Draw the current round number
      this.context.fillText(
        rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
        this.canvas.width / 2,
        100
      );
    },
    listen: function () {
      document.addEventListener("keydown", function (key) {
        // Handle the 'Press any key to begin' function and start the game.
        // if (Pong.running === false) {
        //   Pong.running = true;
        //   window.requestAnimationFrame(Pong.loop);
        // }

        // Handle up arrow and w key events
        if (key.keyCode === 38 || key.keyCode === 87)
          gameSocket.emit("updateRacket", {
            // userId: state.userInfo.id,
            userId: 3,
            direction: 1,
          });

        // Handle down arrow and s key events
        if (key.keyCode === 40 || key.keyCode === 83)
          gameSocket.emit("updateRacket", {
            // userId: state.userInfo.id,
            userId: 3,
            direction: -1,
          });
      });

      // Stop the player from moving when there are no keys being pressed.
      document.addEventListener("keyup", function (key) {
        Pong.player.move = DIRECTION.IDLE;
      });
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
        {/* <body className="text-center bg-ghostwhite flex justify-center items-center flex-col"> */}
          <canvas ref={canvasRef} />
        {/* </body> */}
    </>
  );
}

export default GamePlayRoomPages;
