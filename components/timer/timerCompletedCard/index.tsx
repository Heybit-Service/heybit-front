import { FC } from 'react';
import { Wrapper, TitleWrapper, Title, Price,Tag, Button } from './styles';
import IconTimer from '@/assets/menu/icon_timer.svg';

const TimerCompletedCard: FC = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>
                    스타벅스 텀블러
                    <Tag>2025년 7월 19일</Tag>
                </Title>
                <Price>+28,000원</Price>
            </TitleWrapper>
            <Button>
                <IconTimer />
                1일 3시간 45분 남음
            </Button>
        </Wrapper>
    );
}

export default TimerCompletedCard;