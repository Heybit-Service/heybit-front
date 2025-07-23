"use client";

import { FC } from 'react';
import TimerCompletedCard from '@/components/timer/timerCompletedCard';
import { Title, TitleWrapper, Description } from './styles';

const TimerCompletedPage: FC = () => {
    return (
        <>
            <TitleWrapper>
                <Title>어떤 상품을 참았나요?</Title>
                <Description>내가 시작한 모든 타이머를 둘려봐요</Description>
            </TitleWrapper>
            <TimerCompletedCard />
            <TimerCompletedCard />
            <TimerCompletedCard />
            <TimerCompletedCard />
            <TimerCompletedCard />
        </>
    );
}

export default TimerCompletedPage;
