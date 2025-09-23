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

  const onTermsOfService = () => {
    window.open('https://www.notion.so/230b5c7320fe8058b6c4e07aa2f2fcc3', '_blank');
  };

  const onPrivacyPolicy = () => {
    window.open('https://www.notion.so/230b5c7320fe8015a782e58d174f594b', '_blank');
  };

  return (
    <div className="h-dvh">
      <AppBar title="설정" leadings={<BackButton />} />
      <div className="px-4 flex flex-col items-start">
        <SettingItem label="로그아웃" onClick={onLogout} />
        <SettingItem label="회원 탈퇴" onClick={onAccountDelete} />
        <SettingItem label="서비스 이용약관" onClick={onTermsOfService} />
        <SettingItem label="개인정보 처리방침" onClick={onPrivacyPolicy} />
        <SettingItem label="문의" onClick={() => {}} />
      </div>
    </div>
  );
};

export default Page;
