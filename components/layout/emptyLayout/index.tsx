"use client"

import { Wrapper } from './styles';

const EmptyLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <Wrapper>{children}</Wrapper>
  )
}

export default EmptyLayout;