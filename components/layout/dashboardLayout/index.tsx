'use client';

import { Wrapper, Top, Bottom } from './styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconTimer from '@/assets/menu/icon_timer.svg';
import IconVote from '@/assets/menu/icon_vote.svg';
import IconReport from '@/assets/menu/icon_report.svg';
import IconBell from '@/assets/menu/icon_bell.svg';
import IconSetting from '@/assets/icon/setting.svg';
import { Logo } from '@/assets/logo';

const EmptyLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  return (
    <>
      <Wrapper>
        <Top>
          <Logo />
          <div className="flex items-center gap-3">
            <Link href="/alarm-center">
              <IconBell />
            </Link>
            <Link href="/setting">
              <IconSetting />
            </Link>
          </div>
        </Top>
        {children}
        <Bottom>
          <Link
            className={`item${pathname.startsWith('/dashboard/timer') ? ' active' : ''}`}
            href={'/dashboard/timer/progress'}
          >
            <IconTimer />
            타이머
          </Link>
          <Link
            className={`item${pathname.startsWith('/dashboard/vote') ? ' active' : ''}`}
            href={'/dashboard/vote/progress'}
          >
            <IconVote />
            살말투표
          </Link>
          <Link
            className={`item${pathname === '/dashboard/report' ? ' active' : ''}`}
            href={'/dashboard/report'}
          >
            <IconReport />
            리포트
          </Link>
        </Bottom>
      </Wrapper>
    </>
  );
};

export default EmptyLayout;
