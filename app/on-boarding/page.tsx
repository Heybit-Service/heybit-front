"use client";

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import FullButton from '@/components/button/fullButton';
import { Wrapper } from './styles';

const OnboardingPage: FC = () => {
    const router = useRouter();

    const handleStart = () => {
        router.push('/survey/one'); // Redirect to the survey page after onboarding
    }

    return (
        <Wrapper>
            <FullButton style={{ marginTop: 'auto', marginBottom: '56px' }} onClick={handleStart}>설문조사 시작</FullButton>
        </Wrapper>
    )
}

export default OnboardingPage;