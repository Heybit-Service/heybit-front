import { Timer } from '@/data/type/timer';
import { VotingBar } from './voting-bar';

interface Props {
  timer: Timer;
}

export function Voting({ timer }: Props) {
  return (
    <div className="flex flex-col gap-9 px-4">
      <span className="font-pretendard font-bold text-base leading-[150%]">살까말까 투표 결과</span>
      <VotingBar buyCount={timer.buyCount} stopCount={timer.holdCount} />
    </div>
  );
}
