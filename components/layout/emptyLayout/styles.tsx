"use client"

import styled from 'styled-components';
import { GRAY } from '@/constant/color';

export const Wrapper = styled.div`
  background-color: ${GRAY[100]};
  width: 100%;
  height: 100vh;
  @supports (height: 100dvh) {
    height: 100dvh;
  }
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;