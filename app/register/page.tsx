"use client";

import { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper, TitleWrapper, Title, Description } from './styles';
import FullButton from '@/components/button/fullButton';
import { RegisterNicknameTextField } from '@/components/TextField/RegisterNicknameTextField';

const RegisterPage: FC = () => {
    const router = useRouter();
    const [nickname, setNickname] = useState('');
    const [textFieldStatus, setTextFieldStatus] = useState<'default' | 'active' | 'success' | 'error'>('default');
    const [lastCheckedNickname, setLastCheckedNickname] = useState('');

    useEffect(() => {
        // 닉네임이 변경되면 상태를 리셋
        if (nickname.length === 0) {
            setTextFieldStatus('default');
        } else if (nickname.length >= 2 && nickname.length <= 10) {
            // 이전에 체크한 닉네임과 다르면 active로 변경
            if (nickname !== lastCheckedNickname && (textFieldStatus === 'success' || textFieldStatus === 'error')) {
                setTextFieldStatus('active');
            } else if (textFieldStatus === 'default') {
                setTextFieldStatus('active');
            }
        } else {
            // 2자 미만이거나 10자 초과면 default
            setTextFieldStatus('default');
        }
    }, [nickname, lastCheckedNickname, textFieldStatus]);

    const handleNicknameCheck = () => {
        if (textFieldStatus === 'active') {
            // TODO: API 호출하여 닉네임 중복 확인
            // 임시로 랜덤하게 성공/실패 처리
            const isAvailable = Math.random() > 0.5;
            setTextFieldStatus(isAvailable ? 'success' : 'error');
            setLastCheckedNickname(nickname); // 체크한 닉네임 저장
        } else if (textFieldStatus === 'error') {
            // error 상태에서 다시 클릭하면 재시도
            const isAvailable = Math.random() > 0.5;
            setTextFieldStatus(isAvailable ? 'success' : 'error');
            setLastCheckedNickname(nickname); // 체크한 닉네임 저장
        }
    };

    const handleStart = () => {
        if (textFieldStatus === 'success') {
            router.push('/survey/one');
        }
    }

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>닉네임 설정</Title>
                <Description>헤이빗에서 사용할 닉네임을 적어주세요</Description>
            </TitleWrapper>
            <RegisterNicknameTextField 
                value={nickname}
                onChange={setNickname}
                onCheck={handleNicknameCheck}
                status={textFieldStatus}
            />
            {textFieldStatus === 'success' && (
                <FullButton 
                    style={{ 
                        position: 'absolute',
                        bottom: '56px',
                        left: '0',
                        right: '0',
                        width: '100%'
                    }} 
                    onClick={handleStart}
                >
                    저장
                </FullButton>
            )}
        </Wrapper>
    )
}

export default RegisterPage;