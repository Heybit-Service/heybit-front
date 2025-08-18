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
    <div className="bg-[#F7F7F7]">
      <AppBar title="내가 등록한 상품" leadings={<BackButton />} />
      <main className="pb-[126px]">
        <TimerSummary timer={timer} />
        <TimerInformation timer={timer} />
      </main>
      <div className="md:max-w-[430px] mx-auto fixed bottom-0 left-0 right-0 px-4 pt-[10px] pb-14 bg-[#F7F7F7]">
        <ReportConfirmButton id={id} />
      </div>
    </div>
  );
};

export default Page;
