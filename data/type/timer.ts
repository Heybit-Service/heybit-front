export interface CurrentTimer {
  timerId: number;
  active: boolean;
  name: string;
  description: string;
  amount: number;
  endTime: string;
  withVotePost: boolean;
}

export interface HistoryTimer {
  timerId: number;
  name: string;
  success: boolean;
  amount: number;
  durationMinutes: number;
  durationMessage: string;
  endedAt: string;
}

export interface Timer {
  status: 'IN_PROGRESS' | 'WAITING' | 'SAVED' | 'PURCHASED';
  name: string;
  imageUrl: string;
  amount: number;
  description: string;
  category: string;
  startTime: string;
  endTime: string;
  withVotePost: boolean;
  buyCount: number;
  holdCount: number;
  holdPercent: number;
}
