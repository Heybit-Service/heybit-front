import { getToken } from './auth';

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  'http://heybit-backend-env.eba-ep9gaxub.ap-northeast-2.elasticbeanstalk.com';

export const getServerToken = async () => {
  // 클라이언트 사이드에서 실행 중인지 확인
  if (typeof window !== 'undefined') {
    const token = getToken();
    if (token) {
      return token;
    }
  }
  
  // 토큰이 없을 때 폴백
  return 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzU0NzkzNTAxLCJleHAiOjE3NTQ3OTcxMDF9.f8ycMs4jZWW55YEX4HFNTrHWOSqFur9JcC3TYoPI0OA';
};
