'use client';

import { useEffect } from 'react';

export default function GameCanvas() {
  useEffect(() => {
    if (!window) {
      return;
    }

    const init = async () => {
      const MyGame = (await import('@/utils/Game')).MyGame;
      new MyGame();
      postMessage({ payload: 'removeLoading' }, '*');
    };

    init();
  }, []);

  return (
    <div className='h-full p-0 m-0 overflow-hidden bg-[#131313]'>
      <canvas id='my-game'></canvas>
    </div>
  );
}
