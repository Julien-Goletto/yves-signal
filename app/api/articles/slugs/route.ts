import { NextRequest, NextResponse } from 'next/server'
import { getArticleSlugList } from '@/utils/articles-handlers';

export async function GET(request: NextRequest) {
  const articleSlugList = await getArticleSlugList();
  return NextResponse.json({ articleSlugList })
}