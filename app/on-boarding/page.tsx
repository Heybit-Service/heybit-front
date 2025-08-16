"use client";

import OnboardingImage1 from '@/assets/on-boarding/1.webp';
import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import ImageWithSkeleton from '@/components/onboarding/ImageWithSkeleton';

export default function OnboardingPage() {
    return (
        <OnboardingLayout
            currentPage={1}
            nextPath="/on-boarding/2"
            title={<>다시 생각해보며<br /> 소비 절제 능력을 길러요</>}
        >
            <ImageWithSkeleton 
                src={OnboardingImage1} 
                alt="온보딩 이미지"
                priority={true}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                skeletonHeight="400px"
            />
        </OnboardingLayout>
    );
}