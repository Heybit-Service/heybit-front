import styled from 'styled-components';
import { GRAY, BLACK } from '@/constant/color';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${BLACK};
  line-height: 140%;
  margin-bottom: 16px;
  text-align: center;
`;

export const Description = styled.div`
  font-size: 16px;
  line-height: 140%;
  font-weight: 400;
  color: ${GRAY[400]};
  text-align: center;
`;  
