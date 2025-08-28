'use client';

import Image, { StaticImageData } from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { VoteToggle } from '@/components/vote/VoteToggle';
import { StatusDropdown } from '@/components/common/StatusDropdown';
import { VotingBar } from '@/components/timer/information/voting-bar';
import { VotingBubble } from '@/components/timer/information/voting-bubble';
import Thumbnail from '@/assets/vote/thumbnail.png';
import Character from '@/assets/vote/character.svg';
import { getUserProfile } from '@/data/api/user';
import { VoteCardSkeleton } from '@/components/vote/VoteCardSkeleton';

type Filter = 'all' | 'ongoing' | 'completed';

interface MyRegisteredVote {
  id: number;
  name: string;
  amount: number;
  image: string | StaticImageData;
  endTime: string;
  buyCount: number;
  holdCount: number;
}

function formatRemainingUntil(endISO: string): string | undefined {
  try {
    const end = new Date(endISO).getTime();
    const now = Date.now();
    const diffMs = end - now;
    if (diffMs <= 0) return undefined;
    const totalMinutes = Math.floor(diffMs / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;
    if (days > 0) return `종료까지 ${days}일 ${hours}시 ${minutes}분`;
    if (hours > 0) return `종료까지 ${hours}시 ${minutes}분`;
    return `종료까지 ${minutes}분`;
  } catch {
    return undefined;
  }
}

function formatYmd(endISO: string): string {
  const d = new Date(endISO);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}년 ${m}월 ${day}일 종료`;
}

function MyVoteCard({ vote }: { vote: MyRegisteredVote }) {
  const remaining = formatRemainingUntil(vote.endTime);
  return (
    <div className="bg-white rounded-[10px] shadow-[var(--HB-shadow-card)] w-full overflow-hidden">
      <div className="p-4">
        <div className="flex items-center gap-5">
          <Image
            src={vote.image}
            alt={vote.name}
            width={100}
            height={100}
            className="rounded-[10px] object-cover aspect-square"
          />
          <div className="flex flex-col gap-3 flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              {remaining && (
                <div className="inline-flex items-center justify-center h-[26px] px-2.5 rounded-full bg-heybit-variable-HB-balck">
                  <span className="text-heybit-variable-HB-white text-xs font-bold leading-[150%]">
                    투표 중
                  </span>
                </div>
              )}
              {!remaining && (
                <div className="inline-flex items-center justify-center h-[26px] px-2.5 rounded-full bg-heybit-variable-HB-gray300">
                  <span className="text-heybit-variable-HB-white text-xs font-bold leading-[150%]">
                    투표 종료
                  </span>
                </div>
              )}
              {!remaining && (
                <div className="inline-flex items-center gap-1">
                  <span className="text-[12px] leading-[18px] text-heybit-variable-HB-balck">
                    {formatYmd(vote.endTime)}
                  </span>
                </div>
              )}
              {remaining && (
                <div className="inline-flex items-center gap-1">
                  <span className="text-[12px] leading-[18px] text-heybit-variable-HB-balck">
                    {remaining}
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <div className="text-heybit-variable-HB-balck text-[18px] leading-[27px] font-bold truncate">
                {vote.name}
              </div>
              <div className="text-heybit-variable-HB-balck text-[18px] leading-[27px] font-medium">
                {vote.amount.toLocaleString()}원
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-col gap-2">
            <VotingBubble
              buyCount={vote.buyCount}
              stopCount={vote.holdCount}
              completed={!remaining}
            />
            <VotingBar buyCount={vote.buyCount} stopCount={vote.holdCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VotePage() {
  const [voteType, setVoteType] = useState<'registered' | 'participated'>('registered');
  const [nickname, setNickname] = useState<string>('');
  const [filter, setFilter] = useState<Filter>('all');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        if (profile?.nickname) setNickname(profile.nickname);
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const registeredVotes = useMemo<MyRegisteredVote[]>(
    () => [
      {
        id: 1,
        name: '헤어 리프팅 샴푸',
        amount: 37000,
        image: Thumbnail,
        endTime: new Date(Date.now() + 36 * 60 * 60 * 1000).toISOString(),
        buyCount: 32,
        holdCount: 138,
      },
      {
        id: 2,
        name: '무선 블루투스 이어폰',
        amount: 119000,
        image: Thumbnail,
        endTime: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        buyCount: 85,
        holdCount: 15,
      },
      {
        id: 3,
        name: '무선 청소기 필터',
        amount: 15000,
        image: Thumbnail,
        endTime: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        buyCount: 10,
        holdCount: 40,
      },
    ],
    [],
  );

  const filteredVotes = useMemo(() => {
    if (filter === 'all') return registeredVotes;
    const now = Date.now();
    return registeredVotes.filter((v) => {
      const end = new Date(v.endTime).getTime();
      const ongoing = end > now;
      return filter === 'ongoing' ? ongoing : !ongoing;
    });
  }, [filter, registeredVotes]);

  const handleStatusChange = (value: string) => {
    if (value.includes('완료')) setFilter('completed');
    else if (value.includes('중')) setFilter('ongoing');
    else setFilter('all');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="w-full">
        <div className="flex justify-center">
          <VoteToggle defaultValue="registered" onToggle={setVoteType} />
        </div>
        {voteType === 'registered' && (
          <div className="flex justify-end mt-4 mb-1">
            <StatusDropdown onChange={handleStatusChange} />
          </div>
        )}
      </div>

      {voteType === 'registered' ? (
        <div className="mt-0 flex flex-col gap-[14px]">
          {loading ? (
            <>
              <VoteCardSkeleton />
              <VoteCardSkeleton />
              <VoteCardSkeleton />
            </>
          ) : (
            filteredVotes.map((v) => <MyVoteCard key={v.id} vote={v} />)
          )}
          {filteredVotes.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Character width={120} height={134} className="mb-5" />
              <div className="flex flex-col items-center gap-1">
                <p className="text-[18px] font-bold leading-[27px] text-[#202020]">
                  아직 등록한 투표가 없어요!
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-[#7C7C7C]">
                  타이머를 시작하고 투표를 등록해보세요
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center mt-10">
          <Character width={120} height={134} className="mb-5" />
          <div className="flex flex-col items-center gap-1">
            <p className="text-[18px] font-bold leading-[27px] text-[#202020] text-center">
              아직 참여한 투표가 없어요!
            </p>
            <p className="text-[16px] font-medium leading-[150%] text-[#7C7C7C] text-center">
              <span>진행중인 투표를 보고</span>
              <br />
              <span className="underline">{nickname}</span>
              <span> 님의 생각을 전달해봐요</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
