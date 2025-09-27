import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization');

  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  try {
    const body = await request.json();

    const requestBody = {
      timerId: body.timerId,
      result: body.result,
    };

    const response = await fetch(`${API_BASE_URL}/api/v1/timer-results`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorData.message || '타이머 결과 저장에 실패했습니다' },
        { status: response.status },
      );
    }

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Timer result API error:', error);
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}
