export type VoteResult = 'BUY' | 'HOLD';

export interface ProductVotePost {
  votePostId: number;
  name: string;
  imageUrl: string | null;
  amount: number;
  description: string;
  writer: string | null;
  endTime: string | null;
}

export type VoteStatus = 'IN_PROGRESS' | 'WAITING' | 'SAVED' | 'PURCHASED';

export interface MyVotedPost {
  votePostId: number;
  name: string;
  amount: number;
  myVote: 'BUY' | 'HOLD';
  status: VoteStatus;
  holdCount: number;
  buyCount: number;
  votedAt: string; // YYYY-MM-DD
}
