import { Timer } from '@/data/type/timer';
import { VotingBar } from './voting-bar';
import { VotingBubble } from './voting-bubble';

interface Props {
  timer: Timer;
}

export function Voting({ timer }: Props) {
  const totalVotes = timer.buyCount + timer.holdCount;

  return (
    <div className="flex flex-col gap-9 px-4">
      <span className="font-pretendard font-bold text-base leading-[150%]">살까말까 투표 결과</span>
      <div className="flex flex-col gap-2">
        {totalVotes > 0 && <VotingBubble buyCount={timer.buyCount} stopCount={timer.holdCount} />}
        <VotingBar buyCount={timer.buyCount} stopCount={timer.holdCount} />
      </div>
    </div>
  );
}
