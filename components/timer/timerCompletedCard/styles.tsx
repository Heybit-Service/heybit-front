'use client';

import styled from 'styled-components';
import { GRAY, BLACK, BLUE } from '@/constant/color';

export const Wrapper = styled.div`
  width: 100%;
  padding: 24px 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 8px 0px rgba(83, 83, 83, 0.05);
  background-color: #ffffff;
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Title = styled.div`
  font-size: 20px;
  line-height: 140%;
  font-weight: 700;
  color: ${BLACK};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.div`
  font-size: 20px;
  line-height: 150%;
  font-weight: 700;
  color: ${BLACK};
`;

export const Tag = styled.div`
  padding: 0px 7px;
  height: 24px;
  box-sizing: border-box;
  font-size: 12px;
  color: ${GRAY[300]};
  display: inline-block;
  border-radius: 100px;
  line-height: 24px;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  background-color: ${BLUE[100]};
  color: ${BLUE[200]};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  gap: 4px;
`;
