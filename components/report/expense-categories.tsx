import { Summary } from './expense/summary';
import { Chart } from './expense/chart';
import { List } from './expense/list';
import { Total } from './expense/total';
import type { MonthlyReport } from '@/data/api/report';

interface Props {
  data?: MonthlyReport;
}

export function ExpenseCategories({ data }: Props) {
  if (!data) {
    return (
      <div className="py-7 px-[18.5px] bg-white rounded-[10px]">
        <div className="text-center text-gray-500">데이터가 없습니다</div>
      </div>
    );
  }

  const categories = data.categoryFailures || [];
  return (
    <div className="py-7 px-[18.5px] bg-white rounded-[10px]">
      <Summary categories={categories} />
      <Chart categories={categories} />
      <List categories={categories} />
      <Total categories={categories} />
    </div>
  );
}
