import { NextRequest, NextResponse } from 'next/server';
import { API_BASE_URL } from '@/data/api';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ votePostId: string }> }
) {
  const token = request.headers.get('authorization');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { votePostId } = await params;
  const result = request.nextUrl.searchParams.get('result');
  if (result !== 'BUY' && result !== 'HOLD') {
    return NextResponse.json({ error: 'Invalid result' }, { status: 400 });
  }

  try {
    const upstream = await fetch(
      `${API_BASE_URL}/api/v1/votes/${encodeURIComponent(votePostId)}/vote?result=${encodeURIComponent(result)}`,
      {
        method: 'POST',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ votePostId: string }> }
) {
  const token = request.headers.get('authorization');
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { votePostId } = await params;
    const upstream = await fetch(
      `${API_BASE_URL}/api/v1/votes/${encodeURIComponent(votePostId)}/vote`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await upstream.json();
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
