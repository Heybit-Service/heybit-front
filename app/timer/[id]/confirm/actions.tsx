'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ConfirmPopup } from '@/components/popup/confirm';
import Character from '@/assets/popup/fail_character.png';

interface Props {
  id: number;
}

export const Actions = ({ id }: Props) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const onClickSuccess = () => {
    router.push(`/timer/${id}/success`);
  };

  const onClickFail = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onCancel = () => {
    router.push(`/timer/${id}/fail`);
  };

  const onConfirm = () => {
    setOpen(false);
  };

  return (
    <div className="flex gap-3 px-4 pt-[10px] pb-14">
      <button
        className="w-full px-13 py-4 bg-[#FADBD4] rounded-[10px] text-[#E74A27] font-pretendard font-semibold text-lg leading-[150%] text-center"
        onClick={onClickFail}
      >
        절제 실패
      </button>
      <button
        className="w-full px-13 py-4 bg-[#CDE9FA] rounded-[10px] text-[#005BDB] font-pretendard font-semibold text-lg leading-[150%] text-center"
        onClick={onClickSuccess}
      >
        절제 성공
      </button>
      <ConfirmPopup
        open={open}
        onClose={onClose}
        onConfirm={onConfirm}
        onCancel={onCancel}
        image={Character}
        title="이미 구매한건가요?"
        description="아직 구매하지 않았다면 한번 더 고민해보세요"
        confirmLabel="생각해볼게요"
        cancelLabel="구매했어요"
      />
    </div>
  );
};
