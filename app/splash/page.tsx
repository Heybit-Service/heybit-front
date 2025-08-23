'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Logo from '@/assets/splash/logo.svg';
import Character from '@/assets/splash/character.svg';
import { GRAY } from '@/constant/color';
import { isAuthenticated } from '@/data/auth';

export default function SplashPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isAuthenticated()) {
        router.push('/dashboard/timer/progress');
      } else {
        router.push('/login');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: GRAY[100], minHeight: '100dvh' }}>
      <div className="flex flex-col items-center pt-32">
        <Logo width={198} height={71.92} />
        <p 
          className="mt-[26px] text-center"
          style={{
            fontFamily: 'Pretendard',
            fontWeight: 500,
            fontSize: '26px',
            lineHeight: '133%',
            letterSpacing: '0%',
            color: GRAY[400]
          }}
        >
          Hey! 잠깐 멈춰볼까?
        </p>
      </div>
      <div className="absolute bottom-0 left-[23px] right-0 md:left-0 md:flex md:justify-center">
        <Character className="w-full h-auto max-w-none md:max-w-md" />
      </div>
    </div>
  );
}