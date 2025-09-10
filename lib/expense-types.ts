export interface ExpenseCategory {
  id: string;
  name: string;
  amount: number;
  percentage: number;
  color: string;
}

export interface ExpenseData {
  categories: ExpenseCategory[];
  totalExpense: number;
  topCategory: {
    name: string;
    amount: number;
  };
}

export interface ExpenseCategoriesProps {
  data: ExpenseData;
}
