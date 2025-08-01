import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [PrismaService],
})
export class PostsModule {}
