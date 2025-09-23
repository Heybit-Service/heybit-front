import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization');

  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { timerId, result, amount } = body;

    if (!timerId || !result || amount === undefined) {
      return NextResponse.json({ error: 'timerId, result, amount가 필요합니다' }, { status: 400 });
    }

    const response = await fetch(`${API_BASE_URL}/api/v1/timer-abandon`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ timerId, result, amount }),
    });

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('Timer abandon API error:', error);
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}
