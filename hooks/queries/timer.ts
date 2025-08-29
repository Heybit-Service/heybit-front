import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchCurrentTimers, fetchHistoryTimers, fetchTimer, deleteTimer } from '@/data/api/timer';
import { createTimer } from '@/app/timer/create/action';
import { CurrentTimer, HistoryTimer, Timer } from '@/data/type/timer';

export const timerKeys = {
  all: ['timers'] as const,
  current: () => [...timerKeys.all, 'current'] as const,
  history: () => [...timerKeys.all, 'history'] as const,
  detail: (id: number) => [...timerKeys.all, 'detail', id] as const,
};

export const useCurrentTimers = () => {
  return useQuery<CurrentTimer[]>({
    queryKey: timerKeys.current(),
    queryFn: fetchCurrentTimers,
  });
};

export const useHistoryTimers = () => {
  return useQuery<HistoryTimer[]>({
    queryKey: timerKeys.history(),
    queryFn: fetchHistoryTimers,
  });
};

export const useTimer = (id: number) => {
  return useQuery<Timer>({
    queryKey: timerKeys.detail(id),
    queryFn: () => fetchTimer(id),
    enabled: !!id,
  });
};

export const useCreateTimer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createTimer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: timerKeys.current() });
    },
  });
};

export const useDeleteTimer = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteTimer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: timerKeys.current() });
      queryClient.invalidateQueries({ queryKey: timerKeys.history() });
    },
  });
};
