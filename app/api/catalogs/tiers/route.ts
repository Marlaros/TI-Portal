import { NextResponse } from 'next/server';
import { createServiceClient } from '@/lib/supabase/serverClient';

const supabase = createServiceClient();

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const slug = url.searchParams.get('slug');
    if (!slug) return NextResponse.json({ error: 'Missing slug' }, { status: 400 });

    // find fighting style id by slug
    const styleRes = await supabase.from('fighting_styles').select('*').eq('slug', slug).limit(1).single();
    if (styleRes.error || !styleRes.data) {
      return NextResponse.json({ rows: [] }, { status: 200 });
    }
    const styleId = styleRes.data.id;

    const tiersRes = await supabase
      .from('fighting_style_tiers')
      .select('*')
      .eq('fighting_style_id', styleId)
      .order('group_index', { ascending: true })
      .order('order_index', { ascending: true });

    if (tiersRes.error) throw tiersRes.error;

    return NextResponse.json({ rows: tiersRes.data ?? [] }, { status: 200 });
  } catch (error) {
    console.error('Failed to load tiers', error);
    return NextResponse.json({ error: 'Failed to load tiers' }, { status: 500 });
  }
}
