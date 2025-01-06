import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SignupDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  async signup(signupDto: SignupDto): Promise<{ message: string }> {
    const { username, password } = signupDto;

    const existingUser = await this.userService.findByUsername(username)
    if (existingUser) {
      throw new ConflictException('User already exists')
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    await this.userService.createUser(username, hashedPassword)
    return { message: 'user created successfully' }
  }

  async signin(signinDto: SigninDto): Promise<{ accessToken: string }> {
    const { username, password } = signinDto;
    const user = await this.userService.findByUsername(username)
    if (!user) {
      throw new NotFoundException("user Not found")
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken };
  }
}
