import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  googleCallback(@Req() req) {
    return req.user;
  }

  @Post('google')
  @UseGuards(AuthGuard('google'))
  googleLogin(@Req() req) {
    return req.user;
  }
}
