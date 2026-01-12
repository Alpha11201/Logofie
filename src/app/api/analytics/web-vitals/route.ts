import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'success',
    data: {
      metrics: {
        LCP: { value: 1200, rating: 'good' },
        FID: { value: 85, rating: 'good' },
        CLS: { value: 0.08, rating: 'good' },
        INP: { value: 150, rating: 'good' }
      },
      message: 'API Web Vitals fonctionnelle',
      timestamp: new Date().toISOString()
    }
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log(' Web Vitals reçus:', body)
    
    return NextResponse.json({
      success: true,
      message: 'Données enregistrées',
      received: body
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Format invalide' },
      { status: 400 }
    )
  }
}
