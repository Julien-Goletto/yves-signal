import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const data = {
    message : "Bienvenue sur l'API de Yves Signal",
  }
  return NextResponse.json({ data })
}