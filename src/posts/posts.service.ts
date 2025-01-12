import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePost } from './entities/create-post.entity';
import { Repository } from 'typeorm';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(CreatePost)
        private readonly postRepository: Repository<CreatePost>,
    ) { }
    async createPost(title: string, description: string): Promise<CreatePost | null> {
        const post = this.postRepository.create({ title, description })
        return await this.postRepository.save(post)
    }

    async getAllPosts(): Promise<CreatePost[]> {
        return this.postRepository.find();
    }

    async updatePostById(id: string, updatePostDto: UpdatePostDto): Promise<CreatePost> {
        const post = await this.postRepository.findOne({ where: { id } });

        if (!post) {
            throw new NotFoundException("Post with the given id is not found")
        }
        Object.assign(post, updatePostDto)
        return this.postRepository.save(post)
    }
}


