'use client';
import type { TotalReport } from '@/data/api/report';
import { TotalSavings } from '@/components/report/cumulative/total-savings';
import { MonthlySavingsChart } from '@/components/report/cumulative/monthly-savings-chart';
import { HorizontalTimerSuccess } from '@/components/report/cumulative/horizontal-timer-success';

interface MonthlyData {
  month: string;
  amount: number;
}

interface Props {
  data: TotalReport;
}

export function CumulativeReport({ data }: Props) {
  const toMonthlySavings = (data: TotalReport): MonthlyData[] => {
    return data.monthSummaries.map((summary) => ({
      month: `${summary.month}월`,
      amount: summary.savedAmount,
    }));
  };

  const getGrade = (rate: number): string => {
    if (rate >= 80) return '매우 우수';
    if (rate >= 60) return '우수';
    if (rate >= 40) return '보통';
    if (rate >= 20) return '나쁨';
    return '매우 나쁨';
  };

  const monthlySavings = toMonthlySavings(data);
  const successRate = Math.floor(data.successRate.successRatePercent);
  const timerGrade = getGrade(successRate);
  const totalSavings = monthlySavings.reduce((sum, monthData) => sum + monthData.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto min-h-screen bg-white">
        <div className="p-6 space-y-8">
          <div className="border border-gray-200 py-[30px] rounded-[10px] shadow-[0px_3px_8px_0px_#5353530D]">
            <div className="space-y-[30px]">
              <div className="px-4">
                <TotalSavings totalAmount={totalSavings} />
              </div>
              <div className="px-3">
                <MonthlySavingsChart data={monthlySavings} highlightMonth="7월" />
              </div>
            </div>
          </div>

          <div className="border border-gray-200 py-[30px] px-3 rounded-[10px] shadow-[0px_3px_8px_0px_#5353530D]">
            <HorizontalTimerSuccess successRate={successRate} grade={timerGrade} />
          </div>
        </div>
      </div>
    </div>
  );
}
