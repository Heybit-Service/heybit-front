import TimerCard from '@/components/timer/timerCard';
import CharacterTimer from '@/assets/timer/character_timer.svg';
import { fetchCurrentTimers } from '@/data/api/timer';

const TimerProgressPage = async () => {
  const timers = await fetchCurrentTimers();
  return (
    <>
      <CharacterTimer
        style={{ marginTop: 50, marginLeft: 'auto', marginRight: 'auto', marginBottom: 32 }}
      />
      {timers.map((timer) => (
        <TimerCard key={timer.timerId} timer={timer} />
      ))}
    </>
  );
};

export default TimerProgressPage;
