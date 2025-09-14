import type { Post as PostType } from "@/types";
import type { Metadata } from "next";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/shared/components/ui/card";
import { getPosts } from "./_api/get-posts";

export const metadata: Metadata = {
  title: "Блог проекта",
};

export default async function BlogPage() {
  try {
    const posts = await getPosts();

    return (
      <main className="mx-8 flex flex-col gap-4">
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
    <section key={data.id}>
      <Card>
        <CardHeader>
          <CardTitle>{data.title}</CardTitle>
          <CardDescription>
            Опубликовано {`«${data.author.jobName}»` || `@${data.author.username}`}</CardDescription>
        </CardHeader>
        <CardContent>
          {data.description}
          </CardContent>
        <CardFooter>
          <Link href={`/blog/${data.slug}`} className='underline'>Продолжить чтение...</Link>
        </CardFooter>
      </Card>
    </section>
  );
}
