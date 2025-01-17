import { NEXT_PUBLIC_API_URL } from "@/lib/constants/config";
import { Post } from "@/types/general";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/posts`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export const getPost = async (id: string): Promise<Post> => {
  const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch post with ID: ${id}`);
  }

  return response.json();
};