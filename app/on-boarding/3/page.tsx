"use client";

import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import ImageWithSkeleton from '@/components/onboarding/ImageWithSkeleton';
import OnboardingImage3 from '@/assets/on-boarding/3.webp';

export default function OnboardingPage3() {
    return (
        <OnboardingLayout
            currentPage={3}
            nextPath="/register"
            skipPath="/register"
            title={<>나의 소비 절제 기록을<br />한눈에 확인해요</>}
            nextButtonText="닉네임 설정"
        >
            <ImageWithSkeleton 
                src={OnboardingImage3} 
                alt="온보딩 이미지 3"
                priority={true}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                skeletonHeight="400px"
            />
        </OnboardingLayout>
    );
}