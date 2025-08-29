import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const token = request.headers.get('authorization');
  const { id } = await params;

  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/timers/${id}`, {
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const token = request.headers.get('authorization');
  const { id } = await params;

  if (!token) {
    return NextResponse.json({ error: '인증이 필요합니다' }, { status: 401 });
  }

  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/timers/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return NextResponse.json({ success: true });
    } else {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }
  } catch {
    return NextResponse.json({ error: '서버 에러' }, { status: 500 });
  }
}
