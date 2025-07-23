"use client"

import { Wrapper, Top, Bottom } from './styles';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import Logo from '@/assets/logo.svg';
import IconTimer from '@/assets/menu/icon_timer.svg';
import IconVote from '@/assets/menu/icon_vote.svg';
import IconReport from '@/assets/menu/icon_report.svg';
import IconBell from '@/assets/menu/icon_bell.svg';

const EmptyLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
    const pathname = usePathname();

  return (
    <html lang="ko">
      <body>
        <Wrapper>
            <Top>
                <IconBell />
            </Top>
                {children}
            <Bottom>
                <Link className={`item${pathname === '/dashboard/timer' ? ' active' : ''}`} href={"/dashboard/timer"}>
                    <IconTimer />
                    타이머
                </Link>
                <Link className={`item${pathname === '/dashboard/vote' ? ' active' : ''}`} href={"/dashboard/vote"}>
                    <IconVote />
                    살말투표
                </Link>
                <Link className={`item${pathname === '/dashboard/report' ? ' active' : ''}`} href={"/dashboard/report"}>
                    <IconReport />
                    리포트
                </Link>
            </Bottom>
        </Wrapper>
      </body>
    </html>
  )
}

export default EmptyLayout;