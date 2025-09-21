import { Summary } from './expense/summary';
import { Chart } from './expense/chart';
import { List } from './expense/list';
import { Total } from './expense/total';
import type { MonthlyReport } from '@/data/api/report';
import { SAMPLE_MONTHLY_REPORT } from '@/data/sample/report-data';

interface Props {
  data?: MonthlyReport;
}

export function ExpenseCategories({ data }: Props) {
  const reportData = data || SAMPLE_MONTHLY_REPORT;
  const categories = reportData.categoryFailures || [];
  return (
    <div className="py-7 px-[18.5px] bg-white rounded-[10px]">
      <Summary categories={categories} />
      <Chart categories={categories} />
      <List categories={categories} />
      <Total categories={categories} />
    </div>
  );
}
