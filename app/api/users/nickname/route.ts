import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function PUT(request: NextRequest) {
  const token = request.headers.get('authorization');
  
  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  try {
    const body = await request.json();
    
    const response = await fetch(
      `${API_BASE_URL}/api/v1/users/nickname`,
      {
        method: 'PUT',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}