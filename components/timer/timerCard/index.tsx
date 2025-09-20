'use client';

import { Wrapper, TitleWrapper, Title, Price, Tag, Description, Button } from './styles';
import IconTimer from '@/assets/menu/icon_timer.svg';
import { CurrentTimer } from '@/data/type/timer';
import { useRouter } from 'next/navigation';

interface Props {
  timer: CurrentTimer;
}

const TimerCard = ({ timer }: Props) => {
  const router = useRouter();
  const active = timer.status === 'IN_PROGRESS';

  const onClick = () => {
    if (active) {
      router.push(`/timer/${timer.timerId}/progress`);
    } else {
      router.push(`/timer/${timer.timerId}/confirm`);
    }
  };

  const formatRemaining = (endTime: Date | string | number, now: Date = new Date()): string => {
    const endMs = new Date(endTime).getTime();
    const nowMs = now.getTime();
    if (Number.isNaN(endMs)) throw new Error('Invalid endTime');

    const diffMs = endMs - nowMs;
    if (diffMs <= 0) return '마감';

    const totalMinutes = Math.floor(diffMs / (60 * 1000));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    const parts: string[] = [];
    if (days) parts.push(`${days}일`);
    if (hours) parts.push(`${hours}시간`);
    if (minutes) parts.push(`${minutes}분`);

    return parts.length ? `${parts.join(' ')} 남음` : '1분 미만 남음';
  };

  const activeLabel = active ? formatRemaining(timer.endTime) : '결과 입력하기';

  // withVotePost가 true인 경우에만 투표 상태 표시
  const showVoteStatus = timer.withVotePost;
  const votingLabel = showVoteStatus ? (active ? '투표중' : '투표 완료') : '';

  return (
    <Wrapper onClick={onClick}>
      <TitleWrapper>
        <Title>
          {timer.name}
          {showVoteStatus && <Tag $active={active}>{votingLabel}</Tag>}
        </Title>
        <Price>{timer.amount.toLocaleString()}원</Price>
      </TitleWrapper>
      <Description>{timer.description}</Description>
      <Button $active={active}>
        {active && <IconTimer />}
        {activeLabel}
      </Button>
    </Wrapper>
  );
};

export default TimerCard;
