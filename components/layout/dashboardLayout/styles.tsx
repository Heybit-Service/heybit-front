"use client"

import styled from 'styled-components';
import { GRAY, BLACK } from '@/constant/color';

export const Wrapper = styled.div`
  background-color: ${GRAY[100]};
  width: 100vw;
  height: 100dvh;
  padding: calc(56px + 60px) 16px 84px 16px;
  position: relative;
  overflow: auto;
`;

export const Top = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 16px;
  background-color: #ffffff;
  justify-content: flex-end;
`;

export const Bottom = styled.div`
  width: 100%;
  height: 84px;
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  flex-direction: row;

  .item {
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 12px;
    line-height: 150%;
    color: ${GRAY[300]};

    :deep svg {
        fill: ${GRAY[300]};
    }
  }

  .active {
    color: ${BLACK};

    :deep svg {
        fill: ${BLACK};
    }
  }
`;