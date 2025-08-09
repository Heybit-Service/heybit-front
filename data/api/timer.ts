import { CurrentTimer, HistoryTimer } from '../type/timer';

export const fetchCurrentTimers = async (): Promise<CurrentTimer[]> => {
  // Mock 데이터 반환
  return new Promise((resolve) => {
    setTimeout(() => {
      const now = new Date();
      resolve([
        {
          timerId: 1,
          active: true,
          name: '아이폰 15 Pro',
          description: 'Apple 아이폰 15 Pro 256GB 자연 티타늄',
          amount: 1500,
          endTime: new Date(now.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString(), // 2일 후
          withVotePost: true,
        },
        {
          timerId: 2,
          active: false,
          name: '나이키 에어맥스',
          description: 'Nike Air Max 270 블랙/화이트',
          amount: 800,
          endTime: new Date(now.getTime() + 5 * 60 * 60 * 1000).toISOString(), // 5시간 후
          withVotePost: false,
        },
        {
          timerId: 3,
          active: true,
          name: 'MacBook Air M3',
          description: '13형 MacBook Air M3 칩, 8GB RAM, 256GB SSD',
          amount: 2200,
          endTime: new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString(), // 7일 후
          withVotePost: true,
        },
      ]);
    }, 500); // 실제 API 호출처럼 약간의 딜레이
  });
};

export const fetchHistoryTimers = async (): Promise<HistoryTimer[]> => {
  // Mock 데이터 반환
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          timerId: 101,
          name: '에어팟 프로 2세대',
          success: true,
          amount: 2000,
          durationMinutes: 4320, // 3일
          durationMessage: '3일',
        },
        {
          timerId: 102,
          name: '스타벅스 텀블러',
          success: false,
          amount: 0,
          durationMinutes: 25,
          durationMessage: '25분',
        },
        {
          timerId: 103,
          name: '다이슨 에어랩',
          success: true,
          amount: 3500,
          durationMinutes: 7200, // 5일
          durationMessage: '5일',
        },
        {
          timerId: 104,
          name: '애플 워치 Series 9',
          success: true,
          amount: 1800,
          durationMinutes: 2880, // 2일
          durationMessage: '2일',
        },
      ]);
    }, 300);
  });
};
