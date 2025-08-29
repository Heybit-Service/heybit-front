import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('authorization');
    if (!token) {
      return NextResponse.json({ error: '인증 토큰이 필요합니다' }, { status: 401 });
    }

    const body = await request.json();

    const upstream = await fetch(`${API_BASE_URL}/api/v1/surveys`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(body),
    });

    const json = await upstream.json().catch(() => ({}));
    return NextResponse.json(json, { status: upstream.status });
  } catch (e) {
    return NextResponse.json({ error: '서버 오류' }, { status: 500 });
  }
}

