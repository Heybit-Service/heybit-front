import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function POST(request: NextRequest) {
  const token = request.headers.get('authorization');

  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/me/deactivate`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    // 204 No Content인 경우 빈 응답 반환
    if (response.status === 204) {
      return new NextResponse(null, { status: 204 });
    }

    const data = await response.json().catch(() => ({}));
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    console.error('User deactivate API error:', error);
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}
