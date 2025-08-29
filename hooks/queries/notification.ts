import { useQuery } from '@tanstack/react-query';
import { fetchNotifications } from '@/data/api/notification';
import { Notification } from '@/data/type/notification';

export const notificationKeys = {
  all: ['notifications'] as const,
  list: () => [...notificationKeys.all, 'list'] as const,
};

export const useNotifications = () => {
  return useQuery<Notification[]>({
    queryKey: notificationKeys.list(),
    queryFn: fetchNotifications,
  });
};
