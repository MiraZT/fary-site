"use client";

import { Post as PostType } from "@/types";
import Link from "next/link";
import { use } from "react";
import { getPostBySlug } from "../_api/get-posts";

export default function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const data = use(getPostBySlug(slug));

  if (!data) return null;

  return (
    <main className="mx-auto my-0 max-w-4xl gap-2 flex flex-col justify-center items-center text-center p-4 m-1 mb-16 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]">
      <h1 className="text-lg font-semibold text-[var(--foreground)]">
        {data.title}
      </h1>
      <span className="text-sm mb-4">
        {data.author.jobName || `@${data.author.username}`}
      </span>

      <p>{data.description || data.content}</p>
    </main>
  );
}
