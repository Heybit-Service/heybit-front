import type { ExpenseCategory } from '@/lib/expense-types';

interface Props {
  categories: ExpenseCategory[];
}

export function CategoryChart({ categories }: Props) {
  return (
    <div className="mb-6">
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
