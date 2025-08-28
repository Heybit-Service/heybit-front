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

