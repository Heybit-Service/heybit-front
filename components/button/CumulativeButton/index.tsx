'use client';

import { useRouter } from 'next/navigation';

interface Props {
  className?: string;
}

export default function ReportTotalButton({ className = '' }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/report/total');
  };

  return (
    <div className="pb-6 pt-[10px]">
      <button
        onClick={handleClick}
        className={`w-full bg-black text-white py-4 px-6 rounded-lg font-medium text-base hover:bg-gray-800 transition-colors ${className}`}
      >
        누적 데이터 확인
      </button>
    </div>
  );
}
