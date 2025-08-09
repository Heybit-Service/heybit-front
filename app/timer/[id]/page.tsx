import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';
import { fetchTimer } from '@/data/api/timer';
import { TimerSummary } from '@/components/timer/summary';

interface Props {
  params: {
    id: number;
  };
}

const TimerPage = async ({ params }: Props) => {
  const { id } = await params;
  const timer = await fetchTimer(id);
  return (
    <div>
      <AppBar title="내가 등록한 상품" leadings={<BackButton />} />
      <TimerSummary timer={timer} />
    </div>
  );
};

export default TimerPage;
