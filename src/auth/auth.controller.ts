import {
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger/dist/decorators';
import { AuthService } from './auth.service';
import { IsPublic } from './decorators/is-public.decorator';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { AuthRequest } from './models/AuthRequest';

@ApiTags('Authenticator')
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  // login(@Request() req: AuthRequest) {
  login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }
}
