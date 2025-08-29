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
