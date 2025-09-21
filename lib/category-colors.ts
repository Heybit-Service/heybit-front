// 카테고리별 색상 매핑
export const CATEGORY_COLORS = {
  CLOTHES: '#FF0000', // 의류
  TRANSPORT: '#FB7B7B', // 교통
  FOOD: '#FADBD4', // 음식
  HOBBY: '#5B5B5B', // 취미
  DAILY: '#7C7C7C', // 생활용품
  BEAUTY: '#A8A8A8', // 뷰티
  ETC: '#E8E8E8', // 기타
} as const;

// 카테고리 ENUM 타입 (타이머 폼에서 사용하는 값들)
export type CategoryType = keyof typeof CATEGORY_COLORS;

// 카테고리 이름으로 색상을 가져오는 헬퍼 함수
export const getCategoryColor = (category: string): string => {
  return CATEGORY_COLORS[category as CategoryType] || '#E8E8E8'; // 기본값은 기타 색상
};

// 한글 라벨을 ENUM으로 변환하는 매핑 (필요시 사용)
export const CATEGORY_LABEL_TO_ENUM = {
  의류: 'CLOTHES',
  교통: 'TRANSPORT',
  음식: 'FOOD',
  취미: 'HOBBY',
  생활용품: 'DAILY',
  생활: 'DAILY',
  뷰티: 'BEAUTY',
  기타: 'ETC',
} as const;

// 한글 카테고리 이름으로 색상을 가져오는 헬퍼 함수
export const getCategoryColorByName = (categoryName: string): string => {
  const enumKey = CATEGORY_LABEL_TO_ENUM[categoryName as keyof typeof CATEGORY_LABEL_TO_ENUM];
  return enumKey ? CATEGORY_COLORS[enumKey] : CATEGORY_COLORS.ETC;
};
