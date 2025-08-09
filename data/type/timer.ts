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
