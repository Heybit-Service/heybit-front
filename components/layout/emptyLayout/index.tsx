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
        {/* Layout UI */}
        {/* Place children where you want to render a page or nested layout */}
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}

export default EmptyLayout;