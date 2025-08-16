'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper, Title, KaKaoButton, GoogleButton, Footer } from './styles';
import Logo from '@/assets/logo.svg';
import CharacterDefault from '@/assets/character/character-default.svg';
import KakaoIcon from '@/assets/login/kakao.svg';
import GoogleIcon from '@/assets/login/google.svg';

const LoginPage: FC = () => {
  const router = useRouter();

  const handleKakaoLogin = () => {
    // Implement Kakao login logic here
    // console.log("Kakao login clicked");
    router.push('/on-boarding'); // Redirect to onboarding page after login
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    // console.log("Google login clicked");
    router.push('/on-boarding'); // Redirect to onboarding page after login
  };

  return (
    <>
      <Wrapper>
        <Logo style={{ marginBottom: '16px' }} />
        <Title>Hey! 잠깐 멈춰볼까요?</Title>
        <CharacterDefault style={{ marginBottom: '60px' }} />
        <KaKaoButton onClick={handleKakaoLogin}>
          <KakaoIcon />
          카카오 계정으로 로그인
        </KaKaoButton>
        <GoogleButton onClick={handleGoogleLogin}>
          <GoogleIcon />
          구글 계정으로 로그인
        </GoogleButton>
        <Footer>
          계속하면{' '}
          <a
            href="https://www.notion.so/230b5c7320fe8058b6c4e07aa2f2fcc3?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: 'inherit' }}
          >
            서비스 이용약관
          </a>
          과{' '}
          <a
            href="https://www.notion.so/230b5c7320fe8015a782e58d174f594b?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'underline', color: 'inherit' }}
          >
            개인정보처리방침
          </a>
          에 <br />
          동의하게 됩니다
        </Footer>
      </Wrapper>
    </>
  );
};

export default LoginPage;
