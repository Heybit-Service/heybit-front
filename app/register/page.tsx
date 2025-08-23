"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper, TitleWrapper, Title, Description } from './styles';
import FullButton from '@/components/button/fullButton';
import { RegisterNicknameTextField } from '@/components/TextField/RegisterNicknameTextField';
import { extractTokenFromUrl } from '@/data/auth';
import { checkNickname, updateNickname } from '@/data/api/user';

export default function RegisterPage() {
    const router = useRouter();
    const [nickname, setNickname] = useState('');
    const [textFieldStatus, setTextFieldStatus] = useState<'default' | 'active' | 'success' | 'error'>('default');
    const [lastCheckedNickname, setLastCheckedNickname] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // 컴포넌트 마운트 시 URL에서 토큰 추출
    useEffect(() => {
        const token = extractTokenFromUrl();
        if (!token) {
            // 토큰이 없으면 로그인 페이지로 리다이렉트
            router.push('/login');
        }
    }, [router]);

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

    const handleNicknameCheck = async () => {
        if (textFieldStatus === 'active' || textFieldStatus === 'error') {
            setIsLoading(true);
            try {
                const isAvailable = await checkNickname(nickname);
                setTextFieldStatus(isAvailable ? 'success' : 'error');
                setLastCheckedNickname(nickname);
            } catch (error) {
                console.error('Failed to check nickname:', error);
                setTextFieldStatus('error');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleStart = async () => {
        if (textFieldStatus === 'success') {
            setIsLoading(true);
            try {
                await updateNickname(nickname);
                router.push('/survey/one');
            } catch (error) {
                console.error('Failed to save nickname:', error);
                alert('닉네임 저장에 실패했습니다. 다시 시도해주세요.');
            } finally {
                setIsLoading(false);
            }
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
                    disabled={isLoading}
                >
                    {isLoading ? '저장 중...' : '저장'}
                </FullButton>
            )}
        </Wrapper>
    )
}