export type Post = {
  id: string;
  slug: string;
  title: string;
  description?: string;
  content: string;
  authorId: string;
  createdAt: Date;
  updatedAt?: Date;
  author: {
    jobName?: string;
    username: string;
  };
};
