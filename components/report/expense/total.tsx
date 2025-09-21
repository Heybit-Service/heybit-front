import type { Category } from '@/data/api/report';
import { getTotalAmount } from '@/data/api/report';

interface Props {
  categories: Category[];
}

export function Total({ categories }: Props) {
  const totalExpense = getTotalAmount(categories);
  return (
    <div className="pt-5 border-t border-[#E8E8E8]">
      <div className="flex items-center justify-between">
        <span className="font-medium text-base leading-[100%] tracking-[0%] text-[#202020]">
          총 지출
        </span>
        <span className="font-semibold text-base leading-[100%] tracking-[0%] text-right text-[#202020]">
          {totalExpense.toLocaleString()}원
        </span>
      </div>
    </div>
  );
}
