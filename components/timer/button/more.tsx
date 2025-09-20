'use client';

import { useState } from 'react';
import MoreIcon from '@/assets/icon/more.svg';
import { ConfirmPopup } from '@/components/popup/confirm';
import { useDeleteTimer } from '@/hooks/queries/timer';
import { useRouter } from 'next/navigation';

interface Props {
  id: number;
}

export const MoreButton = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const deleteTimerMutation = useDeleteTimer();

  const onClick = () => {
    setOpen(true);
  };

  const onConfirm = () => {
    setOpen(false);
  };

  const onCancel = async () => {
    try {
      await deleteTimerMutation.mutateAsync(id);
      setOpen(false);
      router.replace('/dashboard/timer/progress');
    } catch {
      setOpen(false);
    }
  };

  return (
    <>
      <button className="px-5 py-5" onClick={onClick}>
        <MoreIcon />
      </button>
      <ConfirmPopup
        open={open}
        onClose={() => setOpen(false)}
        title={`상품을 삭제하면\n타이머와 진행중인 투표가\n모두 사라져요\n\n계속 할까요?`}
        description=""
        confirmLabel="아니오"
        cancelLabel="예"
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
};
