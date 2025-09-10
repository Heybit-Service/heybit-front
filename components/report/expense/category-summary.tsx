import { EXPENSE_STYLES } from '@/lib/expense-config';

interface CategorySummaryProps {
  topCategory: string;
  topAmount: number;
}

export function CategorySummary({ topCategory, topAmount }: CategorySummaryProps) {
  return (
    <div className={`${EXPENSE_STYLES.spacing.section} mt-6`}>
      <p className={EXPENSE_STYLES.text.summary}>한달 동안 가장 많이 소비한 카테고리는</p>
      <p className={EXPENSE_STYLES.text.title}>
        <span className={EXPENSE_STYLES.text.bold}>{topCategory}</span>로 총{' '}
        <span className={EXPENSE_STYLES.text.bold}>{topAmount.toLocaleString()}원</span>을
        사용했어요
      </p>
    </div>
  );
}
