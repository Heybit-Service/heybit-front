'use client';

import { useUserProfile } from '@/hooks/queries/user';

export function UserGreeting() {
  const { data: userProfile } = useUserProfile();

  const displayName = userProfile?.nickname || '';
  return (
    <div className="pt-6 pb-3">
      <h2 className="font-bold text-2xl text-[#202020] leading-[133%] tracking-normal mb-[3px]">
        {displayName}님,
      </h2>
      <p className="font-medium text-lg text-[#202020] leading-[150%] tracking-normal">
        헤이빗과 함께 이 달은 얼마나 절제했을까요?
      </p>
    </div>
  );
}
