import { useQuery } from '@tanstack/react-query';
import { getMonthlyReport, MonthlyReport } from '@/data/api/report';

export const reportKeys = {
  monthly: (month: string) => ['reports', 'monthly', month] as const,
};

export const useMonthlyReport = (month: string) => {
  return useQuery<MonthlyReport>({
    queryKey: reportKeys.monthly(month),
    queryFn: () => getMonthlyReport(month),
    enabled: !!month,
  });
};
