import { Injectable } from '@nestjs/common';
// import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

const posts: Post[] = [
  {
    id: 'uuid1',
    title: 'First post',
    content: 'This is the first post',
    user_id: '1',
    created_at: '2025-07-31T16:17:00Z',
  },
  {
    id: 'uuid2',
    title: 'Second post',
    content: 'This is the second post',
    user_id: '1',
    created_at: '2025-07-31T16:24:00Z',
  },
];

@Injectable()
export class PostsService {
  // create(createPostDto: CreatePostDto) {
  //   return 'WIP: This action adds a new post';
  // }

  findAll(): Post[] {
    return [...posts];
  }

  findOne(id: string): Post | undefined {
    return posts.find((post) => post.id === id);
  }

  // update(id: number, updatePostDto: UpdatePostDto) {
  //   return `WIP: This action updates a #${id} post`;
  // }

  // remove(id: number) {
  //   return `WIP: This action removes a #${id} post`;
  // }
}
