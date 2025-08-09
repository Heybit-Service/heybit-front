'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';
import { createTimer } from './action';

const Page = () => {
  const onClick = () => {
    createTimer({
      name: '에어팟 프로',
      amount: 259000,
      description: '노이즈 캔슬링 탑재한 무선 이어폰. 이어폰 잃어버려서 사고싶어',
      category: 'ETC',
      startTime: new Date(),
      endTime: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30),
      withVotePost: true,
    });
  };

  return (
    <div className="h-screen bg-[#F7F7F7]">
      <AppBar title="타이머 상품 등록" leadings={<BackButton />} />
      <div className="pt-8 pb-14"></div>
      <div className="px-4">
        <button
          className="w-full bg-[#202020] py-4 font-pretendard font-semibold text-xl text-[#FFFFFF] leading-[150%] text-center rounded-[10px]"
          onClick={onClick}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default Page;
