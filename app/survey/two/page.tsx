"use client";

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper, TitleWrapper, Title, Description } from './../styles';
import SurveyItem from '@/components/survey/surveyItem';
import FullButton from '@/components/button/fullButton';
import { SurveyProgressBar } from '@/components/surveyProgressBar';

const SurveyPage: FC = () => {
    const router = useRouter();
    
    const handleStart = () => {
        router.push('/survey/three'); // Redirect to the next page after registration
    }

    const [items] = useState([
        { id: 1, label: '1-2회',  },
        { id: 2, label: '5회 미만', },
        { id: 3, label: '5회 이상',  },
        { id: 4, label: '없음',  },
    ]);

    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <Wrapper>
            <SurveyProgressBar progressbar="progress-02" />
            <TitleWrapper>
                <Title>
                    충동 소비라고 느끼는 빈도가 <br/> 어떻게 되나요?
                </Title>
                <Description>
                    한 달 기준으로 생각해주세요
                </Description>
            </TitleWrapper>

            {items.map(item => (
                <SurveyItem key={item.id} selected={item.id === selectedItem} onClick={() => setSelectedItem(item.id)}>{item.label}</SurveyItem>
            ))}

            <FullButton 
                style={{ marginTop: 'auto', marginBottom: '56px' }} 
                onClick={handleStart}
                disabled={selectedItem === null}
            >
                다음
            </FullButton>
        </Wrapper>
    )
}

export default SurveyPage;