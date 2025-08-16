"use client"

import styled from 'styled-components';
import { GRAY, BLACK } from '@/constant/color';

export const Wrapper = styled.div`
  background-color: ${GRAY[100]};
  width: 100%;
  height: 100dvh;
  padding: 60px 16px 0 16px;
  position: relative;
`;

export const Top = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
    //   justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  padding: 0 16px;
  background-color: #ffffff;
`;