import { CategorySummary } from './expense/category-summary';
import { CategoryChart } from './expense/category-chart';
import { CategoryList } from './expense/category-list';
import { TotalSummary } from './expense/total-summary';
import { EXPENSE_STYLES } from '@/lib/expense-config';
import type { ExpenseCategoriesProps } from '@/lib/expense-types';

export function ExpenseCategories({ data }: ExpenseCategoriesProps) {
  return (
    <div className={EXPENSE_STYLES.spacing.container}>
      <CategorySummary topCategory={data.topCategory.name} topAmount={data.topCategory.amount} />
      <CategoryChart categories={data.categories} />
      <CategoryList categories={data.categories} />
      <TotalSummary totalExpense={data.totalExpense} />
    </div>
  );
}
