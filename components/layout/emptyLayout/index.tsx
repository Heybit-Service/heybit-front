"use client"

import { Wrapper } from './styles';

const EmptyLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="ko">
      <body>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}

export default EmptyLayout;