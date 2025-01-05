import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }
  // @Get('google/callback')
  // @UseGuards(AuthGuard('google'))
  // googleCallback(@Req() req) {
  //   return req.user;
  // }

  // @Post('google')
  // @UseGuards(AuthGuard('google'))
  // googleLogin(@Req() req) {
  //   return req.user;
  // }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.authService.validateUser(body.username, body.password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.authService.login(user);
  }
}
