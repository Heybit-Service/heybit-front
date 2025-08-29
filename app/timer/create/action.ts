import { getToken } from '@/data/auth';

interface TimerCommand {
  name: string;
  amount: number;
  description: string;
  category: string;
  startTime: Date;
  endTime: Date;
  withVotePost: boolean;
  image: File;
}

export const createTimer = async ({
  name,
  amount,
  description,
  category,
  startTime,
  endTime,
  withVotePost,
  image,
}: TimerCommand): Promise<void> => {
  const formData = new FormData();
  const data = {
    name,
    amount,
    description,
    category,
    startTime,
    endTime,
    withVotePost,
  };
  formData.append('data', JSON.stringify(data));
  if (image) {
    formData.append('img', image);
  }

  const token = getToken();

  if (!token) {
    throw new Error('No authentication token found');
  }

  const response = await fetch('/api/timers', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to create timer');
  }
};
