import type { Metadata } from "next";

import { Suspense } from "react";

import { getPostBySlug } from "./_api/get-post";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} • Блог FarySD`,
    description: post.description || post.content,
    authors: [{ name: post.author.jobName || `@${post.author.username}` }],
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <PostContent slug={slug} />
    </Suspense>
  );
}

async function PostContent({ slug }: { slug: string }) {
  const data = await getPostBySlug(slug);

  if (!data) {
    notFound();
  }

  return (
    <main className="mx-auto my-0 max-w-4xl gap-2 flex flex-col justify-center items-center text-center p-4 m-1 mb-16 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]">
      <h1 className="text-lg font-semibold text-[var(--foreground)]">
        {data.title}
      </h1>
      <span className="text-sm mb-4">
        {data.author.jobName || `@${data.author.username}`}
      </span>
      <p className="text-sm mb-4">{data.description}</p>
      <p>{data.content}</p>
    </main>
  );
}

function Loading() {
  return (
    <main className="animate-pulse mx-auto my-0 max-w-4xl gap-2 flex flex-col justify-center items-center text-center p-4 m-1 mb-16 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]">
      <h1 className="text-lg font-semibold text-[var(--foreground)]">
        Загрузка
      </h1>
      <span className="text-sm mb-4">@unknow</span>
      <p>...</p>
    </main>
  );
}
