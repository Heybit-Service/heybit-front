'use client';

import { useRouter } from 'next/navigation';

interface Props {
  id: number;
}

export const Actions = ({ id }: Props) => {
  const router = useRouter();

  const onClickSuccess = () => {
    router.push(`/timer/${id}/success`);
  };

  const onClickFail = () => {
    router.push(`/timer/${id}/fail`);
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
    </div>
  );
};
