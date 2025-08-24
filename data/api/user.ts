import { getToken } from '../auth';

export interface UserProfile {
  id: number;
  email: string;
  nickname: string;
  role: string;
  status: string;
}

export const getUserProfile = async (): Promise<UserProfile> => {
  const token = getToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch('/api/users/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch user profile');
  }

  const data = await response.json();
  return data.data;
};

export const checkNickname = async (nickname: string): Promise<boolean> => {
  const token = getToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  // Next.js API 라우트를 통해 프록시 요청 (CORS 우회)
  const response = await fetch(`/api/users/check-nickname?nickname=${encodeURIComponent(nickname)}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to check nickname');
  }

  const data = await response.json();
  return !data.data;
};

export const updateNickname = async (nickname: string): Promise<void> => {
  const token = getToken();
  
  if (!token) {
    throw new Error('No authentication token found');
  }

  // Next.js API 라우트를 통해 프록시 요청 (CORS 우회)
  const response = await fetch(`/api/users/nickname`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ nickname }),
  });

  if (!response.ok) {
    throw new Error('Failed to update nickname');
  }

  await response.json();
};