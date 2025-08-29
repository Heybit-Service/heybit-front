export interface CurrentTimer {
  timerId: number;
  status: 'IN_PROGRESS' | 'WAITING';
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
  if (startTime >= endTime) {
    return { days: 0, hours: 0, minutes: 0 };
  }
  const start = new Date(startTime);
  const end = new Date(endTime);
  const diffMs = end.getTime() - start.getTime();
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (24 * 60));
  const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
  const minutes = totalMinutes % 60;
  return { days, hours, minutes };
};

export const getProgress = (startTime: string, endTime: string) => {
  const start = new Date(startTime);
  const end = new Date(endTime);
  const now = new Date();
  const totalDuration = end.getTime() - start.getTime();
  const elapsed = now.getTime() - start.getTime();
  const progress = Math.min(Math.max(100 - (elapsed / totalDuration) * 100, 0), 100);
  return Math.round(progress);
};
