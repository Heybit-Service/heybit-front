'use client';

import Image from 'next/image';
import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import Character from '@/assets/setting/character.png';
import FixedBottom from '@/components/layout/fixed-bottom';
import { useRouter } from 'next/navigation';
import { removeToken } from '@/data/auth';
import { deactivateUser } from '@/data/api/user';

const Page = () => {
  const router = useRouter();

  const onDelete = async () => {
    try {
      await deactivateUser();
      removeToken();
      router.push('/login');
    } catch (error) {
      console.error('회원탈퇴 중 오류 발생:', error);
      removeToken();
      router.push('/login');
    }
  };

  const onContinue = () => {
    router.push('/setting');
  };

  return (
    <div className="h-dvh">
      <AppBar leadings={<BackButton />} />
      <div className="flex flex-col items-center gap-25">
        <div className="flex flex-col gap-3 px-4 py-7">
          <span
            className="font-bold text-2xl leading-[133%] align-middle"
            style={{ color: '#202020' }}
          >
            계정을 삭제하시나요?
          </span>
          <span
            className="font-medium text-base leading-[140%] align-middle"
            style={{ color: '#7C7C7C' }}
          >
            회원 탈퇴를 하게 되면 진행 중이었던 타이머와 투표
            <br />
            데이터가 삭제되고 동일한 아이디로 재가입이 안돼요
          </span>
        </div>
        <Image src={Character} alt="character" width={150} />
      </div>
      <FixedBottom
        style={{
          backgroundColor: '#FFFFFF',
        }}
      >
        <div className="flex gap-3">
          <button
            className="w-full py-4 bg-[#7C7C7C] font-semibold text-lg leading-[150%] text-center text-[#FFFFFF] rounded-[10px]"
            onClick={onDelete}
          >
            탈퇴하기
          </button>
          <button
            className="w-full py-4 bg-[#0EC189] font-semibold text-lg leading-[150%] text-center text-[#FFFFFF] rounded-[10px]"
            onClick={onContinue}
          >
            계속 이용하기
          </button>
        </div>
      </FixedBottom>
    </div>
  );
};

export default Page;
