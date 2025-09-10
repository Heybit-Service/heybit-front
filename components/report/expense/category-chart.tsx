import { EXPENSE_STYLES } from '@/lib/expense-config';
import type { ExpenseCategory } from '@/lib/expense-types';

interface CategoryChartProps {
  categories: ExpenseCategory[];
}

export function CategoryChart({ categories }: CategoryChartProps) {
  return (
    <div className={EXPENSE_STYLES.spacing.section}>
      <div className="flex h-4 rounded-lg overflow-hidden bg-gray-100">
        {categories.map((category) => (
          <div
            key={category.id}
            className="h-full"
            style={{
              width: `${category.percentage}%`,
              backgroundColor: category.color,
            }}
          />
        ))}
      </div>
    </div>
  );
}
