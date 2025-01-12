import { Body, Controller, Get, Param, Patch, Post, Version } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostDto } from './dto/get-posts.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller({ path: 'posts', version: '1' })
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Post('create')
    async createPosts(@Body() createPostDto: CreatePostDto) {
        return await this.postService.createPost(createPostDto.title, createPostDto.description)
    }

    @Get('getposts')
    @ApiResponse({
        status: 200,
        description: 'List of all posts.',
        type: [GetPostDto],
    })
    async getAllPosts(): Promise<GetPostDto[]> {
        return this.postService.getAllPosts()
    }

    @Patch(':id')
    @ApiResponse({
        status: 200,
        description: 'The updated post.',
        type: Post,
    })
    @ApiResponse({
        status: 404,
        description: 'Post not found.',
    })
    async updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto): Promise<CreatePostDto> {
        return this.postService.updatePostById(id, updatePostDto)
    }
}
