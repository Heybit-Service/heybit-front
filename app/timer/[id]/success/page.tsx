'use client';

import Image from 'next/image';
import Character from '@/assets/timer/success/character.png';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTimer } from '@/hooks/queries/timer';

const Page = () => {
  const params = useParams();
  const id = Number(params.id);
  const { data: timer, isLoading, error } = useTimer(id);

  if (isLoading) {
    return (
      <div className="min-h-dvh bg-[#F7F7F7] flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-medium">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (error || !timer) {
    return (
      <div className="min-h-dvh bg-[#F7F7F7] flex items-center justify-center">
        <div className="text-center">
          <div className="text-lg font-medium text-red-500">타이머를 불러올 수 없습니다</div>
        </div>
      </div>
    );
  }
  const formatDuration = (startTime: string, endTime: string) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const diffMs = end.getTime() - start.getTime();
    const totalMinutes = Math.floor(diffMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minutes = totalMinutes % 60;
    const parts = [];
    if (days > 0) parts.push(`${days}일`);
    if (hours > 0) parts.push(`${hours}시간`);
    if (minutes > 0) parts.push(`${minutes}분`);
    return parts.length > 0 ? parts.join(' ') : '0분';
  };

  return (
    <div className="min-h-dvh bg-[#F7F7F7] flex flex-col pt-30">
      <div className="flex flex-col items-center gap-5 flex-grow">
        <Image className="px-23" src={Character} alt="character" />
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-1">
            <span className="font-pretendard font-bold text-[22px] leading-[130%] text-center">
              훌륭해요!
            </span>
            <span className="font-pretendard font-bold text-[22px] leading-[130%] text-center">
              {formatDuration(timer.startTime, timer.endTime)}을 참고
            </span>
            <span className="font-pretendard font-bold text-[22px] leading-[130%] text-center">
              <span className="text-[#0EC189]">{timer.amount.toLocaleString()}원</span>을 아꼈어요
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-pretendard font-medium text-base leading-[140%] text-center text-[#7C7C7C]">
              앞으로도 헤이빗과 함께
            </span>
            <span className="font-pretendard font-medium text-base leading-[140%] text-center text-[#7C7C7C]">
              불필요한 소비를 줄여나가요!
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 px-4 pt-4 pb-14">
        <Link className="w-full cursor-pointer" href={'/dashboard/timer/progress'}>
          <div className="w-full py-4 bg-[#7C7C7C] rounded-[10px] text-white font-pretendard font-semibold text-lg leading-[150%] text-center">
            닫기
          </div>
        </Link>
        <Link className="w-full cursor-pointer" href={`/timer/${id}/report`}>
          <div className="w-full py-4 bg-[#202020] rounded-[10px] text-white font-pretendard font-semibold text-lg leading-[150%] text-center">
            리포트 확인
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
