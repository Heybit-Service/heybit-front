'use client';

import { VoteCard } from '@/components/vote/VoteCard';
import { VoteCardSkeleton } from '@/components/vote/VoteCardSkeleton';
import thumbnailImage from '@/assets/vote/thumbnail.png';
import { useEffect, useState } from 'react';
import { getUserProfile } from '@/data/api/user';
import { getVotes, castVote } from '@/data/api/vote';
import type { ProductVotePost } from '@/data/type/vote';

export default function VotePage() {
  const [nickname, setNickname] = useState<string>('');
  const [votes, setVotes] = useState<ProductVotePost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const init = async () => {
      try {
        const profile = await getUserProfile().catch(() => null);
        if (profile?.nickname) setNickname(profile.nickname);

        const list = await getVotes();
        setVotes(list ?? []);
      } catch (e) {
        console.error('Failed to initialize vote page', e);
        setError('투표 목록을 불러오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  const formatRemaining = (endTime: string | null) => {
    if (!endTime) return undefined;
    try {
      const end = new Date(endTime);
      const now = new Date();
      const ms = end.getTime() - now.getTime();
      if (ms <= 0) return undefined;
      const totalMinutes = Math.floor(ms / 60000);
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      if (hours > 0) return `${hours}시간 ${minutes}분 남음`;
      return `${minutes}분 남음`;
    } catch {
      return undefined;
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-start relative pb-6 w-full">
        <div className="flex flex-col items-start gap-1 mb-6 w-full">
          <div className="h-7 w-32 bg-heybit-variable-HB-gray100 rounded animate-pulse" />
          <div className="h-4 w-60 bg-heybit-variable-HB-gray100 rounded animate-pulse" />
        </div>
        <div className="flex flex-col gap-[14px] w-full">
          <VoteCardSkeleton />
          <VoteCardSkeleton />
          <VoteCardSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-start relative pb-6">
        <div className="text-heybit-variable-HB-gray400">{error}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-start relative pb-6">
      <div className="flex flex-col items-start gap-1 mb-6">
        <div className="text-heybit-variable-HB-balck font-pretendard text-2xl font-bold leading-[133%]">
          살까요 말까요?
        </div>
        <p className="text-heybit-variable-HB-gray400 font-pretendard text-base font-medium leading-[140%]">
          <span className="underline decoration-solid decoration-auto underline-offset-auto">
            {nickname}
          </span>
          <span> 님의 의견을 들려주세요</span>
        </p>
      </div>

      <div className="flex flex-col gap-[14px] w-full">
        {votes.length === 0 ? (
          <div className="text-heybit-variable-HB-gray400">투표할 항목이 없어요.</div>
        ) : (
          votes.map((v) => (
            <VoteCard
              key={v.votePostId}
              productImage={
                (v.imageUrl ?? thumbnailImage) as string | import('next/image').StaticImageData
              }
              productName={v.name}
              productPrice={v.amount}
              timeRemaining={formatRemaining(v.endTime)}
              userName={v.writer ?? undefined}
              userComment={v.description}
              onBuy={async () => {
                await castVote(v.votePostId, 'BUY');
              }}
              onHold={async () => {
                await castVote(v.votePostId, 'HOLD');
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
