'use client';

import TimerCompletedCard from '@/components/timer/timerCompletedCard';
import { Title, TitleWrapper, Description } from './styles';
import { Fab } from '@/components/fab';
import { Empty } from './empty';
import { useHistoryTimers } from '@/hooks/queries/timer';

const Page = () => {
  const { data: timers = [], isLoading } = useHistoryTimers();

  if (isLoading) {
    return null;
  }

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

export default Page;
