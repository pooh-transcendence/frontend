'use client'

import Head from 'next/head';
import PingPongCanvas from './components/PingPongCanvas';

const GamePage: React.FC = () => {
  const canvasWidth = 800;
  const canvasHeight = 600;

  return (
    <div>
      <Head>
        <title>Table Tennis Game</title>
      </Head>

      <main>
        <h1>Table Tennis Game</h1>
        <PingPongCanvas width={canvasWidth} height={canvasHeight} />
      </main>

    </div>
  );
};

export default GamePage;
