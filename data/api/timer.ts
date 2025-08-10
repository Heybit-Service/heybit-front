import { API_BASE_URL, getServerToken } from '../api';
import { CurrentTimer, HistoryTimer, Timer } from '../type/timer';

const USE_MOCK_DATA = true;

const mockCurrentTimers: CurrentTimer[] = [
  {
    timerId: 1,
    active: true,
    name: '비트코인 30분 도전',
    description: '30분 동안 비트코인 가격 상승 예측',
    amount: 10000,
    endTime: '2024-01-20T15:30:00Z',
    withVotePost: true,
  },
  {
    timerId: 2,
    active: false,
    name: '이더리움 1시간 도전',
    description: '1시간 동안 이더리움 가격 하락 예측',
    amount: 25000,
    endTime: '2024-01-20T16:00:00Z',
    withVotePost: false,
  },
];

const mockHistoryTimers: HistoryTimer[] = [
  {
    timerId: 1,
    name: '비트코인 15분 도전',
    success: true,
    amount: 5000,
    durationMinutes: 15,
    durationMessage: '15분 완료',
    endedAt: '2024-01-19T14:30:00Z',
  },
  {
    timerId: 2,
    name: '도지코인 30분 도전',
    success: false,
    amount: 8000,
    durationMinutes: 30,
    durationMessage: '30분 실패',
    endedAt: '2024-01-19T13:00:00Z',
  },
];

const mockTimer: Timer = {
  status: 'SAVED',
  name: '비트코인 30분 도전',
  imageUrl: 'https://images.unpa.me/1685621',
  amount: 10000,
  description: '30분 동안 비트코인 가격 상승을 예측하는 타이머입니다.',
  category: '암호화폐',
  startTime: '2024-01-20T15:00:00Z',
  endTime: '2024-01-20T15:30:00Z',
  withVotePost: true,
  buyCount: 150,
  holdCount: 80,
  holdPercent: 53.3,
};

export const fetchCurrentTimers = async (): Promise<CurrentTimer[]> => {
  if (USE_MOCK_DATA) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockCurrentTimers;
  }

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
  if (USE_MOCK_DATA) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockHistoryTimers;
  }

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
  if (USE_MOCK_DATA) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return mockTimer;
  }

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
