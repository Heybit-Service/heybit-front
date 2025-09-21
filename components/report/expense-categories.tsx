import { CategorySummary } from './expense/category-summary';
import { CategoryChart } from './expense/category-chart';
import { CategoryList } from './expense/category-list';
import { TotalSummary } from './expense/total-summary';
import type { ExpenseCategoriesProps } from '@/lib/expense-types';

export function ExpenseCategories({ data }: ExpenseCategoriesProps) {
  return (
    <div className="px-4 bg-white">
      <CategorySummary topCategory={data.topCategory.name} topAmount={data.topCategory.amount} />
      <CategoryChart categories={data.categories} />
      <CategoryList categories={data.categories} />
      <TotalSummary totalExpense={data.totalExpense} />
    </div>
  );
}
