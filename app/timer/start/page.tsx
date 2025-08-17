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

  const enabled = () => {
    if (form.day === 0 && form.hour === 0 && form.minute === 0) return false;
    return true;
  };

  return (
    <>
      <div className="h-dvh bg-[#F7F7F7] flex flex-col">
        <AppBar title="타이머 시작" leadings={<BackButton />} />
        <div className="flex-1 flex flex-col items-center overflow-y-auto">
          <SizedBox className="h-16" />
          <Image width={321} height={62} src={Bubble} alt="bubble" />
          <SizedBox className="h-6" />
          <Image width={171} height={191} src={Character} alt="character" />
          <SizedBox className="h-8" />
          <DurationPicker onChanged={onChanged} />
        </div>
        <div className="w-full px-4 pt-[10px] pb-14 bg-[#F7F7F7]">
          <TimerStartButton disabled={!enabled()} />
        </div>
      </div>
    </>
  );
}
