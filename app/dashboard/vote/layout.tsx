"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { VoteLayoutWrapper, TabWrapper, ContentWrapper } from './styles';
import { Fab } from '@/components/fab';

export default function VoteLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    
    return (
        <>
            <VoteLayoutWrapper>
                <TabWrapper>
                    <Link className={`item${pathname.startsWith('/dashboard/vote/progress') ? ' active' : ''}`} href={"/dashboard/vote/progress"}>
                        진행중인 투표
                    </Link>
                    <Link className={`item${pathname.startsWith('/dashboard/vote/my') ? ' active' : ''}`} href={"/dashboard/vote/my"}>
                        내투표
                    </Link>
                </TabWrapper>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
            </VoteLayoutWrapper>
            <Fab bottom="100px" />
        </>
    )
}