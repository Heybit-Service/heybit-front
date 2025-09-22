import { TotalSavings } from './total-savings';
import { MonthlySavingsChart } from './monthly-savings-chart';

interface MonthlyData {
  month: string;
  amount: number;
}

interface Props {
  totalAmount: number;
  monthlySavings: MonthlyData[];
  highlightMonth?: string;
}

export function SavingsSummary({ totalAmount, monthlySavings, highlightMonth = '7월' }: Props) {
  return (
    <div className="py-[30px] px-4 rounded-[10px] bg-white">
      <div className="flex flex-col gap-[30px]">
        <TotalSavings totalAmount={totalAmount} />
        <MonthlySavingsChart data={monthlySavings} highlightMonth={highlightMonth} />
      </div>
    </div>
  );
}
