import { NextRequest, NextResponse } from 'next/server'
import { getArticleDataBySlug } from '@/utils/articles-handlers';

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  const article = await getArticleDataBySlug(params.slug);
  return NextResponse.json({ ...article })
}