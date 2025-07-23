"use client";

import { FC, PropsWithChildren } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { TabWrapper } from './styles';

const VoteLayout: FC<PropsWithChildren> = ({ children }) => {
    const pathname = usePathname();
    
    return (
        <> 
            <TabWrapper>
                <Link className={`item${pathname.startsWith('/dashboard/vote/progress') ? ' active' : ''}`} href={"/dashboard/vote/progress"}>
                    진행중인 투표
                </Link>
                <Link className={`item${pathname.startsWith('/dashboard/vote/my') ? ' active' : ''}`} href={"/dashboard/vote/my"}>
                    내투표
                </Link>
            </TabWrapper>  
            {children}
        </>
    )
}

export default VoteLayout;