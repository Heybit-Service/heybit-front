'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';
import { TimerForm } from '@/components/timer/form';
import { createTimer } from './action';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  return (
    <div className="h-screen bg-[#F7F7F7]">
      <AppBar title="타이머 상품 등록" leadings={<BackButton />} />
      <div className="pt-8">
        <TimerForm
          onSubmit={async (form) => {
            await createTimer({
              name: form.name,
              amount: Number(form.price),
              description: form.description,
              category: form.category,
              startTime: new Date(),
              endTime: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 30),
              withVotePost: form.voting,
            });
            router.push('/dashboard/timer/progress');
          }}
        />
      </div>
    </div>
  );
};

export default Page;
