import styled from 'styled-components';
import { GRAY, BLACK } from '@/constant/color';

export const Wrapper = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${GRAY[400]};
  line-height: 133%;
  margin-bottom: 48px;
`;

export const KaKaoButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: #f6e24b;
  color: ${BLACK};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
  gap: 7px;
  cursor: pointer;
`;

export const GoogleButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${BLACK};
  color: #ffffff;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  gap: 7px;
  margin-bottom: 36px;
  cursor: pointer;
`;

export const Footer = styled.div`
  font-size: 14px;
  line-height: 150%;
  font-weight: 400;
  color: ${GRAY[300]};
  text-align: center;
`;
