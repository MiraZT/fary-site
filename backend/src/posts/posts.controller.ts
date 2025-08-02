import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Param,
  Query,
  // Delete,
} from '@nestjs/common';
import { PostsService } from './posts.service';
// import { CreatePostDto } from './dto/create-post.dto';
// import { UpdatePostDto } from './dto/update-post.dto';
import { Post as PostModel } from 'generated/prisma/client';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // @Post()
  // async create(@Body() createPostDto: CreatePostDto) {
  //   return this.postsService.create(createPostDto);
  // }

  @Get()
  async findAll(
    @Query('slug') slug?: string,
    @Query('count') count: string = '10',
    @Query('skip') skip: string = '0',
  ): Promise<PostModel[]> {
    if (slug) {
      return this.postsService.findAll({
        where: {
          slug: {
            equals: slug,
          },
        },
      });
    }

    return this.postsService.findAll({
      skip: Number(skip),
      take: Number(count),
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PostModel | null> {
    return this.postsService.findOne({ id });
  }

  // @Patch(':id')
  // async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
  //   return this.postsService.update(+id, updatePostDto);
  // }

  // @Delete(':id')
  // async remove(@Param('id') id: string) {
  //   return this.postsService.remove(+id);
  // }
}
