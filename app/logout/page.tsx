'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { removeToken } from '@/data/auth';

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Remove the token
    removeToken();
    
    // Redirect to home page after a short delay
    setTimeout(() => {
      router.push('/');
    }, 1000);
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">로그아웃 중...</h1>
        <p className="text-gray-600">잠시만 기다려주세요</p>
      </div>
    </div>
  );
}