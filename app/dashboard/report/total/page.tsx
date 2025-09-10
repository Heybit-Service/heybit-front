import { CumulativeReport } from '@/components/report/cumulative-report';

export default function Page() {
  const sampleData = {
    monthlySavings: [
      { month: '1월', amount: 100000 },
      { month: '2월', amount: 4000 },
      { month: '3월', amount: 5000 },
      { month: '5월', amount: 11000 },
      { month: '6월', amount: 62000 },
      { month: '7월', amount: 130000 },
    ],
    timerSuccessRate: 50,
    timerGrade: '매우 우수',
  };

  return <CumulativeReport data={sampleData} />;
}
