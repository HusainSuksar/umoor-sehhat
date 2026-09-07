import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const revalidate = 3600;

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'Instagram Access Token not configured' }, { status: 500 });
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=5&access_token=${token}`
    );
    const data = await res.json();
    return NextResponse.json(data.data || []);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch Instagram media' }, { status: 502 });
  }
}