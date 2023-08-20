import { useEffect, useRef } from 'react';

interface PingPongCanvasProps {
  width: number;
  height: number;
}

const PingPongCanvas: React.FC<PingPongCanvasProps> = ({ width, height }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const paddleWidth = 10;
  const paddleHeight = 100;
  const ballSize = 10;

  const paddleSpeed = 5; // Adjust the paddle speed as needed

  const paddlePosition = useRef<number>(height / 2 - paddleHeight / 2);

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const mouseY = event.clientY - canvas.getBoundingClientRect().top;
    paddlePosition.current = mouseY - paddleHeight / 2; // Adjust the paddle position
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    // Clear the canvas
    context.clearRect(0, 0, width, height);

    // Draw paddles
    const leftPaddleY = height / 2 - paddleHeight / 2;
    const rightPaddleY = height / 2 - paddleHeight / 2;
    context.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);
    context.fillRect(width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

    // Draw ball
    const ballX = width / 2 - ballSize / 2;
    const ballY = height / 2 - ballSize / 2;
    context.beginPath();
    context.arc(ballX, ballY, ballSize / 2, 0, Math.PI * 2);
    context.fillStyle = 'black';
    context.fill();

    context.fillRect(0, paddlePosition.current, paddleWidth, paddleHeight);
    context.fillRect(width - paddleWidth, paddlePosition.current, paddleWidth, paddleHeight);

    context.closePath();

    

  }, [width, height]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <canvas ref={canvasRef} width={width} height={height} onMouseMove={handleMouseMove} />
    </div>
  );
};

export default PingPongCanvas;
