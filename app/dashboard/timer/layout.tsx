'use client';

import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TabWrapper } from './styles';
import { Fab } from '../../../components/fab';

const TimerLayout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  return (
    <>
      <TabWrapper>
        <Link
          className={`item${pathname.startsWith('/dashboard/timer/progress') ? ' active' : ''}`}
          href={'/dashboard/timer/progress'}
        >
          진행중인 타이머
        </Link>
        <Link
          className={`item${pathname.startsWith('/dashboard/timer/completed') ? ' active' : ''}`}
          href={'/dashboard/timer/completed'}
        >
          완료된 타이머
        </Link>
      </TabWrapper>
      {children}
      <Fab />
    </>
  );
};

export default TimerLayout;
