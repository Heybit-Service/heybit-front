'use client';

import { useState } from 'react';
import { AppBar } from '@/components/app-bar';
import FixedBottom from '@/components/layout/fixed-bottom';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';
import { Step4 } from './step4';
import { Step5 } from './step5';
import { useRouter } from 'next/navigation';
import { ProgressBar } from './components';
import { AnimatePresence } from 'framer-motion';

const Page = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const onNext = () => {
    if (step === 5) {
      router.push('/timer/create');
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="h-dvh bg-[#F7F7F7]">
      <AppBar
        title=""
        actions={
          <>
            <button
              className="px-4 py-5 font-pretendard font-bold text-sm text-[#AAAAAA] leading-[140%] text-center"
              onClick={onNext}
            >
              건너뛰기
            </button>
          </>
        }
      />
      <ProgressBar current={step} total={5} />
      <AnimatePresence mode="wait">
        {step === 1 && <Step1 key="step1" />}
        {step === 2 && <Step2 key="step2" />}
        {step === 3 && <Step3 key="step3" />}
        {step === 4 && <Step4 key="step4" />}
        {step === 5 && <Step5 key="step5" />}
      </AnimatePresence>
      <FixedBottom>
        <div className="w-full flex justify-center gap-[14px]">
          <button
            className="w-full bg-[#202020] py-4 font-pretendard font-semibold text-xl text-[#FFFFFF] leading-[150%] text-center rounded-[10px]"
            onClick={onNext}
          >
            예
          </button>
          <button
            className="w-full bg-[#202020] py-4 font-pretendard font-semibold text-xl text-[#FFFFFF] leading-[150%] text-center rounded-[10px]"
            onClick={onNext}
          >
            아니요
          </button>
        </div>
      </FixedBottom>
    </div>
  );
};

export default Page;
