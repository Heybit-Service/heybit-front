import styled from 'styled-components';
import { GRAY, BLACK } from '@/constant/color';

export const Wrapper = styled.div`
  background-color: ${GRAY[100]};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 16px;
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
    background-color: #F6E24B;
    color: ${BLACK};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    gap: 7px;
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
`;

export const Footer = styled.div`
    font-size: 14px;
    line-height: 150%;
    font-weight: 400;
    color: ${GRAY[300]};
    text-align: center;
`;

