import TimerCard from '@/components/timer/timerCard';
import CharacterTimer from '@/assets/timer/character_timer.svg';
import { fetchCurrentTimers } from '@/data/api/timer';
import { Empty } from './empty';
import TimerCount from '@/components/timer/count';

const TimerProgressPage = async () => {
  const timers = await fetchCurrentTimers();
  if (timers.length !== 0) {
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
    </>
  );
};

export default TimerProgressPage;
