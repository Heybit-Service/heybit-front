'use client';

import styled from 'styled-components';

export const ToggleContainer = styled.button<{ value: boolean }>`
  position: relative;
  width: 47px;
  height: 27px;
  border-radius: 13.5px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => (props.value ? '#4CAF50' : '#A8A8A8')};
  transition: background-color 0.2s ease-in-out;
  padding: 0;
  display: inline-flex;
  align-items: center;
`;

export const ToggleCircle = styled.div<{ value: boolean }>`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 19px;
  height: 19px;
  border-radius: 9.5px; // 원 모양
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transform: ${(props) => (props.value ? 'translateX(20px)' : 'translateX(0)')};
  transition: transform 0.2s ease-in-out;
`;
