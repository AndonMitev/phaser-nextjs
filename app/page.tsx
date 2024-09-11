import dynamic from 'next/dynamic';

const GameCanvas = dynamic(() => import('./components/GameCanvas'), {
  ssr: false,
});

export default function Page() {
  return (
    <div>
      <GameCanvas />
    </div>
  );
}
