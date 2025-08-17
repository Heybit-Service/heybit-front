'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { TimerForm } from '@/components/timer/form';
import { createTimer } from './action';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { formAtom, initValue } from '@/components/timer/form/store';
import TimerBubble from '@/components/timer/bubble';

const Page = () => {
  const router = useRouter();
  const [form, setForm] = useAtom(formAtom);
  const duration = `${form.day}일 ${form.hour}시간 ${form.minute}분`;
  return (
    <div className="h-dvh bg-[#F7F7F7]">
      <AppBar title="타이머 상품 등록" leadings={<BackButton />} />
      <TimerBubble duration={duration} />
      <div className="pt-8">
        <TimerForm
          onSubmit={async (form) => {
            const startTime = new Date();
            const endTime = new Date(
              startTime.getTime() +
                form.day * 24 * 60 * 60 * 1000 +
                form.hour * 60 * 60 * 1000 +
                form.minute * 60 * 1000,
            );
            await createTimer({
              name: form.name,
              amount: Number(form.price),
              description: form.description,
              category: form.category,
              startTime,
              endTime,
              withVotePost: form.voting,
              image: form.image,
            });
            setForm(initValue);
            router.push('/dashboard/timer/progress');
          }}
        />
      </div>
    </div>
  );
};

export default Page;
