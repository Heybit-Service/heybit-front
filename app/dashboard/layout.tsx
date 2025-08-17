import DashboardLayout from '@/components/layout/dashboardLayout';

const DashboardPageLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardLayout>{children}</DashboardLayout>;
};

export default DashboardPageLayout;
