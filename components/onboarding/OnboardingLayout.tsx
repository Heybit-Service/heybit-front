"use client";

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface OnboardingLayoutProps {
    children: ReactNode;
    currentPage: number;
    totalPages?: number;
    nextPath?: string;
    skipPath?: string;
    title?: ReactNode;
    showSkipButton?: boolean;
    showNextButton?: boolean;
    nextButtonText?: string;
}

export default function OnboardingLayout({
    children,
    currentPage,
    totalPages = 3,
    nextPath,
    skipPath = '/register',
    title,
    showSkipButton = true,
    showNextButton = true,
    nextButtonText = '다음'
}: OnboardingLayoutProps) {
    const router = useRouter();
    
    const handleSkip = () => {
        router.push(skipPath);
    };
    
    const handleNext = () => {
        if (nextPath) {
            router.push(nextPath);
        }
    };
    
    return (
        <div className="min-h-screen relative bg-heybit-variable-HB-gray100">
            {/* 건너뛰기 버튼 - 우측 상단 */}
            {showSkipButton && (
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
            )}
            
            {/* 온보딩 컨텐츠 */}
            <div style={{ paddingTop: '58px', paddingLeft: '26.5px', paddingRight: '26.5px' }}>
                {children}
            </div>
            
            {/* 텍스트 */}
            {title && (
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
                    {title}
                </div>
            )}
            
            {/* 페이지 인디케이터 */}
            <div 
                style={{
                    marginTop: '32px',
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center'
                }}
            >
                {Array.from({ length: totalPages }, (_, index) => (
                    <div 
                        key={index}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: index === currentPage - 1 
                                ? 'var(--heybit-variable-HB-balck)' 
                                : 'var(--heybit-variable-HB-gray200)'
                        }}
                    />
                ))}
            </div>
            
            {/* 다음 버튼 */}
            {showNextButton && nextPath && (
                <button
                    onClick={handleNext}
                    className="text-heybit-variable-HB-white"
                    style={{
                        position: 'absolute',
                        bottom: '56px',
                        left: '16px',
                        right: '16px',
                        display: 'flex',
                        height: '60px',
                        padding: '20px 132px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '10px',
                        borderRadius: '10px',
                        background: 'var(--heybit-variable-HB-balck)',
                        border: 'none',
                        cursor: 'pointer',
                        marginTop: '10px',
                        textAlign: 'center',
                        fontFamily: 'Pretendard',
                        fontSize: '18px',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        lineHeight: '150%'
                    }}
                >
                    {nextButtonText}
                </button>
            )}
        </div>
    );
}