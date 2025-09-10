import { EXPENSE_STYLES } from '@/lib/expense-config';
import type { ExpenseCategory } from '@/lib/expense-types';

interface CategoryListProps {
  categories: ExpenseCategory[];
}

export function CategoryList({ categories }: CategoryListProps) {
  return (
    <div className={`${EXPENSE_STYLES.spacing.item} ${EXPENSE_STYLES.spacing.section}`}>
      {categories.map((category) => (
        <div key={category.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
            <span className={EXPENSE_STYLES.text.category}>{category.name}</span>
            <span className={EXPENSE_STYLES.text.percentage}>{category.percentage}%</span>
          </div>
          <span className={EXPENSE_STYLES.text.amount}>{category.amount.toLocaleString()}원</span>
        </div>
      ))}
    </div>
  );
}
