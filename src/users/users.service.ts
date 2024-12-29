import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>,
  ) { }
  async findOrCreate(googleId: string, name: string, email: string): Promise<User> {
    let user = await this.userRepository.findOne({ where: { googleId } });
    if (!user) {
      user = this.userRepository.create({ googleId, name, email })
      await this.userRepository.save(user)
    }
    return user;
  }
  async findByGoogleId(googleId: string): Promise<User> {
    return this.userRepository.findOne({ where: { googleId } })
  }
}
