"use client";

import OnboardingLayout from '@/components/onboarding/OnboardingLayout';
import ImageWithSkeleton from '@/components/onboarding/ImageWithSkeleton';
import OnboardingImage2 from '@/assets/on-boarding/2.webp';

export default function OnboardingPage2() {
    return (
        <OnboardingLayout
            currentPage={2}
            nextPath="/on-boarding/3"
            skipPath="/register"
            title={<>살까 말까?<br />고민을 공유하고 의견을 나눠요</>}
        >
            <ImageWithSkeleton 
                src={OnboardingImage2} 
                alt="온보딩 이미지 2"
                priority={true}
                quality={100}
                style={{ width: '100%', height: 'auto' }}
                skeletonHeight="400px"
            />
        </OnboardingLayout>
    );
}