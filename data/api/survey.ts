import { getToken } from '@/data/auth';

export type ConsumptionTime = 'MORNING' | 'LUNCH' | 'AFTERNOON' | 'EVENING' | 'NIGHT' | 'DAWN';
export type ImpulseFrequency = 'NONE' | 'ONE_TO_TWO' | 'LESS_THAN_FIVE' | 'MORE_THAN_FIVE';
export type PurchaseTrigger =
  | 'SELF_REWARD'
  | 'DISTRACTED_BY_OTHER_PRODUCTS'
  | 'INFLUENCED_BY_SNS_OR_YOUTUBE'
  | 'BORED_OR_FREE_TIME'
  | 'FRIEND_RECOMMENDATION';
export type HabitImprovementReason =
  | 'LACK_OF_WILLPOWER'
  | 'HARD_TO_CONTROL_IMPULSE'
  | 'TOO_BOTHERING'
  | 'DON_T_KNOW_HOW'
  | 'NO_VISIBLE_EFFECT';

export interface UserSurveyRequest {
  consumptionTime: ConsumptionTime;
  impulseFrequency: ImpulseFrequency;
  purchaseTrigger: PurchaseTrigger;
  improvementReason: HabitImprovementReason;
}

export async function submitUserSurvey(payload: UserSurveyRequest): Promise<void> {
  const token = getToken();
  if (!token) throw new Error('No authentication token found');

  const res = await fetch('/api/surveys', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    const msg = text || 'Failed to submit survey';
    const err = new Error(msg);
    // @ts-ignore add status for handling
    (err as any).status = res.status;
    throw err;
  }
}

