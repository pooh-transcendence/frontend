'use client'

import { useContext, useRef, useState, useEffect, use } from 'react';
import { socket } from '@/app/api';
import { io } from 'socket.io-client';
import { baseUrl } from '@/app/api';
import { UserContext } from '../UserContext';
import { Anybody } from 'next/font/google';
import { log } from 'console';

interface gameReadyInfo {
    gameInfo: {
        participants: number[],
        gameType: String,
        racket: any,
        score: any,
        ball: number[],
        isGetScore: boolean,
    },
    whoAmI: string,
    nickname: string,
}

interface gameUpdateInfo {
    participants: number[],
    gameType: String,
    racket: number[][],
    ball: number[],
    score: number[],
    isGetScore: boolean,
}

interface updateRacketInfo {
    userId: number,
    direction: string,
}

interface playerInfo {
    id: number,
    nickname: string,
    winScore: number,
    loseScore: number,
    avatar: string,
    email: string
    userState: string,
}

interface gameOverInfo {
    winner: playerInfo,
    loser: playerInfo,
    gameType: string,
    winScore: number,
    loseScore: number,
    ballSpeed: number,
    racketSize: number,
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
}

type game = GameObject &{
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
}

function GamePlayRoomPage() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    // gameData => init game data
    const [gameData, gameReadyData] = useState<gameReadyInfo>(
        {
            gameInfo: {
                participants: [1, 2],
                gameType: "LADDER",
                racket: {},//[[10, 10], [800, 800]],
                score: {1: 0, 2: 0},
                ball: [400, 400, 30],
                isGetScore: false,
            },
            whoAmI: "left",
            nickname: "klew",
        },
        );
    // gameReady => update game data
    const [gameUpdate, updateGameReady] = useState(
        {
            participants: [1, 2],
            gameType: "LADDER",
            racket: [[10, 10], [800, 800]],
            score: [0, 0],
            ball: [400, 400, 30],
            isGetScore: false,
        }
    );
    
    const [racketData, updateRacketData] = useState<updateRacketInfo>(
        {
            userId: 1,
            direction: "UP",
        }
    );

    const [gameOverData, updateGameOverData] = useState(null);

    const {state, actions} = useContext(UserContext);
    const [gameSocket, updateGameSocket] = useState<any>(
        io(baseUrl+"/game",
        {
            path: "/socket.io", 
            transports: ['websocket'],
            auth: {
                // "authorization": state.userInfo.token,
                "authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmlja25hbWUiOiJrbGV3IiwiZnRJZCI6MTAzODkyLCJpYXQiOjE2OTMyMTM3MTcsImV4cCI6MTY5NTgwNTcxN30.4pDUvHof2VBDrB50ptM4bC7_Sh9xjOw0S1qZhJWCa7Y",
            },
        })
    );

    // useEffect(() => {
    //     console.log("New GameData: ", gameData);
    // }, [gameData]);

    useEffect(() => {
        const data = gameData;
        console.log("New GameUpdate: ", gameUpdate);
        // Pong.draw(); // 이거 쓰면 .context undefined 에러나옴 .draw() 써도 마찬가지
    }, [gameUpdate]);

    // useEffect(() => {
    //     console.log("New GameData: ", gameOverData);
    // }, [gameOverData]);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (canvas) {
            Pong.initialize();
        }
    }, [canvasRef]);

    useEffect(() => {
        const ready=(data : any) => {
            console.log("ready");
            console.log(data);
        };

        const gameReadyListener = (data: any) => {
            // console.log('gameReady');
            gameReadyData(data);
            // console.log("gameData", gameData);
            // console.log('data', data);
            gameSocket.emit('gameStart');
        };

        const gameUpdateListener = (data: any) => {
            console.log('gameUpdate');
            updateGameReady(data);
            // console.log("gameUpdate:         ", gameUpdate); // 이거 400 고정임 why? 근데 new gamedata는 갱신됨
            // Pong.draw(gameUpdate);
            // console.log("gameUpdate", gameUpdate);
            // console.log('data', data);
        };

        gameSocket.emit("joinQueue");
        gameSocket.on("joinQueue", ready);
        gameSocket.on("gameReady", gameReadyListener);
        gameSocket.on("gameUpdate", gameUpdateListener);
        gameSocket.on("gameOver", gameOverData);

        return (() => {
            gameSocket.off("joinQueue", ready);
            gameSocket.off("gameReady", gameReadyListener);
            gameSocket.off("gameOver", gameOverData);
        });
    }, []);

    const DIRECTION = {
        IDLE: 0,
        UP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
    }

    const rounds = [5];
    const colors = ['#1abc9c', '#2ecc71', '#3498db', '#8c52ff', '#9b59b6'];

    let Ball: ball = {
        new: function (incrementedSpeed?: number) {
            // if (canvasRef.current === null) return null;
            return {
                width: 18,
                height: 18,
                x: (canvasRef.current!.width / 2) - 9,
                y: (canvasRef.current!.height / 2) - 9,
                moveX: DIRECTION.IDLE,
                moveY: DIRECTION.IDLE,
                speed: incrementedSpeed || 7 
            };
        }
    };
    
    let Ai: ai = {
        new: function (side: string) {
            // if (canvasRef.current === null) return null;

            return {
                width: 18,
                height: 180,
                x: side === 'left' ? 150 : canvasRef.current!.width - 150,
                y: (canvasRef.current!.height / 2) - 35,
                score: 0,
                move: DIRECTION.IDLE,
                speed: 8
            };
        }
    };

    const Game: any = {
        initialize: function (this: game) {
            // if (typeof this === null) return null;
            this.canvas = canvasRef;
            // console.log(this.canvas);
            if (this.canvas.current === null) return null;
            this.context = this.canvas.current.getContext('2d');
        
            this.canvas.width = 1400;
            this.canvas.height = 1000;
        
            // this.canvas.style.width = (this.canvas.width / 2) + 'px';
            // this.canvas.style.height = (this.canvas.height / 2) + 'px';
            
            this.player = Ai.new.call(this, gameData.whoAmI);
            // this.player = Ai.new.call(this, 'left');
            if (gameData.whoAmI === "left")
                this.ai = Ai.new.call(this, 'right');
            else
                this.ai = Ai.new.call(this, 'left');
            this.ball = Ball.new.call(this);
            
            this.ai.speed = 5;
            this.running = this.over = false;
            this.turn = this.ai;
            this.timer = this.round = 0;
            this.color = '#8c52ff';
            Pong.menu();
            // requestAnimationFrame(Pong.loop);
            Pong.listen();
        },

        endGameMenu: function (text: string) {
            // Change the canvas font size and color
            Pong.context.font = '45px Courier New';
            Pong.context.fillStyle = this.color;
     
            // Draw the rectangle behind the 'Press any key to begin' text.
            Pong.context.fillRect(
                Pong.canvas.width / 2 - 350,
                Pong.canvas.height / 2 - 48,
                700,
                100
            );
     
            // Change the canvas color;
            Pong.context.fillStyle = '#ffffff';
     
            // Draw the end game menu text ('Game Over' and 'Winner')
            Pong.context.fillText(text,
                Pong.canvas.width / 2,
                Pong.canvas.height / 2 + 15
            );
     
            setTimeout(function () {
                Pong = Object.assign({}, Game);
                Pong.initialize();
            }, 3000);
        },
     
        menu: function () {
            // Draw all the Pong objects in their current state
            Pong.draw();
            // Change the canvas font size and color
            this.context.font = '50px Courier New';
            this.context.fillStyle = this.color;
     
            // Draw the rectangle behind the 'Press any key to begin' text.
            this.context.fillRect(
                this.canvas.width / 2 - 350,
                this.canvas.height / 2 - 48,
                700,
                100
            );
     
            // Change the canvas color;
            this.context.fillStyle = '#ffffff';
     
            // Draw the 'press any key to begin' text
            this.context.fillText('Press any key to begin',
                this.canvas.width / 2,
                this.canvas.height / 2 + 15
            );
        },
     
        // Draw the objects to the canvas element
        draw: function () {
            // Clear the Canvas
            console.log("drawing!!!!!")
            // console.log(updateData);
            this.context.clearRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
     
            // Set the fill style to black
            this.context.fillStyle = this.color;
     
            // Draw the background
            this.context.fillRect(
                0,
                0,
                this.canvas.width,
                this.canvas.height
            );
            console.log("draw2222");
     
            // Set the fill style to white (For the paddles and the ball)
            this.context.fillStyle = '#ffffff';
     
            // Draw the Player
            this.context.fillRect(
                this.player.x,
                this.player.y,
                this.player.width,
                this.player.height
            );
            console.log("draw33333");

            // this.context.fillRect(
            //     gameUpdate.racket[0][0],
            //     gameUpdate.racket[0][1],
            //     50,
            //     50
            // );
            
     
            // Draw the Ai
            this.context.fillRect(
                this.ai.x,
                this.ai.y,
                this.ai.width,
                this.ai.height 
            );
            console.log("draw444444");
            this.ball.x = gameUpdate.ball[0];
            this.ball.y = gameUpdate.ball[1];
            console.log("balls:   ", gameUpdate.ball[0], gameUpdate.ball[1]);
            // Draw the Ball
            
            this.context.fillRect(
                this.ball.x,
                this.ball.y,
                this.ball.width,
                this.ball.height
            );
            console.log("show me ball")
            // console.log(gameUpdate.ball[0], gameUpdate.ball[1])
            // this.context.fillRect(
            //     gameUpdate.ball[0],
            //     gameUpdate.ball[1],
            //     18,
            //     18
            // );
     
            // Draw the net (Line in the middle)
            this.context.beginPath();
            this.context.setLineDash([7, 15]);
            this.context.moveTo((this.canvas.width / 2), this.canvas.height - 140);
            this.context.lineTo((this.canvas.width / 2), 140);
            this.context.lineWidth = 10;
            this.context.strokeStyle = '#ffffff';
            this.context.stroke();
     
            // Set the default canvas font and align it to the center
            this.context.font = '100px Courier New';
            this.context.textAlign = 'center';
     
            // Draw the players score (left)
            this.context.fillText(
                this.player.score.toString(),
                //gameReady.score[0].toString(),
                (this.canvas.width / 2) - 300,
                200
            );
     
            // Draw the paddles score (right)
            this.context.fillText(
                this.ai.score.toString(),
                //gameReady.score[1].toString(),
                (this.canvas.width / 2) + 300,
                200
            );
     
            // Change the font size for the center score text
            this.context.font = '30px Courier New';
     
            // Draw the winning score (center)
            this.context.fillText(
                'Round ' + (Pong.round + 1),
                (this.canvas.width / 2),
                35
            );
     
            // Change the font size for the center score value
            this.context.font = '40px Courier';
     
            // Draw the current round number
            this.context.fillText(
                rounds[Pong.round] ? rounds[Pong.round] : rounds[Pong.round - 1],
                (this.canvas.width / 2),
                100
            );
        },
     
        loop: function () {
            Pong.update();
            Pong.draw();
            console.log("loop done!!");
            // If the game is not over, draw the next frame.
            if (!Pong.over) requestAnimationFrame(Pong.loop);
        },
     
        listen: function () {
            document.addEventListener('keydown', function (key) {
                // Handle the 'Press any key to begin' function and start the game.
                if (Pong.running === false) {
                    Pong.running = true;
                    window.requestAnimationFrame(Pong.loop);
                }

                // Handle up arrow and w key events
                if (key.keyCode === 38 || key.keyCode === 87) Pong.player.move = DIRECTION.UP;

                // Handle down arrow and s key events
                if (key.keyCode === 40 || key.keyCode === 83) Pong.player.move = DIRECTION.DOWN;
            });
     
            // Stop the player from moving when there are no keys being pressed.
            document.addEventListener('keyup', function (key) { Pong.player.move = DIRECTION.IDLE; });
        },
    };

    let Pong = Object.assign({}, Game);

    return (
        <>
        <body className="text-center bg-ghostwhite flex justify-center items-center h-screen flex-col fixed w-full">
            <h1>This is pingpong</h1>
            <canvas ref={canvasRef} width={1400} height={1000} />
        </body>
        </>
    )
}

export default GamePlayRoomPage;