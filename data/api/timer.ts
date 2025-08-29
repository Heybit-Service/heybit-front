import { API_BASE_URL, getServerToken } from '../api';
import { CurrentTimer, HistoryTimer, Timer } from '../type/timer';

export const fetchCurrentTimers = async (): Promise<CurrentTimer[]> => {
  const token = await getServerToken();
  const response = await fetch(`${API_BASE_URL}/api/v1/timer/current`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
};

export const fetchHistoryTimers = async (): Promise<HistoryTimer[]> => {
  const token = await getServerToken();
  const response = await fetch(`${API_BASE_URL}/api/v1/timer/history`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
};

export const fetchTimer = async (id: number): Promise<Timer> => {
  const token = await getServerToken();
  const response = await fetch(`${API_BASE_URL}/api/v1/timer/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data.data;
};

export const deleteTimer = async (id: number): Promise<void> => {
  const token = await getServerToken();
  await fetch(`${API_BASE_URL}/api/v1/timers/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
};
