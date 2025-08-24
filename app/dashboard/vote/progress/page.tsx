'use client';

import { VoteCard } from '@/components/vote/VoteCard';
import thumbnailImage from '@/assets/vote/thumbnail.png';
import { useEffect, useState } from 'react';
import { getUserProfile } from '@/data/api/user';

export default function VotePage() {
  const [nickname, setNickname] = useState<string>('사용자');

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
    <div className="flex flex-col items-start relative pb-6">
      <div className="flex flex-col items-start gap-1 mb-6">
        <div className="text-heybit-variable-HB-balck font-pretendard text-2xl font-bold leading-[133%]">
          살까요 말까요?
        </div>
        <p className="text-heybit-variable-HB-gray400 font-pretendard text-base font-medium leading-[140%]">
          <span className="underline decoration-solid decoration-auto underline-offset-auto">
            {nickname}
          </span>
          <span>
            {' '}
            님의 의견을 들려주세요
          </span>
        </p>
      </div>
      
      <div className="flex flex-col gap-[14px]">
        <VoteCard
        productImage={thumbnailImage}
        productName="헤어 리프팅 샴푸"
        productPrice={37000}
        timeRemaining="3시간 45분 남음"
        userName="헤이빗님"
        userComment="머릿결이 많이 푸석해져서 사고 싶은데 정말 효과가 있을까? 샴푸 한 통에 삼만원이 넘으니 고민돼.."
      />
      <VoteCard
        productImage={thumbnailImage}
        productName="헤어 리프팅 샴푸"
        productPrice={37000}
        timeRemaining="3시간 45분 남음"
        userName="헤이빗님"
        userComment="머릿결이 많이 푸석해져서 사고 싶은데 정말 효과가 있을까? 샴푸 한 통에 삼만원이 넘으니 고민돼.."
      />
      <VoteCard
        productImage={thumbnailImage}
        productName="헤어 리프팅 샴푸"
        productPrice={37000}
        timeRemaining="3시간 45분 남음"
        userName="헤이빗님"
        userComment="머릿결이 많이 푸석해져서 사고 싶은데 정말 효과가 있을까? 샴푸 한 통에 삼만원이 넘으니 고민돼.."
      />
      <VoteCard
        productImage={thumbnailImage}
        productName="헤어 리프팅 샴푸"
        productPrice={37000}
        timeRemaining="3시간 45분 남음"
        userName="헤이빗님"
        userComment="머릿결이 많이 푸석해져서 사고 싶은데 정말 효과가 있을까? 샴푸 한 통에 삼만원이 넘으니 고민돼.."
      />
      <VoteCard
        productImage={thumbnailImage}
        productName="헤어 리프팅 샴푸"
        productPrice={37000}
        timeRemaining="3시간 45분 남음"
        userName="헤이빗님"
        userComment="머릿결이 많이 푸석해져서 사고 싶은데 정말 효과가 있을까? 샴푸 한 통에 삼만원이 넘으니 고민돼.."
      />
      <VoteCard
        productImage={thumbnailImage}
        productName="헤어 리프팅 샴푸"
        productPrice={37000}
        timeRemaining="3시간 45분 남음"
        userName="헤이빗님"
        userComment="머릿결이 많이 푸석해져서 사고 싶은데 정말 효과가 있을까? 샴푸 한 통에 삼만원이 넘으니 고민돼.."
      />
      <VoteCard
        productImage={thumbnailImage}
        productName="헤어 리프팅 샴푸"
        productPrice={37000}
        timeRemaining="3시간 45분 남음"
        userName="헤이빗님"
        userComment="머릿결이 많이 푸석해져서 사고 싶은데 정말 효과가 있을까? 샴푸 한 통에 삼만원이 넘으니 고민돼.."
      />
      </div>
    </div>
  );
}
