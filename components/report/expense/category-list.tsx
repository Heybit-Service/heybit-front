import type { ExpenseCategory } from '@/lib/expense-types';

interface Props {
  categories: ExpenseCategory[];
}

export function CategoryList({ categories }: Props) {
  return (
    <div className="space-y-3 mb-6">
      {categories.map((category) => (
        <div key={category.id} className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
            <span className="text-gray-700">{category.name}</span>
            <span className="text-gray-500 text-sm">{category.percentage}%</span>
          </div>
          <span className="font-medium">{category.amount.toLocaleString()}원</span>
        </div>
      ))}
    </div>
  );
}
