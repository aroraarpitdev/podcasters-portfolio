import { Controller, Post, Body, HttpCode, HttpStatus, Res, Get, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() signInDto: Record<string, any>, @Res({ passthrough: true }) res: Response) {
    const result = await this.authService.login(signInDto.username, signInDto.password);
    
    // Set HTTP-only cookie
    res.cookie('auth_token', result.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge: 2 * 60 * 60 * 1000, // 2 hours
    });

    return { success: true, access_token: result.access_token };
  }

  @HttpCode(HttpStatus.OK)
  @Get('verify')
  async verify(@Req() req: Request) {
    const token = req.cookies['auth_token'];
    if (!token) {
      return { authenticated: false };
    }
    const { valid, payload } = await this.authService.verifyToken(token);
    return { authenticated: valid, user: payload };
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('auth_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    });
    return { success: true };
  }
}
