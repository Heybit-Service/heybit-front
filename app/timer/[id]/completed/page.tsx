import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { fetchTimer } from '@/data/api/timer';
import { TimerSummary } from '@/components/timer/summary/completed';
import { TimerInformation } from '@/components/timer/information';
import { ReportConfirmButton } from '@/components/timer/button/report-confirm';
import FixedBottom from '@/components/layout/fixed-bottom';

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const timer = await fetchTimer(id);
  return (
    <div className="bg-[#F7F7F7]">
      <AppBar title="내가 등록한 상품" leadings={<BackButton />} />
      <main className="pb-[126px]">
        <TimerSummary timer={timer} />
        <TimerInformation timer={timer} />
      </main>
      <FixedBottom>
        <ReportConfirmButton id={id} />
      </FixedBottom>
    </div>
  );
};

export default Page;
