import { EXPENSE_STYLES } from '@/lib/expense-config';

interface Props {
  totalExpense: number;
}

export function TotalSummary({ totalExpense }: Props) {
  return (
    <div className={EXPENSE_STYLES.spacing.border}>
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-900">총 지출</span>
        <span className={EXPENSE_STYLES.text.total}>{totalExpense.toLocaleString()}원</span>
      </div>
    </div>
  );
}
