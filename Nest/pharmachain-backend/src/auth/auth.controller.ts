/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(
    @Body() body: { username: string; email: string; password: string },
  ) {
    const user = await this.authService.register(
      body.username,
      body.email,
      body.password,
    );

    // Ne pas retourner le mot de passe
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return {
      message: 'User registered successfully',
      user: result,
    };
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.login(body.email, body.password);

    // Ne pas retourner le mot de passe
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;
    return {
      message: 'Login successful',
      user: result,
    };
  }

  @Get('users')
  async findAll() {
    const users = await this.authService.findAll();
    // Ne pas retourner les mots de passe
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return users.map(({ password, ...user }) => user);
  }
}

