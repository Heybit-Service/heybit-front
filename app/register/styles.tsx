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
  padding: 63px 0 24px 0;
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 133%;
  font-weight: 700;
  color: ${BLACK};
  margin-bottom: 6px;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 140%;
  font-weight: 700;
  color: ${GRAY[400]};
  margin-bottom: 6px;
`;