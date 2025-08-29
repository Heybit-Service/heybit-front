import { getToken } from '../auth';
import { ProductVotePost, VoteResult, MyVotedPost, MyVotesApiResponse } from '../type/vote';

export const getVotes = async (): Promise<ProductVotePost[]> => {
  const token = getToken();
  if (!token) throw new Error('No authentication token found');

  const res = await fetch('/api/votes', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Failed to load votes');
  }

  const json = await res.json();
  return json.data as ProductVotePost[];
};

export const castVote = async (votePostId: number, result: VoteResult): Promise<void> => {
  const token = getToken();
  if (!token) throw new Error('No authentication token found');

  const res = await fetch(`/api/votes/${votePostId}/vote?result=${encodeURIComponent(result)}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Failed to cast vote');
  }
};

export const cancelVote = async (votePostId: number): Promise<void> => {
  const token = getToken();
  if (!token) throw new Error('No authentication token found');

  const res = await fetch(`/api/votes/${votePostId}/vote`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Failed to cancel vote');
  }
};

export const getMyVotes = async (): Promise<MyVotedPost[]> => {
  const token = getToken();
  if (!token) throw new Error('No authentication token found');

  const res = await fetch('/api/votes/me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Failed to load my votes');
  }

  const json = await res.json();
  const apiData = (json.data as MyVotesApiResponse[]) ?? [];
  
  return apiData.map((item, index) => ({
    votePostId: index + 1,
    name: item.name,
    amount: item.amount,
    myVote: 'HOLD' as const,
    status: item.inProgress ? 'IN_PROGRESS' : 'WAITING' as const,
    holdCount: item.voteStats.holdCount,
    buyCount: item.voteStats.buyCount,
    votedAt: new Date(item.endTime).toISOString().split('T')[0],
  }));
};

export const getParticipatedVotes = async (): Promise<MyVotedPost[]> => {
  const token = getToken();
  if (!token) throw new Error('No authentication token found');

  const res = await fetch('/api/votes/my-votes', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(text || 'Failed to load participated votes');
  }

  const json = await res.json();
  return (json.data as MyVotedPost[]) ?? [];
};
