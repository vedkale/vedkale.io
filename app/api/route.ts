import { NextResponse } from 'next/server'

export async function GET(request: Request) {

  // NextResponse extends the Web Response API
  return NextResponse.json({ hello: 'world' })
}
