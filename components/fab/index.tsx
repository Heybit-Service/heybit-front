'use client';

import IconPlus from '@/assets/icon/icon_plus.svg';
import { useRouter } from 'next/navigation';

export const Fab = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/timer/start');
  };

  return (
    <button
      className="absolute bottom-25 right-4 w-16 h-16 bg-[#202020] rounded-full flex items-center justify-center"
      onClick={onClick}
    >
      <IconPlus />
    </button>
  );
};
