import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nickname = searchParams.get('nickname');
  const token = request.headers.get('authorization');

  if (!nickname) {
    return NextResponse.json({ error: '닉네임이 필요합니다' }, { status: 400 });
  }

  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  try {
    const response = await fetch(
      `${API_BASE_URL}/api/v1/users/check-nickname?nickname=${encodeURIComponent(nickname)}`,
      {
        method: 'GET',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}