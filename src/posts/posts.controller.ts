import { Body, Controller, Post, UseGuards, Version } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Version('1')
    @UseGuards(JwtAuthGuard)
    @Post('create')
    async createPosts(@Body() createPostDto: CreatePostDto) {
        return await this.postService.createPost(createPostDto.title, createPostDto.description)
    }
}
