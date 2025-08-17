import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { fetchTimer } from '@/data/api/timer';
import { TimerProgressSummary } from '@/components/timer/summary/progress';
import { TimerInformation } from '@/components/timer/information';
import { TimerStopButton } from '@/components/timer/button/timer-stop';
import { MoreButton } from '@/components/timer/button/more';

interface Props {
  params: Promise<{
    id: number;
  }>;
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const timer = await fetchTimer(id);
  return (
    <div className="h-dvh bg-[#F7F7F7] flex flex-col">
      <AppBar title="참고 있는 상품" leadings={<BackButton />} actions={<MoreButton id={id} />} />
      <div className="pb-[126px]">
        <TimerProgressSummary timer={timer} />
        <TimerInformation timer={timer} />
      </div>
      <div className="w-full fixed bottom-0 left-0 right-0 px-4 pt-[10px] pb-14 bg-[#F7F7F7]">
        <TimerStopButton id={id} />
      </div>
    </div>
  );
};

export default Page;
