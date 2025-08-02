import type { Post } from "@/types";
import { cache } from "react";

const api = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getPosts = cache(async (): Promise<Post[]> => {
  const data = await fetch(`${api}/posts`, {
    cache: "force-cache",
    next: {
      revalidate: 21_600, // 6 hours, maybe
    },
  });
  const posts = await data.json();

  return posts;
});

export const getPost = cache(async (id: string): Promise<Post | null> => {
  const data = await fetch(`${api}/posts/${id}`, {
    cache: "force-cache",
    next: {
      revalidate: 21_600, // 6 hours, maybe
    },
  });
  const post = await data.json();

  return post;
});

export const getPostBySlug = cache(
  async (slug: string): Promise<Post | null> => {
    const data = await fetch(`${api}/posts/?slug=${slug}`, {
      cache: "force-cache",
      next: {
        revalidate: 21_600, // 6 hours, maybe
      },
    });
    const posts = await data.json();

    return posts ? posts[0] : null;
  }
);
