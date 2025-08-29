export interface Notification {
  id: number;
  referenceId: number;
  type: 'COMPLETED' | 'SECOND_QUARTER' | 'FIRST_QUARTER' | 'THIRD_QUARTER';
  title: string;
  message: string;
  withVote: boolean;
  viewed: boolean;
}

export interface NotificationResponse {
  success: boolean;
  status: number;
  message: string;
  data: Notification[];
}
