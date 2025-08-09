import { Timer } from '@/data/type/timer';
import { SizedBox } from '@/components/sized-box';
import { Category } from './category';
import { Title } from './title';
import { Price } from './price';
import { Description } from './description';
import { Image } from './image';
import { Voting } from './voting';

interface Props {
  timer: Timer;
}

export const TimerInformation = ({ timer }: Props) => {
  const imageVisible = timer.imageUrl !== null && timer.imageUrl !== '';
  const votingVisible = timer.withVotePost;
  return (
    <div className="px-4">
      <Category value={timer.category} />
      <SizedBox className="h-3" />
      <Title value={timer.name} />
      <SizedBox className="h-3" />
      <Price value={timer.amount} />
      <SizedBox className="h-3" />
      <Description value={timer.description} />
      <SizedBox className="h-3" />
      {imageVisible && <Image src={timer.imageUrl} alt="completed-timer-image" />}
      {votingVisible && (
        <>
          <SizedBox className="h-9" />
          <Voting timer={timer} />
        </>
      )}
    </div>
  );
};
