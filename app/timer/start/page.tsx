'use client';

import Image from 'next/image';
import { useAtom } from 'jotai';
import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { SizedBox } from '@/components/sized-box';
import Bubble from '@/assets/timer/start/bubble.png';
import Character from '@/assets/timer/start/character.png';
import { TimerStartButton } from '@/components/timer/button/timer-start';
import DurationPicker, { Duration } from '@/components/timer/picker';
import { formAtom } from '@/components/timer/form/store';
import FixedBottom from '@/components/layout/fixed-bottom';

export default function Page() {
  const [form, setForm] = useAtom(formAtom);

  const onChanged = (duration: Duration) => {
    setForm({ ...form, day: duration.day, hour: duration.hour, minute: duration.minute });
  };

  const enabled = () => !(form.day === 0 && form.hour === 0 && form.minute === 0);

  return (
    <div className="h-dvh flex flex-col bg-[#F7F7F7]">
      <AppBar title="타이머 시작" leadings={<BackButton />} />
      <div className="flex flex-col items-center pb-[98px] overflow-auto">
        <SizedBox className="h-16" />
        <Image width={321} height={62} src={Bubble} alt="bubble" />
        <SizedBox className="h-6" />
        <Image width={171} height={191} src={Character} alt="character" />
        <SizedBox className="h-8" />
        <DurationPicker onChanged={onChanged} />
      </div>
      <FixedBottom style={{ paddingBottom: '28px' }}>
        <TimerStartButton disabled={!enabled()} />
      </FixedBottom>
    </div>
  );
}
