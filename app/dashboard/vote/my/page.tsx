'use client';

import { useState, useEffect } from 'react';
import { VoteToggle } from '@/components/vote/VoteToggle';
import { StatusDropdown } from '@/components/common/StatusDropdown';
import Character from '@/assets/vote/character.svg';
import { getUserProfile } from '@/data/api/user';

export default function VotePage() {
  const [voteType, setVoteType] = useState<'registered' | 'participated'>('registered');
  const [nickname, setNickname] = useState<string>('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile();
        if (profile?.nickname) {
          setNickname(profile.nickname);
        }
      } catch (error) {
        console.error('Failed to fetch user profile:', error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="relative w-full">
        <div className="flex justify-center">
          <VoteToggle
            defaultValue="registered"
            onToggle={setVoteType}
          />
        </div>
        {voteType === 'registered' && (
          <div className="absolute right-0 top-full mt-4">
            <StatusDropdown />
          </div>
        )}
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center">
        <Character 
          width={120} 
          height={134}
          className="mb-5"
        />
        
        {voteType === 'registered' ? (
          <div className="flex flex-col items-center gap-1">
            <p className="text-[18px] font-bold leading-[27px] text-[#202020] text-center">
              아직 등록한 투표가 없어요!
            </p>
            <p className="text-[16px] font-medium leading-[150%] text-[#7C7C7C] text-center">
              타이머를 시작하고 투표를 등록해보세요
            </p>
          </div>
        ) : (
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
        )}
      </div>
    </div>
  );
}
