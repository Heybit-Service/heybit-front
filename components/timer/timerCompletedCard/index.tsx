import { Wrapper, TitleWrapper, Title, Price, Tag, Button } from './styles';
import IconTimer from '@/assets/menu/icon_timer.svg';
import { HistoryTimer } from '@/data/type/timer';

interface Props {
  timer: HistoryTimer;
}

const TimerCompletedCard = ({ timer }: Props) => {
  const endedAtLabel = () => {
    const date = new Date(timer.endedAt);
    if (isNaN(date.getTime())) {
      return timer.endedAt;
    }
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };
  const priceLabel = timer.success
    ? `+${timer.amount.toLocaleString()}원`
    : `-${timer.amount.toLocaleString()}원`;
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          {timer.name}
          <Tag>{endedAtLabel()}</Tag>
        </Title>
        <Price>{priceLabel}</Price>
      </TitleWrapper>
      <Button success={timer.success}>
        <IconTimer />
        {timer.durationMessage}
      </Button>
    </Wrapper>
  );
};

export default TimerCompletedCard;
