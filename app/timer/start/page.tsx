import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';
import { SizedBox } from '@/components/sized-box';
import Bubble from '@/assets/timer/start/bubble.png';
import Character from '@/assets/timer/start/character.png';
import Image from 'next/image';
import { TimerStartButton } from '@/components/timer/button/timer-start';
import DurationPicker from '@/components/timer/picker';

export default function Page() {
  return (
    <div className="h-screen bg-[#F7F7F7]">
      <AppBar title="타이머 시작" leadings={<BackButton />} />
      <SizedBox className="h-16" />
      <div className="flex flex-col items-center gap-8">
        <div>
          <Image className="px-9" src={Bubble} alt="bubble" />
          <SizedBox className="h-6" />
          <Image className="px-28" src={Character} alt="character" />
        </div>
        <DurationPicker />
      </div>
      <div className="absolute bottom-14 w-full px-4">
        <TimerStartButton />
      </div>
    </div>
  );
}
