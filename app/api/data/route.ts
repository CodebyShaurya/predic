import { NextResponse } from 'next/server';
import siteData from '@/data/siteData.json';

export async function GET() {
  return NextResponse.json(siteData);
}