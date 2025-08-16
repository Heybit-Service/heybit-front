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
        router.push('/survey/four'); // Redirect to the next page after registration
    }

    const [items] = useState([
        { id: 1, label: '나에게 보상을 주어야 할 때',  },
        { id: 2, label: '쇼핑 중 다른 상품이 눈에 들어왔을 때', },
        { id: 3, label: '즐겨보는 SNS 혹은 유튜브에서 추천해줄 때',  },
        { id: 4, label: '심심하거나 시간적 여유가 생겼을 때',  },
        { id: 5, label: '지인이 계획에 없던 물건을 추천해주었을 때',  },
    ]);

    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <Wrapper>
            <SurveyProgressBar progressbar="progress-03" />
            <TitleWrapper>
                <Title>
                    어떤 상황에서 나도 모르게 <br /> 결제를 하나요?
                </Title>
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