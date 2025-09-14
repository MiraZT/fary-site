import type { Post } from "@/types";
import { cache } from "react";

const api = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getPostBySlug = cache(
  async (slug: string): Promise<Post | null> => {
    try {
      const data = await fetch(`${api}/posts/?slug=${slug}`, {
        cache: "force-cache",
        next: {
          revalidate: 21_600, // 6 hours, maybe
        },
      });
      const post = await data.json();

      return post ? post[0] : null;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e);
      }

      return null;
    }
  }
);
