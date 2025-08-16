"use client"

import { Wrapper, Top } from './styles';
import { useRouter } from 'next/navigation';
import ArrowBack from '@/assets/layout/arrow_back.svg';

const TopHeaderLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
    const router = useRouter(); 

  return (
    <Wrapper>
        <Top>
            <ArrowBack onClick={() => router.back()} style={{ cursor: 'pointer' }} />
        </Top>
        {children}
    </Wrapper>
  )
}

export default TopHeaderLayout;