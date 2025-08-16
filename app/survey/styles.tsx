import styled from 'styled-components';
import { GRAY, BLACK } from '@/constant/color';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding: 28px 0 24px 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;  

export const Title = styled.h1`
  overflow: hidden;
  color: ${BLACK};
  text-overflow: ellipsis;

  /* H2_Bold */
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 133%; /* 31.92px */
  margin: 0;
`;

export const Description = styled.h1`
  overflow: hidden;
  color: ${GRAY[400]};
  text-overflow: ellipsis;

  /* H6_Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  margin: 0;
`;