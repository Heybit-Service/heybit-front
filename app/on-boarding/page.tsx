"use client";

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import OnboardingImage1 from '@/assets/on-boarding/1.png';

export default function OnboardingPage() {
    const router = useRouter();
    
    const handleSkip = () => {
        router.push('/survey/one'); // 설문조사 페이지로 이동
    };
    
    return (
        <div className="min-h-screen relative bg-heybit-variable-HB-gray100">
            {/* 건너뛰기 버튼 - 우측 상단 */}
            <div 
                className="text-heybit-variable-HB-gray300 text-center whitespace-nowrap cursor-pointer"
                style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    padding: '10px 16px',
                    fontFamily: 'var(--h7-medium-font-family)',
                    fontSize: 'var(--h7-medium-font-size)',
                    fontStyle: 'var(--h7-medium-font-style)',
                    fontWeight: 'var(--h7-medium-font-weight)',
                    letterSpacing: 'var(--h7-medium-letter-spacing)',
                    lineHeight: 'var(--h7-medium-line-height)'
                }}
                onClick={handleSkip}
            >
                건너뛰기
            </div>
            
            {/* 온보딩 이미지 */}
            <div style={{ paddingTop: '58px', paddingLeft: '26.5px', paddingRight: '26.5px' }}>
                <Image 
                    src={OnboardingImage1} 
                    alt="온보딩 이미지"
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
            
            {/* 텍스트 */}
            <div 
                className="text-center"
                style={{
                    marginTop: '36px',
                    color: 'var(--heybit-variable-HB-balck)',
                    fontFamily: 'Pretendard',
                    fontSize: '24px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '133%'
                }}
            >
                다시 생각해보며<br /> 소비 절제 능력을 길러요
            </div>
            
            {/* 온보딩 페이지 내용 */}
        </div>
    );
}