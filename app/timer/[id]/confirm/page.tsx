import Image from 'next/image';
import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back-button';
import { fetchTimer } from '@/data/api/timer';
import Timer from '@/assets/timer/confirm/timer.png';
import CheckIcon from '@/assets/icon/check.svg';

interface Props {
  params: {
    id: number;
  };
}

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const timer = await fetchTimer(id);
  return (
    <div className="h-screen bg-[#F7F7F7]">
      <AppBar title="참고 있는 상품" leadings={<BackButton />} />
      <div className="flex flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-center pt-10 gap-4">
          <div className="flex flex-col items-center justify-center">
            <Image src={Timer} alt="timer" />
            <CheckIcon />
          </div>
          <div className="flex flex-col items-center justify-center gap-[10px]">
            <span className="font-bold text-2xl leading-[133%] text-center">{timer.name}</span>
            <span className="font-medium text-lg leading-[150%] text-center">
              상품에 대한 타이머가 종료됐어요
            </span>
          </div>
        </div>
        <div className="flex gap-3 px-4">
          <button className="w-full px-13 py-4 bg-[#FADBD4] rounded-[10px] text-[#E74A27]">
            절제 실패
          </button>
          <button className="w-full px-13 py-4 bg-[#CDE9FA] rounded-[10px] text-[#005BDB]">
            절제 성공
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
