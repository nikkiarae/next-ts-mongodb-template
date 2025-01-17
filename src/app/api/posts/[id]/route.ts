import Post from '@/models/Post';
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose'
import { Params } from '@/types/general';

export async function GET(_: Request, params: Params) {
  await dbConnect();

  const { id } = await params.params;

  const post = await Post.findOne({ _id: id });

  if (!post) {
    return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  }

  return NextResponse.json(post);
}