"use client";

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper, TitleWrapper, Title, Description } from './../styles';
import SurveyItem from '@/components/survey/surveyItem';
import FullButton from '@/components/button/fullButton';

const SurveyPage: FC = () => {
    const router = useRouter();
    
    const handleStart = () => {
        router.push('/register-complete'); // Redirect to the next page after registration
    }

    const [items] = useState([
        { id: 1, label: '의지가 오래가지 않아서',  },
        { id: 2, label: '구매 충동을 조절하기 어려워서', },
        { id: 3, label: '개선하는 과정이 귀찮아서',  },
        { id: 4, label: '개선 방법을 몰라서',  },
        { id: 5, label: '개선 시도 시, 개선 효과를 느끼지 못해서' },
    ]);

    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>
                    소비 습관 개선이 어려운 <br/>
                    이유는 무엇인가요?
                </Title>
            </TitleWrapper>

            {items.map(item => (
                <SurveyItem key={item.id} selected={item.id === selectedItem} onClick={() => setSelectedItem(item.id)}>{item.label}</SurveyItem>
            ))}

            {selectedItem !== null && 
            <FullButton style={{ marginTop: 'auto', marginBottom: '56px' }} onClick={handleStart}>완료</FullButton>}
        </Wrapper>
    )
}

export default SurveyPage;