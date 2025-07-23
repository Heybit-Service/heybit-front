"use client";

import { FC } from 'react';
import { useRouter } from 'next/navigation'
import { Wrapper, TitleWrapper, Title, Description } from './styles';
import FullButton from '@/components/button/fullButton';

const RegisterPage: FC = () => {
    const router = useRouter();

    const handleStart = () => {
        router.push('/on-boarding'); // Redirect to the next page after registration
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>닉네임 설정</Title>
                <Description>헤이빗에서 사용할 닉네임을 적어주세요</Description>
            </TitleWrapper>
            <FullButton style={{ marginTop: 'auto', marginBottom: '56px' }} onClick={handleStart}>시작</FullButton>
        </Wrapper>
    )
}

export default RegisterPage;