import styled from 'styled-components';
import { BLACK, GRAY } from '@/constant/color';

export const Button = styled.button`
  width: 100%;
  height: 60px;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%;
  border-radius: 10px;
  background-color: ${props => props.disabled ? GRAY[200] : BLACK};
  color: ${props => props.disabled ? GRAY[500] : '#ffffff'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border: none;
`;
