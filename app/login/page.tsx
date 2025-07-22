"use client";

import { FC } from 'react';
import { Wrapper, Title, KaKaoButton, GoogleButton, Footer } from './styles';
import Logo from '@/assets/logo.svg';
import CharacterDefault from '@/assets/character/character-default.svg';
import KakaoIcon from '@/assets/login/kakao.svg';
import GoogleIcon from '@/assets/login/google.svg';

const LoginPage: FC = () => {
    return (
        <>
            <Wrapper>
                <Logo style={{ marginBottom: '16px' }} />
                <Title>Hey! 잠깐 멈춰볼까요?</Title>
                <CharacterDefault style={{ marginBottom: '60px' }} />
                <KaKaoButton>
                    <KakaoIcon />
                    카카오 계정으로 로그인
                </KaKaoButton>
                <GoogleButton>
                    <GoogleIcon />
                    구글 계정으로 로그인
                </GoogleButton>
                <Footer>
                    계속하면 <span style={{ textDecoration: 'underline' }}>서비스이용약관</span>과 <span style={{ textDecoration: 'underline' }}>개인정보처리방침</span>에 <br/>동의하게 됩니다
                </Footer>
            </Wrapper>
        </>
    )
}

export default LoginPage;