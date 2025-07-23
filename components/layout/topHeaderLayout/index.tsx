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
    <html lang="ko">
      <body>
        <Wrapper>
            <Top>
                <ArrowBack onClick={() => router.back()} />
            </Top>
            {children}
        </Wrapper>
      </body>
    </html>
  )
}

export default TopHeaderLayout;