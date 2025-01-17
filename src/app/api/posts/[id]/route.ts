// import Post from '@/models/Post';
// import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose'

export async function GET(_: Request) {
  await dbConnect();
  // const { id } = _;
  console.log(_)
  
  // const post = await Post.find({ id });

  // if (!post) {
  //   return NextResponse.json({ error: 'Post not found' }, { status: 404 });
  // }

  // return NextResponse.json(post);
}