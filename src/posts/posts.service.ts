import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePost } from './entities/create-post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(CreatePost)
        private readonly postRepository: Repository<CreatePost>
    ) { }
    async createPost(title: string, description: string): Promise<CreatePost | null> {
        const post = this.postRepository.create({ title, description })
        return await this.postRepository.save(post)
    }
}


