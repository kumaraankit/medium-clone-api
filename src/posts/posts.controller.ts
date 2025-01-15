import { Body, Controller, Delete, Get, Param, Patch, Post, Version } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { GetPostDto } from './dto/get-posts.dto';
import { ApiParam, ApiResponse } from '@nestjs/swagger';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller({ path: 'posts', version: '1' })
export class PostsController {
    constructor(private readonly postService: PostsService) { }

    @Post('create')
    async createPosts(@Body('title') title: string,
        @Body('description') description: string,
        @Body('body') body: string,
        @Body('authorId') authorId: number) {
        return await this.postService.createPost(title, description, body, authorId)
    }

    @Get('getposts')
    @ApiResponse({
        status: 200,
        description: 'List of all posts.',
        type: [GetPostDto],
    })
    // async getAllPosts(): Promise<GetPostDto[]> {
    //     return this.postService.getAllPosts()
    // }

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
    // async updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto): Promise<CreatePostDto> {
    //     return this.postService.updatePostById(id, updatePostDto)
    // }
    @Delete(':id')
    @ApiParam({
        name: 'id',
        type: Number,
        description: 'The ID of the post to delete',
        example: 1,
    })
    @ApiResponse({
        status: 200,
        description: 'Post successfully deleted',
    })
    @ApiResponse({
        status: 404,
        description: 'Post not found',
    })
    async deletePost(@Param('id') id: string): Promise<{ message: string }> {
        await this.postService.deletePost(id)
        return { message: `Post with ID ${id} deleted successfully` }
    }
}
