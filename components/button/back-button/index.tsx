'use client';

import BackIcon from '@/assets/icon/chevron_back.svg';
import { useRouter } from 'next/navigation';

interface Props {
  onClick?: () => void;
}

export const BackButton = ({ onClick }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();
    router.back();
  };

  return (
    <button className="px-4 py-4" onClick={handleClick}>
      <BackIcon />
    </button>
  );
};
