import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { GoogleStrategy } from './strategy/google.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'google' }), UsersModule],
  controllers: [AuthController],
  providers: [AuthService, GoogleStrategy],
})
export class AuthModule { }
