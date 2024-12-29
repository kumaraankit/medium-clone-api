import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  constructor(
  ) { }
  private users = [
    {
      id: 1,
      username: 'testuser',
      password: bcrypt.hashSync('password123', 10), // Hashed password
    },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username)
  }
  // async findOrCreate(googleId: string, name: string, email: string): Promise<User> {
  //   let user = await this.userRepository.findOne({ where: { googleId } });
  //   if (!user) {
  //     user = this.userRepository.create({ googleId, name, email })
  //     await this.userRepository.save(user)
  //   }
  //   return user;
  // }
  // async findByGoogleId(googleId: string): Promise<User> {
  //   return this.userRepository.findOne({ where: { googleId } })
  // }
}
