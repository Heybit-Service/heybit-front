// UI 컴포넌트용 타입 (변환된 데이터)
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
