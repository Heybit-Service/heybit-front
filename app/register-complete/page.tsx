'use client';

import { useRouter } from 'next/navigation';
import { Wrapper, Title, Description } from './styles';
import Character from '@/assets/register-complete/character.svg';
import FullButton from '@/components/button/fullButton';

export default function RegisterPage() {
  const router = useRouter();

  const handleStart = () => {
    router.push('/dashboard/timer/progress');
  };

  return (
    <Wrapper>
      <Character style={{ marginTop: '110px', marginBottom: '31px' }} />
      <Title style={{ marginBottom: '16px' }}>
        무의식적인 소비, <br />한 번 돌아보셨나요?
      </Title>
      <Description>
        헤이빗과 함께 충동적인 소비를 멈추고
        <br />
        경험을 나누며 건강한 소비 습관을 만들어요
      </Description>

      <FullButton
        style={{
          marginTop: '10px',
          position: 'absolute',
          bottom: '56px',
          left: '16px',
          width: 'calc(100% - 32px)',
        }}
        onClick={handleStart}
      >
        소비관리 시작
      </FullButton>
    </Wrapper>
  );
}
