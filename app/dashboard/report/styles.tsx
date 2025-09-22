import styled from 'styled-components';

export const FixedHeader = styled.div`
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  position: fixed;
  top: 56px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 50;

  @media (min-width: 768px) {
    max-width: 430px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
