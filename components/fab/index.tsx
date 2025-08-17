'use client';

import PlusIcon from '@/assets/icon/plus.svg';
import { useAtomValue } from 'jotai';
import { useRouter } from 'next/navigation';
import { fabAtom } from './store';

export const Fab = () => {
  const router = useRouter();
  const fab = useAtomValue(fabAtom);

  const onClick = () => {
    router.push('/timer/start');
  };

  return (
    <>
      {fab.visible && (
        <button
          className="fixed bottom-25 right-4 w-16 h-16 bg-[#202020] rounded-full flex items-center justify-center"
          onClick={onClick}
        >
          <PlusIcon />
        </button>
      )}
    </>
  );
};
