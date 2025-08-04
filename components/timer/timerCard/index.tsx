import { Wrapper, TitleWrapper, Title, Price, Tag, Description, Button } from './styles';
import IconTimer from '@/assets/menu/icon_timer.svg';
import { CurrentTimer } from '@/data/type/timer';

interface Props {
  timer: CurrentTimer;
}

const TimerCard = ({ timer }: Props) => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>
          {timer.name}
          <Tag>{timer.withVotePost ? '투표중' : '투표 종료'}</Tag>
        </Title>
        <Price>{timer.amount}원</Price>
      </TitleWrapper>
      <Description>{timer.description}</Description>

      <Button>
        <IconTimer />
        {timer.endTime}분 남음
      </Button>
    </Wrapper>
  );
};

export default TimerCard;
