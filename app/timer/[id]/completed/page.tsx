'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { TimerSummary } from '@/components/timer/summary/completed';
import { TimerInformation } from '@/components/timer/information';
import { ReportConfirmButton } from '@/components/timer/button/report-confirm';
import FixedBottom from '@/components/layout/fixed-bottom';
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
    <div className="min-h-dvh bg-[#F7F7F7]">
      <AppBar title="내가 등록한 상품" leadings={<BackButton />} />
      <main className="pb-[126px]">
        <TimerSummary timer={timer} />
        <TimerInformation timer={timer} />
      </main>
      <FixedBottom>
        <ReportConfirmButton />
      </FixedBottom>
    </div>
  );
};

export default Page;
