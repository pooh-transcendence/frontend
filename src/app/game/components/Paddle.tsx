import React from 'react';

interface PaddleProps {
  y: number;
}

const Paddle: React.FC<PaddleProps> = ({ y }) => {
  return <div className="paddle" style={{ top: y }} />;
};

export default Paddle;
