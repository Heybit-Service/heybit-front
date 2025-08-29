import type {
  ConsumptionTime,
  HabitImprovementReason,
  ImpulseFrequency,
  PurchaseTrigger,
  UserSurveyRequest,
} from '@/data/api/survey';

const K = {
  consumptionTime: 'survey_consumptionTime',
  impulseFrequency: 'survey_impulseFrequency',
  purchaseTrigger: 'survey_purchaseTrigger',
  improvementReason: 'survey_improvementReason',
};

export const SurveyStorage = {
  setConsumptionTime(v: ConsumptionTime) {
    if (typeof window !== 'undefined') localStorage.setItem(K.consumptionTime, v);
  },
  setImpulseFrequency(v: ImpulseFrequency) {
    if (typeof window !== 'undefined') localStorage.setItem(K.impulseFrequency, v);
  },
  setPurchaseTrigger(v: PurchaseTrigger) {
    if (typeof window !== 'undefined') localStorage.setItem(K.purchaseTrigger, v);
  },
  setImprovementReason(v: HabitImprovementReason) {
    if (typeof window !== 'undefined') localStorage.setItem(K.improvementReason, v);
  },
  getAll(): Partial<UserSurveyRequest> {
    if (typeof window === 'undefined') return {};
    return {
      consumptionTime: localStorage.getItem(K.consumptionTime) as ConsumptionTime | null | undefined,
      impulseFrequency: localStorage.getItem(K.impulseFrequency) as ImpulseFrequency | null | undefined,
      purchaseTrigger: localStorage.getItem(K.purchaseTrigger) as PurchaseTrigger | null | undefined,
      improvementReason: localStorage.getItem(K.improvementReason) as HabitImprovementReason | null | undefined,
    } as Partial<UserSurveyRequest>;
  },
  clear() {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(K.consumptionTime);
      localStorage.removeItem(K.impulseFrequency);
      localStorage.removeItem(K.purchaseTrigger);
      localStorage.removeItem(K.improvementReason);
    }
  },
};

// ID -> enum mapping helpers for each step
export function mapConsumptionTime(id: number): ConsumptionTime {
  switch (id) {
    case 1:
      return 'EVENING';
    case 2:
      return 'NIGHT';
    case 3:
      return 'DAWN';
    case 4:
      return 'AFTERNOON';
    case 5:
      return 'MORNING';
    case 6:
      return 'LUNCH';
    default:
      return 'EVENING';
  }
}

export function mapImpulseFrequency(id: number): ImpulseFrequency {
  switch (id) {
    case 4:
      return 'NONE';
    case 1:
      return 'ONE_TO_TWO';
    case 2:
      return 'LESS_THAN_FIVE';
    case 3:
      return 'MORE_THAN_FIVE';
    default:
      return 'ONE_TO_TWO';
  }
}

export function mapPurchaseTrigger(id: number): PurchaseTrigger {
  switch (id) {
    case 1:
      return 'SELF_REWARD';
    case 2:
      return 'DISTRACTED_BY_OTHER_PRODUCTS';
    case 3:
      return 'INFLUENCED_BY_SNS_OR_YOUTUBE';
    case 4:
      return 'BORED_OR_FREE_TIME';
    case 5:
      return 'FRIEND_RECOMMENDATION';
    default:
      return 'SELF_REWARD';
  }
}

export function mapImprovementReason(id: number): HabitImprovementReason {
  switch (id) {
    case 1:
      return 'LACK_OF_WILLPOWER';
    case 2:
      return 'HARD_TO_CONTROL_IMPULSE';
    case 3:
      return 'TOO_BOTHERING';
    case 4:
      return "DON_T_KNOW_HOW";
    case 5:
      return 'NO_VISIBLE_EFFECT';
    default:
      return 'LACK_OF_WILLPOWER';
  }
}

