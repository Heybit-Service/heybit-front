import { useQuery } from '@tanstack/react-query';
import { getUserProfile, UserProfile } from '@/data/api/user';

export const userKeys = {
  profile: () => ['users', 'profile'] as const,
};

export const useUserProfile = () => {
  return useQuery<UserProfile>({
    queryKey: userKeys.profile(),
    queryFn: getUserProfile,
  });
};
