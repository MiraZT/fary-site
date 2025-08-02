import type { Metadata } from "next";
import type { Post as PostType } from "@/types";

import Link from "next/link";

import { getPosts } from "./_api/get-posts";

export const metadata: Metadata = {
  title: "Блог проекта",
};

export default async function BlogPage() {
  try {
    const posts = await getPosts();

    return (
      <main className="mx-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </main>
    );
  } catch (error) {
    if (error instanceof Error) console.log(error.name);

    return (
      <main className="mx-8 flex justify-center sm:grid-cols-3 gap-4">
        Нам очень жаль, но запрос к серверу... Не увенчался успехом
      </main>
    );
  }
}

function Post({ data }: { data: PostType }) {
  return (
    <section
      key={data.id}
      className="flex flex-col justify-center items-center text-center p-4 m-1 mb-16 rounded-xl bg-[var(--background-card)] ring-1 ring-[var(--foreground)]"
    >
      <h1 className="text-lg font-semibold text-[var(--foreground)]">
        {data.title}
      </h1>
      <span className="text-sm mb-4">
        {data.author.jobName || `@${data.author.username}`}
      </span>

      <p>{data.description || data.content}</p>

      <Link
        className="flex w-full justify-center items-center text-center p-2 mt-6 bg-[var(--foreground)] text-[var(--background-card)] rounded-lg"
        href={`/blog/${data.slug}`}
      >
        Читать 👀
      </Link>
    </section>
  );
}
