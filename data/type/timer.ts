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

export interface Duration {
  days: number;
  hours: number;
  minutes: number;
}

export const getDuration = (startTime: string, endTime: string) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diffMs = end.getTime() - start.getTime();
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;
  return { days, hours, minutes };
};
