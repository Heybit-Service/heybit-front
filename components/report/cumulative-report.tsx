'use client';
// import { useRouter } from 'next/navigation';
import { CUMULATIVE_STYLES } from '@/lib/cumulative-config';
import type { CumulativeReportProps, MonthlyData } from '@/lib/cumulative-types';
import { TotalSavings } from '@/components/report/cumulative/total-savings';
import { MonthlySavingsChart } from '@/components/report/cumulative/monthly-savings-chart';
import { HorizontalTimerSuccess } from '@/components/report/cumulative/horizontal-timer-success';

const DEFAULT_MONTHLY_DATA: MonthlyData[] = [
  { month: '1월', amount: 100000 },
  { month: '2월', amount: 4000 },
  { month: '3월', amount: 5000 },
  { month: '5월', amount: 11000 },
  { month: '6월', amount: 62000 },
  { month: '7월', amount: 130000 },
];

export function CumulativeReport({ data }: CumulativeReportProps) {
  // const router = useRouter();

  const monthlySavings = data?.monthlySavings || DEFAULT_MONTHLY_DATA;
  const timerSuccessRate = data?.timerSuccessRate || 50;
  const timerGrade = data?.timerGrade || '매우 우수';

  const totalSavings = monthlySavings.reduce((sum, monthData) => sum + monthData.amount, 0);

  // const handleBack = () => {
  //   if (onBack) {
  //     onBack();
  //   } else {
  //     router.back();
  //   }
  // };

  return (
    <div className="min-h-screen" style={{ backgroundColor: CUMULATIVE_STYLES.colors.background }}>
      <div
        className="max-w-md mx-auto min-h-screen"
        style={{ backgroundColor: CUMULATIVE_STYLES.colors.white }}
      >
        <div className="p-6 space-y-8">
          <div
            className="border border-gray-200 py-[30px]"
            style={{
              borderRadius: '10px',
              boxShadow: '0px 3px 8px 0px #5353530D',
            }}
          >
            <div className="space-y-[30px]">
              <div className="px-4">
                <TotalSavings totalAmount={totalSavings} />
              </div>
              <div className="px-3">
                <MonthlySavingsChart data={monthlySavings} highlightMonth="7월" />
              </div>
            </div>
          </div>

          <div
            className="border border-gray-200 py-[30px] px-3"
            style={{
              borderRadius: '10px',
              boxShadow: '0px 3px 8px 0px #5353530D',
            }}
          >
            <HorizontalTimerSuccess successRate={timerSuccessRate} grade={timerGrade} />
          </div>
        </div>
      </div>
    </div>
  );
}
