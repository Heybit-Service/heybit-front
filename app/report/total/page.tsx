'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { CumulativeReport } from '@/components/report/cumulative-report';
import { useTotalReport } from '@/hooks/queries/report';

export default function Page() {
  const { data: totalReport } = useTotalReport();
  if (!totalReport) {
    return null;
  }
  return (
    <div className="min-h-dvh bg-[#F7F7F7]">
      <AppBar title="누적 리포트" leadings={<BackButton />} />
      <CumulativeReport data={totalReport} />
    </div>
  );
}
