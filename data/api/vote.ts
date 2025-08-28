import { getToken } from '../auth';
import { ProductVotePost, VoteResult } from '../type/vote';

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
