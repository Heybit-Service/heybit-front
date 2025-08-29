'use server';

import { API_BASE_URL, getServerToken } from '@/data/api';

interface TimerResultCommand {
  timerId: number;
  result: 'PURCHASED' | 'SAVED';
  amount: number;
}

export const createTimerResult = async ({
  timerId,
  result,
  amount,
}: TimerResultCommand): Promise<void> => {
  const token = await getServerToken();
  await fetch(`${API_BASE_URL}/api/v1/timer-results`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      timerId,
      result,
      amount,
    }),
  });
};
