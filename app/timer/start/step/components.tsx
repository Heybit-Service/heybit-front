'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar = ({ current, total }: ProgressBarProps) => {
  const percentage = ((current - 1) / (total - 1)) * 100;
  return (
    <div className="w-full h-[4px] bg-[#E8E8E8] rounded-full">
      <div
        className="h-full bg-[#0EC189] rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

const stepVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

interface StepMotionProps {
  children: React.ReactNode;
}

export const StepMotion = ({ children }: StepMotionProps) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-18"
      variants={stepVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: 'tween', duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};
