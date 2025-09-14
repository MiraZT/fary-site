import type { Post } from "@/types";
import { cache } from "react";

export const getPosts = cache(async (): Promise<Post[]> => {
  try {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/posts`, {
      cache: "force-cache",
      next: {
        revalidate: 21_600, // 6 hours, maybe
      },
    });

    return await data.json();
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.error(e);
    }

    return [];
  }
});
