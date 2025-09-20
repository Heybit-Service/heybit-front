'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import CheckIcon from '@/assets/icon/check.svg';
import { Actions } from './actions';
import ProgressStatus from '@/components/timer/summary/progress/status';
import { useTimer } from '@/hooks/queries/timer';
import { use } from 'react';

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const Page = ({ params }: Props) => {
  const { id } = use(params);
  const { data: timer } = useTimer(id);
  if (timer === undefined) {
    return null;
  }
  return (
    <div className="min-h-dvh flex flex-col bg-[#F7F7F7]">
      <AppBar title="참고 있는 상품" leadings={<BackButton />} />
      <div className="flex flex-col flex-grow items-center justify-between">
        <div className="flex flex-col items-center justify-center pt-10 gap-4">
          <div className="flex flex-col items-center justify-center gap-8">
            <ProgressStatus progress={0} timer={timer} />
            <CheckIcon />
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <span className="font-bold text-2xl leading-[133%] text-center">{timer.name}</span>
            <span className="font-medium text-lg leading-[150%] text-center">
              상품에 대한 타이머가 종료됐어요
            </span>
          </div>
        </div>
        <Actions id={id} amount={timer.amount} />
      </div>
    </div>
  );
};

export default Page;
