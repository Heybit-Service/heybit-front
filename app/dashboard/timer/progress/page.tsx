"use client";

import { FC } from 'react';
import TimerCard from '@/components/timer/timerCard';
import CharacterTimer from '@/assets/timer/character_timer.svg'

const TimerProgressPage: FC = () => {
    return (
        <>  
            <CharacterTimer style={{ marginTop: 50, marginLeft: 'auto', marginRight: 'auto', marginBottom: 32 }} />
            <TimerCard />
            <TimerCard />
            <TimerCard />
            <TimerCard />
            <TimerCard />
        </>
    );
}

export default TimerProgressPage;
