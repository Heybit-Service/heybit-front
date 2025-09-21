import type { Category } from '@/data/api/report';
import { getTotalAmount, sortByAmount, getCategoryLabel, getPercentage } from '@/data/api/report';
import { getCategoryColor } from '@/lib/category-colors';

interface Props {
  categories: Category[];
}

export function List({ categories }: Props) {
  const totalAmount = getTotalAmount(categories);
  const sortedCategories = sortByAmount(categories);
  return (
    <div className="flex flex-col gap-3 mb-5">
      {sortedCategories.map((category) => {
        const categoryName = getCategoryLabel(category.category);
        const percentage = getPercentage(category.totalAmount, totalAmount);

        return (
          <div key={category.category} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: getCategoryColor(category.category) }}
              />
              <span className="font-medium text-base leading-[100%] tracking-[0%] text-black">
                {categoryName}
              </span>
              <span className="font-medium text-[15px] leading-[100%] tracking-[0%] text-[#99989D]">
                {percentage}%
              </span>
            </div>
            <span className="font-semibold text-base leading-[100%] tracking-[0%] text-right text-black">
              {category.totalAmount.toLocaleString()}원
            </span>
          </div>
        );
      })}
    </div>
  );
}
