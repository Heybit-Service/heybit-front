'use client';
import type { TotalReport } from '@/data/api/report';
import { SavingsSummary } from '@/components/report/cumulative/savings-summary';
import { TimerSuccessRate } from '@/components/report/timer-success-rate';

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
  const monthlySavings = toMonthlySavings(data);
  const totalSavings = monthlySavings.reduce((sum, monthData) => sum + monthData.amount, 0);
  const currentMonth = `${new Date().getMonth() + 1}월`;
  return (
    <div style={{ backgroundColor: '#F7F7F7' }}>
      <div className="pt-5 px-4 flex flex-col gap-3">
        <SavingsSummary
          totalAmount={totalSavings}
          monthlySavings={monthlySavings}
          highlightMonth={currentMonth}
        />
        <TimerSuccessRate data={data} />
      </div>
    </div>
  );
}
