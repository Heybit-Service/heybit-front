'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { SizedBox } from '@/components/sized-box';
import Bubble from '@/assets/timer/start/bubble.png';
import Character from '@/assets/timer/start/character.png';
import Image from 'next/image';
import { TimerStartButton } from '@/components/timer/button/timer-start';
import DurationPicker, { Duration } from '@/components/timer/picker';
import { useAtom } from 'jotai';
import { formAtom } from '@/components/timer/form/store';

export default function Page() {
  const [form, setForm] = useAtom(formAtom);
  const onChanged = (duration: Duration) => {
    setForm({ ...form, day: duration.day, hour: duration.hour, minute: duration.minute });
  };

  return (
    <>
      <div className="h-dvh bg-[#F7F7F7]">
        <AppBar title="타이머 시작" leadings={<BackButton />} />
        <div className="flex flex-col items-center">
          <SizedBox className="h-16" />
          <Image className="px-9" src={Bubble} alt="bubble" />
          <SizedBox className="h-6" />
          <Image className="px-28" src={Character} alt="character" />
          <SizedBox className="h-8" />
          <DurationPicker onChanged={onChanged} />
        </div>
      </div>
      <div className="w-full fixed bottom-0 left-0 right-0 px-4 pt-[10px] pb-14 bg-[#F7F7F7]">
        <TimerStartButton />
      </div>
    </>
  );
}
