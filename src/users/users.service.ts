import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) { }

  async findByUsername(username: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { username } })
  }

  async createUser(username: string, password: string): Promise<User> {
    const user = this.userRepository.create({ username, password });
    return await this.userRepository.save(user);
  }
}
