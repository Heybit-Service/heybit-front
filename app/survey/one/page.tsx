"use client";

import { FC, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper, TitleWrapper, Title, Description } from './../styles';
import SurveyItem from '@/components/survey/surveyItem';
import FullButton from '@/components/button/fullButton';

const SurveyPage: FC = () => {
    const router = useRouter();
    
    const handleStart = () => {
        router.push('/survey/two'); // Redirect to the next page after registration
    }

    const [items] = useState([
        { id: 1, label: '저녁 (17~20시)',  },
        { id: 2, label: '밤 (20~24시)', },
        { id: 3, label: '새벽 (00~06시)',  },
        { id: 4, label: '오후 (14~17시)',  },
        { id: 5, label: '오전 (06~11시)' },
        { id: 6, label: '점심시간 (11~14시)' }
    ]);

    const [selectedItem, setSelectedItem] = useState<number | null>(null);

    return (
        <Wrapper>
            <TitleWrapper>
                <Title>
                    소비가 많아지는 시간대는 <br/>
                    언제인가요?
                </Title>
            </TitleWrapper>

            {items.map(item => (
                <SurveyItem key={item.id} selected={item.id === selectedItem} onClick={() => setSelectedItem(item.id)}>{item.label}</SurveyItem>
            ))}

            {selectedItem !== null && 
            <FullButton style={{ marginTop: 'auto', marginBottom: '56px' }} onClick={handleStart}>다음</FullButton>}
        </Wrapper>
    )
}

export default SurveyPage;