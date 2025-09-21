import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization');
  const { searchParams } = new URL(request.url);
  const month = searchParams.get('month');

  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  if (!month) {
    return NextResponse.json({ error: 'month 파라미터가 필요합니다' }, { status: 400 });
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/reports/monthly?month=${month}`, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch {
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}
