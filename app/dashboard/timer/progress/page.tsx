import TimerCard from '@/components/timer/timerCard';
import CharacterTimer from '@/assets/timer/character_timer.svg';
import { fetchCurrentTimers } from '@/data/api/timer';
import TimerCount from '@/components/timer/count';
import { Fab } from '@/components/fab';
import { Empty } from './empty';

const Page = async () => {
  const timers = await fetchCurrentTimers();
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
