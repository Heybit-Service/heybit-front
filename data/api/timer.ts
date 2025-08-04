import { getServerToken, API_BASE_URL } from '../api';
import { CurrentTimer, HistoryTimer } from '../type/timer';

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
