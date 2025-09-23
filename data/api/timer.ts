import { CurrentTimer, HistoryTimer, Timer } from '../type/timer';
import { getToken } from '../auth';

export const fetchCurrentTimers = async (): Promise<CurrentTimer[]> => {
  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch('/api/timers/current', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch current timers');
  }

  const data = await response.json();
  return data.data;
};

export const fetchHistoryTimers = async (): Promise<HistoryTimer[]> => {
  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch('/api/timers/history', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch timer history');
  }

  const data = await response.json();
  return data.data;
};

export const fetchTimer = async (id: number): Promise<Timer> => {
  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`/api/timers/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch timer');
  }

  const data = await response.json();
  return data.data;
};

export const deleteTimer = async (id: number): Promise<void> => {
  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch(`/api/timers/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete timer');
  }
};

interface TimerAbandonCommand {
  timerId: number;
  result: 'PURCHASED' | 'SAVED';
  amount: number;
}

export const abandonTimer = async ({
  timerId,
  result,
  amount,
}: TimerAbandonCommand): Promise<void> => {
  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch('/api/timer-abandon', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ timerId, result, amount }),
  });

  if (!response.ok) {
    throw new Error('Failed to abandon timer');
  }
};

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
  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch('/api/timer-results', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      timerId,
      result,
      amount,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || errorData.message || 'Failed to create timer result');
  }
};
