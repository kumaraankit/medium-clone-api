import { Body, Controller, Post, Version } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostsService) { }
    
    @Version('1')
    @Post('create')
    async createPosts(@Body() createPostDto: CreatePostDto) {
        return await this.postService.createPost(createPostDto.title, createPostDto.description)
    }
}
