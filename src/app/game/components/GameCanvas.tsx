'use client'

import React, { useRef, useEffect } from 'react';

const GameCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        contextRef.current = context;

        // Set up initial game state
        const paddleWidth = 10;
        const paddleHeight = 100;
        const ballSize = 10;

        let playerY = canvas.height / 2 - paddleHeight / 2;
        let computerY = canvas.height / 2 - paddleHeight / 2;
        let ballX = canvas.width / 2;
        let ballY = canvas.height / 2;
        let ballSpeedX = 5;
        let ballSpeedY = 2;

        // Game loop
        const updateGameArea = () => {
          moveComputerPaddle();
          updateBallPosition();
          clearCanvas();
          drawPaddle(playerY, canvas.height / 2, paddleWidth, paddleHeight, 'blue');
          drawPaddle(computerY, canvas.height / 2, paddleWidth, paddleHeight, 'red');
          drawBall(ballX, ballY, ballSize, 'green');
          requestAnimationFrame(updateGameArea);
        };

        // Simple AI to move the computer paddle
        const moveComputerPaddle = () => {
          const targetY = ballY - paddleHeight / 2;
          computerY += (targetY - computerY) * 0.1;
        };

        // Update ball position and handle collisions
        const updateBallPosition = () => {
          ballX += ballSpeedX;
          ballY += ballSpeedY;

          // Ball collision with top and bottom walls
          if (ballY - ballSize / 2 < 0 || ballY + ballSize / 2 > canvas.height) {
            ballSpeedY *= -1;
          }

          // Ball collision with paddles
          if (
            (ballX - ballSize / 2 < paddleWidth && ballY > playerY && ballY < playerY + paddleHeight) ||
            (ballX + ballSize / 2 > canvas.width - paddleWidth &&
              ballY > computerY && ballY < computerY + paddleHeight)
          ) {
            ballSpeedX *= -1;
          }
        };

        // Clear the canvas
        const clearCanvas = () => {
          if (contextRef.current) {
            contextRef.current.clearRect(0, 0, canvas.width, canvas.height);
          }
        };

        // Draw a paddle
        const drawPaddle = (x: number, y: number, width: number, height: number, color: string) => {
          if (contextRef.current) {
            contextRef.current.fillStyle = color;
            contextRef.current.fillRect(x, y, width, height);
          }
        };

        // Draw the ball
        const drawBall = (x: number, y: number, size: number, color: string) => {
          if (contextRef.current) {
            contextRef.current.fillStyle = color;
            contextRef.current.beginPath();
            contextRef.current.arc(x, y, size / 2, 0, Math.PI * 2);
            contextRef.current.fill();
          }
        };

        // Start the game loop
        updateGameArea();
      }
    }
  }, []);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default GameCanvas;
