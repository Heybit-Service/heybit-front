import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { fetchTimer } from '@/data/api/timer';
import { TimerSummary } from '@/components/timer/summary/completed';
import { TimerInformation } from '@/components/timer/information';
import { ReportConfirmButton } from '@/components/timer/button/report-confirm';

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const timer = await fetchTimer(id);
  return (
    <div className="h-dvh bg-[#F7F7F7]">
      <AppBar title="내가 등록한 상품" leadings={<BackButton />} />
      <TimerSummary timer={timer} />
      <TimerInformation timer={timer} />
      <div className="absolute bottom-14 w-full px-4">
        <ReportConfirmButton id={id} />
      </div>
    </div>
  );
};

export default Page;
