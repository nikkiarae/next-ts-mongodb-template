import { FC } from "react";
import Link from "next/link";
import { fetchPosts } from "@/lib/api/posts";
import { Post } from "@/types/general";

const BlogPage: FC = async () => {
  const posts: Post[] = await fetchPosts()

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post: Post) => (
          <Link href={`/blog/${post._id?.toString()}`} key={post._id?.toString()}>
            <li  className="p-4 border rounded-md">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.content}</p>
              <p className="text-sm text-gray-500">By {post.author}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;