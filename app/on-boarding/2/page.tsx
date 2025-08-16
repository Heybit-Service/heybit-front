"use client";

import OnboardingLayout from '@/components/onboarding/OnboardingLayout';

export default function OnboardingPage2() {
    return (
        <OnboardingLayout
            currentPage={2}
            nextPath="/on-boarding/3"
            title="온보딩 2페이지"
        >
            <div>
                {/* 온보딩 2페이지 이미지 */}
            </div>
        </OnboardingLayout>
    );
}