'use server';

import { API_BASE_URL, getServerToken } from '@/data/api';

interface TimerCommand {
  name: string;
  amount: number;
  description: string;
  category: string;
  startTime: Date;
  endTime: Date;
  withVotePost: boolean;
}

export const createTimer = async ({
  name,
  amount,
  description,
  category,
  startTime,
  endTime,
  withVotePost,
}: TimerCommand) => {
  const formData = new FormData();
  const data = {
    name,
    amount,
    description,
    category,
    startTime,
    endTime,
    withVotePost,
  };
  formData.append('data', JSON.stringify(data));
  const token = await getServerToken();
  const response = await fetch(`${API_BASE_URL}/api/v1/timers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });
  console.log('response: ', response);
};
