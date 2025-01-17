import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Post from '@/models/Post';

// Fetch all posts
export async function GET() {
  await dbConnect();

  const posts = await Post.find({});
  return NextResponse.json(posts);
}

// Create a new post
export async function POST(request: Request) {
  await dbConnect();

  const body = await request.json();
  const newPost = await Post.create(body);

  return NextResponse.json(newPost, { status: 201 });
}