import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function GET(request: NextRequest) {
  const token = request.headers.get('authorization');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const upstream = await fetch(`${API_BASE_URL}/api/v1/votes/my-votes`, {
      method: 'GET',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });
    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}