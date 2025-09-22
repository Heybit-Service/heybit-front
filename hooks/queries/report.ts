import { useQuery } from '@tanstack/react-query';
import { getMonthlyReport, getTotalReport, MonthlyReport, TotalReport } from '@/data/api/report';

export const reportKeys = {
  monthly: (month: string) => ['reports', 'monthly', month] as const,
  total: () => ['reports', 'total'] as const,
};

export const useMonthlyReport = (month: string) => {
  return useQuery<MonthlyReport>({
    queryKey: reportKeys.monthly(month),
    queryFn: () => getMonthlyReport(month),
    enabled: !!month,
  });
};

export const useTotalReport = () => {
  return useQuery<TotalReport>({
    queryKey: reportKeys.total(),
    queryFn: () => getTotalReport(),
  });
};
