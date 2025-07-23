import { FC } from 'react';
import { Wrapper, TitleWrapper, Title, Price,Tag,Description, Button } from './styles';
import IconTimer from '@/assets/menu/icon_timer.svg';

const TimerCard: FC = () => {
    return (
        <Wrapper>
            <TitleWrapper>
                <Title>
                    스타벅스 텀블러
                    <Tag>투표중</Tag>
                </Title>
                <Price>28,000원</Price>
            </TitleWrapper>
            <Description>
                여름 시즌에 새로 나온 스타벅스 텀블런데 집에 비슷한 색깔이 있어서 살까 말까 고민중
            </Description>

            <Button>
                <IconTimer />
                1일 3시간 45분 남음
            </Button>
        </Wrapper>
    );
}

export default TimerCard;