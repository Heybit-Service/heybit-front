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
import { getMyVotes, getParticipatedVotes } from '@/data/api/vote';
import type { MyVotedPost } from '@/data/type/vote';

type Filter = 'all' | 'ongoing' | 'completed';

interface MyRegisteredVote {
  id: number;
  name: string;
  amount: number;
  image: string | StaticImageData;
  endTime?: string | null;
  buyCount: number;
  holdCount: number;
  status: 'IN_PROGRESS' | 'WAITING' | 'SAVED' | 'PURCHASED';
  myVote: 'BUY' | 'HOLD';
  votedAt: string; // YYYY-MM-DD
}

type ParticipatedStatus = 'SUCCESS' | 'FAIL' | 'UNREGISTERED' | 'IN_PROGRESS';
interface ParticipatedVote {
  id: number;
  title: string;
  price: number; // KRW
  image: string | StaticImageData;
  date: string; // YYYY-MM-DD
  buyCount: number;
  stopCount: number;
  status: ParticipatedStatus;
  myVote: 'BUY' | 'HOLD';
}

function formatRemainingUntil(endISO?: string | null): string | undefined {
  if (!endISO) return undefined;
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

function formatYmd(iso: string): string {
  const d = new Date(iso);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}년 ${m}월 ${day}일 종료`;
}

function MyVoteCard({ vote }: { vote: MyRegisteredVote }) {
  const remaining = formatRemainingUntil(vote.endTime);
  const isInProgress = vote.status === 'IN_PROGRESS';
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
              {isInProgress ? (
                <div className="inline-flex items-center justify-center h-[26px] px-2.5 rounded-full bg-heybit-variable-HB-balck">
                  <span className="text-heybit-variable-HB-white text-xs font-bold leading-[150%]">
                    투표 중
                  </span>
                </div>
              ) : (
                <div className="inline-flex items-center justify-center h-[26px] px-2.5 rounded-full bg-heybit-variable-HB-gray300">
                  <span className="text-heybit-variable-HB-white text-xs font-bold leading-[150%]">
                    투표 종료
                  </span>
                </div>
              )}
              {isInProgress && remaining && (
                <div className="inline-flex items-center gap-1">
                  <span className="text-[12px] leading-[18px] text-heybit-variable-HB-balck">
                    {remaining}
                  </span>
                </div>
              )}
              {!isInProgress && (
                <div className="inline-flex items-center gap-1">
                  <span className="text-[12px] leading-[18px] text-heybit-variable-HB-balck">
                    {formatYmd(vote.votedAt)}
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
              completed={!isInProgress}
            />
            <VotingBar buyCount={vote.buyCount} stopCount={vote.holdCount} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusChip({ status }: { status: ParticipatedStatus }) {
  const style =
    status === 'SUCCESS'
      ? {
          bg: 'bg-heybit-variable-HB-blue02',
          text: 'text-heybit-variable-HB-blue01',
          label: '절제 성공',
        }
      : status === 'FAIL'
      ? {
          bg: 'bg-heybit-variable-HB-red04',
          text: 'text-heybit-variable-HB-red02',
          label: '절제 실패',
        }
      : status === 'UNREGISTERED'
      ? {
          bg: 'bg-heybit-variable-HB-gray200',
          text: 'text-heybit-variable-HB-gray500',
          label: '결과 미등록',
        }
      : {
          bg: 'bg-heybit-variable-HB-balck',
          text: 'text-heybit-variable-HB-white',
          label: '투표 중',
        };
  return (
    <div className={`inline-flex items-center h-[26px] px-2.5 rounded ${style.bg}`}>
      <span className={`${style.text} text-[12px] leading-[18px] font-bold whitespace-nowrap`}>
        {style.label}
      </span>
    </div>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="7" fill="currentColor" />
      <path
        d="M3.5 7.5L6 9.8L10.5 4.8"
        stroke="#FFFFFF"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ParticipatedCard({ v, className }: { v: ParticipatedVote; className?: string }) {
  const winner = v.buyCount > v.stopCount ? 'buy' : v.stopCount > v.buyCount ? 'stop' : 'tie';
  const formattedDate = new Date(v.date);
  const dateLabel = `${formattedDate.getFullYear()}년 ${
    formattedDate.getMonth() + 1
  }월 ${formattedDate.getDate()}일`;
  return (
    <div className={`bg-white rounded-[10px] w-full overflow-hidden ${className ?? ''}`}>
      <div className="p-[14px_12px] flex flex-col gap-[10px]">
        <div className="flex items-start justify-between">
          <StatusChip status={v.status} />
          <div className="flex flex-col gap-1 items-end w-[120px]">
            <div className="flex items-center gap-1 text-right">
              {winner === 'stop' && <CheckIcon className="text-heybit-variable-HB-green-main" />}
              <span className="text-heybit-variable-HB-green-main text-[12px] font-semibold leading-[18px] whitespace-nowrap">
                멈춰요 {v.stopCount.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center gap-1 text-right">
              {winner === 'buy' && <CheckIcon className="text-heybit-variable-HB-gray400" />}
              <span className="text-heybit-variable-HB-gray400 text-[12px] font-semibold leading-[18px] whitespace-nowrap">
                구매해요 {v.buyCount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-col h-[54px] w-[234px]">
            <div className="text-[#202020] font-bold text-[18px] leading-[27px] truncate">
              {v.title}
            </div>
            <div className="text-[#202020] font-medium text-[18px] leading-[27px] whitespace-nowrap">
              {v.price.toLocaleString()}원
            </div>
          </div>
          <div className="text-heybit-variable-HB-gray300 text-[10px] font-medium leading-[15px] whitespace-nowrap">
            {dateLabel}
          </div>
        </div>
      </div>
    </div>
  );
}

function ParticipatedCardSkeleton() {
  return (
    <div className="bg-white rounded-[10px] w-full overflow-hidden animate-pulse">
      <div className="p-[14px_12px] flex flex-col gap-[10px]">
        <div className="flex items-start justify-between">
          <div className="h-[26px] w-[80px] rounded bg-heybit-variable-HB-gray100" />
          <div className="flex flex-col gap-1 items-end w-[120px]">
            <div className="h-4 w-[100px] bg-heybit-variable-HB-gray100 rounded" />
            <div className="h-4 w-[100px] bg-heybit-variable-HB-gray100 rounded" />
          </div>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="flex flex-col gap-2 h-[54px] w-[234px]">
            <div className="h-5 w-[180px] bg-heybit-variable-HB-gray100 rounded" />
            <div className="h-5 w-[100px] bg-heybit-variable-HB-gray100 rounded" />
          </div>
          <div className="h-3 w-[120px] bg-heybit-variable-HB-gray100 rounded" />
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
  const [myVotes, setMyVotes] = useState<MyVotedPost[]>([]);
  const [participatedLoading, setParticipatedLoading] = useState<boolean>(true);
  const [participated, setParticipated] = useState<ParticipatedVote[]>([]);

  useEffect(() => {
    const init = async () => {
      try {
        const [profileRes, myVotesRes] = await Promise.allSettled([getUserProfile(), getMyVotes()]);
        if (profileRes.status === 'fulfilled' && profileRes.value?.nickname) {
          setNickname(profileRes.value.nickname);
        }
        if (myVotesRes.status === 'fulfilled') {
          setMyVotes(myVotesRes.value ?? []);
        }
      } catch (e) {
        console.error('Failed to load my votes', e);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const loadParticipatedVotes = async () => {
      setParticipatedLoading(true);
      try {
        const votes = await getParticipatedVotes();
        const mapped: ParticipatedVote[] = votes.map((v) => ({
          id: v.votePostId || Math.random(),
          title: v.name,
          price: v.amount,
          image: Thumbnail,
          date: v.votedAt,
          buyCount: v.buyCount,
          stopCount: v.holdCount,
          status: v.status as ParticipatedStatus,
          myVote: v.myVote,
        }));
        setParticipated(mapped);
      } catch (e) {
        console.error('Failed to load participated votes', e);
      } finally {
        setParticipatedLoading(false);
      }
    };
    loadParticipatedVotes();
  }, []);

  const registeredVotes = useMemo<MyRegisteredVote[]>(
    () =>
      myVotes.map((v) => ({
        id: v.votePostId,
        name: v.name,
        amount: v.amount,
        image: Thumbnail,
        endTime: null,
        buyCount: v.buyCount,
        holdCount: v.holdCount,
        status: v.status,
        myVote: v.myVote,
        votedAt: v.votedAt,
      })),
    [myVotes],
  );

  const filteredVotes = useMemo(() => {
    if (filter === 'all') return registeredVotes;
    return registeredVotes.filter((v) =>
      filter === 'ongoing' ? v.status === 'IN_PROGRESS' : v.status !== 'IN_PROGRESS',
    );
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
          <div className="flex justify-end mt-4">
            <StatusDropdown onChange={handleStatusChange} />
          </div>
        )}
      </div>

      {voteType === 'registered' ? (
        <div className="mt-4 flex flex-col gap-[14px] flex-1">
          {loading ? (
            <>
              <VoteCardSkeleton />
              <VoteCardSkeleton />
              <VoteCardSkeleton />
            </>
          ) : (
            filteredVotes.map((v) => <MyVoteCard key={v.id} vote={v} />)
          )}
          {!loading && filteredVotes.length === 0 && (
            <div className="flex-1 flex flex-col items-center justify-center py-12 text-center">
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
        <div className="mt-4 flex flex-col gap-[14px] flex-1">
          {participatedLoading ? (
            <>
              <ParticipatedCardSkeleton />
              <ParticipatedCardSkeleton />
              <ParticipatedCardSkeleton />
              <ParticipatedCardSkeleton />
            </>
          ) : participated.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center">
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
          ) : (
            participated.map((v) => <ParticipatedCard key={v.id} v={v} className="last:mb-4" />)
          )}
        </div>
      )}
    </div>
  );
}
