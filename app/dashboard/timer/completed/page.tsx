'use server';

import TimerCompletedCard from '@/components/timer/timerCompletedCard';
import { Title, TitleWrapper, Description } from './styles';
import { fetchHistoryTimers } from '@/data/api/timer';
import { Fab } from '@/components/fab';
import { Empty } from './empty';

const TimerCompletedPage = async () => {
  const timers = await fetchHistoryTimers();
  if (timers.length === 0) {
    return <Empty />;
  }
  return (
    <>
      <TitleWrapper>
        <Title>어떤 상품을 참았나요?</Title>
        <Description>내가 시작한 모든 타이머를 둘려봐요</Description>
      </TitleWrapper>
      {timers.map((timer) => (
        <TimerCompletedCard key={timer.timerId} timer={timer} />
      ))}
      <Fab />
    </>
  );
};

export default TimerCompletedPage;
