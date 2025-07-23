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
  font-size: 24px;
  font-weight: 700;
  line-height: 133%;
  color: ${BLACK};
  margin: 0;
`;

export const Description = styled.h1`
  font-size: 16px;
  line-height: 140%;
  color: ${GRAY[400]};
  margin-bottom: 16px;
`;