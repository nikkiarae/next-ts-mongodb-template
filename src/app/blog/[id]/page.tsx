import { FC } from "react";
import { getPost } from "@/lib/api/posts";
import { Post } from "@/types/general";

interface PostPageProps {
  params: Promise<{ 
    id: string
  }>
}

const PostPage: FC<PostPageProps> = async ({ params }) => {
  const p = await params
  const post: Post = await getPost(p.id)

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.content}</p>
      <p className="text-sm text-gray-500">By {post.author}</p>
    </div>
  );
};

export default PostPage;