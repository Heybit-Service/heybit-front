import styled from 'styled-components';
import { GRAY, MAIN_GREEN } from '@/constant/color';

export const Wrapper = styled.div<{ selected?: boolean }>`
  width: 100%;
  height: 64px;
  border-radius: 10px;
  border: ${(props) => (props.selected ? `2px solid ${MAIN_GREEN}` : `1px solid ${GRAY[200]}`)};
  background-color: #ffffff;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
  cursor: pointer;

  /* Typography */
  color: ${(props) => (props.selected ? MAIN_GREEN : GRAY[400])};
  text-align: left;

  /* H6_Medium */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.selected ? 600 : 500)};
  line-height: 140%; /* 22.4px */
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${MAIN_GREEN};
`;
