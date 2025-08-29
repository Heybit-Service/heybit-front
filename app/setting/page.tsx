'use client';

import { AppBar } from '@/components/app-bar';
import { BackButton } from '@/components/button/back';
import { SettingItem } from '@/components/setting/item';
import { removeToken } from '@/data/auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  const onLogout = () => {
    removeToken();
    router.push('/login');
  };

  const onAccountDelete = () => {
    router.push('/setting/account-delete');
  };

  return (
    <div className="h-dvh">
      <AppBar title="설정" leadings={<BackButton />} />
      <div className="px-4 flex flex-col items-start">
        <SettingItem label="로그아웃" onClick={onLogout} />
        <SettingItem label="회원 탈퇴" onClick={onAccountDelete} />
        <SettingItem label="서비스 이용약관" onClick={() => {}} />
        <SettingItem label="개인정보 처리방침" onClick={() => {}} />
        <SettingItem label="문의" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Page;
