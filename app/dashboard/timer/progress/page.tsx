'use client';

import TimerCard from '@/components/timer/timerCard';
import CharacterTimer from '@/assets/timer/character_timer.svg';
import TimerCount from '@/components/timer/count';
import { Fab } from '@/components/fab';
import { Empty } from './empty';
import { useCurrentTimers } from '@/hooks/queries/timer';

const Page = () => {
  const { data: timers = [], isLoading } = useCurrentTimers();

  if (isLoading) {
    return null;
  }

  if (timers.length === 0) {
    return <Empty />;
  }

  return (
    <>
      <CharacterTimer
        style={{ marginTop: 50, marginLeft: 'auto', marginRight: 'auto', marginBottom: 24 }}
      />
      <div className="flex flex-col gap-3">
        <TimerCount count={timers.length} />
        {timers.map((timer) => (
          <TimerCard key={timer.timerId} timer={timer} />
        ))}
      </div>
      <Fab />
    </>
  );
};

export default Page;
