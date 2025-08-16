import React, { ChangeEvent } from 'react';
import styled from 'styled-components';
import { BLACK, GRAY, WHITE, RED, MAIN_GREEN } from '@/constant/color';

interface RegisterNicknameTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  onCheck?: () => void;
  status?: 'default' | 'active' | 'success' | 'error';
  errorMessage?: string;
  successMessage?: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 60px;
`;

const InputContainer = styled.div<{ $status: string }>`
  display: flex;
  align-items: center;
  height: 60px;
  flex: 1;
  padding-left: 16px;
  padding-right: 0;
  border: 1px solid ${props => 
    props.$status === 'active' ? BLACK :
    props.$status === 'error' ? RED[200] :
    props.$status === 'success' ? MAIN_GREEN :
    GRAY[300]
  };
  border-radius: 10px 0 0 10px;
  background-color: ${GRAY[100]};
  border-right: none;
  position: relative;
`;

const Input = styled.input<{ $status: string }>`
  width: 100%;
  border: none;
  background: transparent;
  outline: none;
  
  font-family: Pretendard;
  font-size: ${props => props.$status === 'active' || props.$status === 'success' || props.$status === 'error' ? '16px' : '14px'};
  font-style: normal;
  font-weight: 400;
  line-height: ${props => props.$status === 'active' || props.$status === 'success' || props.$status === 'error' ? '140%' : '150%'};
  color: ${props => props.$status === 'default' ? GRAY[300] : BLACK};
  
  &::placeholder {
    color: ${GRAY[300]};
  }
`;

const CheckButton = styled.button<{ $status: string }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 93px;
  min-width: 93px;
  border: none;
  border-radius: 0 10px 10px 0;
  background-color: ${props => 
    props.$status === 'error' ? RED[200] :
    props.$status === 'success' ? MAIN_GREEN :
    props.$status === 'active' ? BLACK :
    GRAY[300]
  };
  cursor: ${props => ['active', 'error'].includes(props.$status) ? 'pointer' : 'default'};
  
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: ${WHITE};
`;

const MessageText = styled.div<{ $type: 'success' | 'error' }>`
  padding: 0 14px;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  color: ${props => props.$type === 'success' ? MAIN_GREEN : RED[200]};
`;

export const RegisterNicknameTextField: React.FC<RegisterNicknameTextFieldProps> = ({
  value,
  onChange,
  onCheck,
  status = 'default',
  errorMessage = '이미 사용하고 있는 닉네임 입니다',
  successMessage = '사용가능한 닉네임 입니다'
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  const showMessage = ['success', 'error'].includes(status);

  return (
    <Container>
      <InputWrapper>
        <InputContainer $status={status}>
          <Input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder={status === 'default' ? '한글, 영문 (2~10자)' : ''}
            $status={status}
          />
        </InputContainer>
        <CheckButton 
          $status={status}
          onClick={onCheck}
          disabled={status === 'default' || status === 'success'}
        >
          중복 확인
        </CheckButton>
      </InputWrapper>
      {showMessage && (
        <MessageText $type={status as 'success' | 'error'}>
          {status === 'success' ? successMessage : errorMessage}
        </MessageText>
      )}
    </Container>
  );
};