'use client';

import { useState } from 'react';
import { ConfirmPopup } from '@/components/popup/confirm';
import Character from '@/assets/popup/fail_character.png';
import { useRouter } from 'next/navigation';
import { useCreateTimerResult } from '@/hooks/queries/timer';

interface Props {
  id: number;
  amount: number;
}

export const TimerStopButton = ({ id, amount }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const createTimerResultMutation = useCreateTimerResult();

  const onClose = () => {
    setOpen(false);
  };

  const onConfirm = () => {
    setOpen(false);
  };

  const onCancel = async () => {
    try {
      await createTimerResultMutation.mutateAsync({
        timerId: id,
        result: 'PURCHASED', // 절제 실패
        amount,
      });
      router.push(`/timer/${id}/fail`);
    } catch (error) {
      console.error('Failed to create timer result:', error);
      // 에러가 발생해도 fail 페이지로 이동
      router.push(`/timer/${id}/fail`);
    }
  };

  const onClick = () => {
    setOpen(true);
  };

  return (
    <>
      <button
        className="w-full py-4 bg-[#202020] font-pretendard font-semibold text-lg leading-[150%] text-center text-white rounded-[10px]"
        onClick={onClick}
      >
        타이머 멈춤
      </button>
      <ConfirmPopup
        open={open}
        onClose={onClose}
        onConfirm={onConfirm}
        onCancel={onCancel}
        image={Character}
        title={`잠깐!\n조금만 더 참아볼까요?`}
        description={`지금 타이머를 멈추면 절제 실패로 기록 돼요\n타이머가 종료될 때까지 기다려주세요:)`}
        confirmLabel="계속 참기"
        cancelLabel="그래도 종료"
      />
    </>
  );
};
