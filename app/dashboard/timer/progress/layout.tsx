'use client';

import { useEffect } from 'react';
import { extractTokenFromUrl } from '@/data/auth';

export default function TimerProgressLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    extractTokenFromUrl();
  }, []);

  return <>{children}</>;
}