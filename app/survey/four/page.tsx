"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Wrapper, TitleWrapper, Title } from './../styles';
import SurveyItem from '@/components/survey/surveyItem';
import FullButton from '@/components/button/fullButton';
import { SurveyProgressBar } from '@/components/surveyProgressBar';
import { SurveyStorage, mapImprovementReason } from '@/utils/survey';
import { submitUserSurvey, type UserSurveyRequest } from '@/data/api/survey';

export default function SurveyPage() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    
    const handleStart = async () => {
        if (selectedItem !== null) {
            SurveyStorage.setImprovementReason(mapImprovementReason(selectedItem));
        }
        const all = SurveyStorage.getAll();
        if (!all.consumptionTime || !all.impulseFrequency || !all.purchaseTrigger || !all.improvementReason) {
            alert('설문 응답을 모두 완료해주세요.');
            return;
        }

        try {
            setSubmitting(true);
            const payload: UserSurveyRequest = {
                consumptionTime: all.consumptionTime!,
                impulseFrequency: all.impulseFrequency!,
                purchaseTrigger: all.purchaseTrigger!,
                improvementReason: all.improvementReason!,
            };
            await submitUserSurvey(payload);
            SurveyStorage.clear();
            router.push('/register-complete');
        } catch (e: unknown) {
            const status = (e as { status?: number } | undefined)?.status;
            if (status === 400) {
                router.push('/register-complete');
                return;
            }
            alert('설문 제출에 실패했습니다. 잠시 후 다시 시도해주세요.');
        } finally {
            setSubmitting(false);
        }
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
            <SurveyProgressBar progressbar="progress-sucess" />
            <TitleWrapper>
                <Title>
                    소비 습관 개선이 어려운 <br/>
                    이유는 무엇인가요?
                </Title>
            </TitleWrapper>

            {items.map(item => (
                <SurveyItem key={item.id} selected={item.id === selectedItem} onClick={() => setSelectedItem(item.id)}>{item.label}</SurveyItem>
            ))}

            <FullButton 
                style={{ marginTop: 'auto', marginBottom: '56px' }} 
                onClick={handleStart}
                disabled={selectedItem === null || submitting}
            >
                완료
            </FullButton>
        </Wrapper>
    )
}
