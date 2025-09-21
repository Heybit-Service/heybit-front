import type { Category } from '@/data/api/report';
import { getTotalAmount, sortByAmount } from '@/data/api/report';
import { getCategoryColor } from '@/lib/category-colors';

interface Props {
  categories: Category[];
}

export function Chart({ categories }: Props) {
  const totalAmount = getTotalAmount(categories);
  const sortedCategories = sortByAmount(categories);
  return (
    <div className="mb-9">
      <div className="flex h-9 rounded-lg overflow-hidden bg-gray-100">
        {sortedCategories.map((category, index) => {
          const percentage = totalAmount > 0 ? (category.totalAmount / totalAmount) * 100 : 0;
          return (
            <div
              key={category.category}
              className={`h-full ${index === 0 ? 'rounded-tl-[5px] rounded-bl-[5px]' : ''}`}
              style={{
                width: `${percentage}%`,
                backgroundColor: getCategoryColor(category.category),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
