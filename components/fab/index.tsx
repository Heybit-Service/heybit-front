'use client';

import PlusIcon from '@/assets/icon/plus.svg';
import { useRouter } from 'next/navigation';

interface FabProps {
  bottom?: string;
}

export const Fab = ({ bottom = '100px' }: FabProps = {}) => {
  const router = useRouter();

  const onClick = () => {
    router.push('/timer/start');
  };

  return (
    <button
      className={`fixed right-4 w-16 h-16 bg-[#202020] rounded-full flex items-center justify-center z-50 md:right-[calc(50%-200px)]`}
      style={{ bottom }}
      onClick={onClick}
    >
      <PlusIcon />
    </button>
  );
};
