import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LocalAuthGuard } from 'src/auth/guards/local.auth.guard';
import * as bcrypt from 'bcrypt';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  async addUser(
    @Body('password') userPassword: string,
    @Body('username') userName: string,
  ) {
    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(userPassword, saltOrRounds);

    const successMessage = 'User successfully registered!';

    let result;
    let safeCredentials;

    try {
      safeCredentials = await this.usersService.insert(
        userName,
        hashedPassword,
      );

      result = {
        msg: successMessage,
        userId: safeCredentials.id,
        userName: safeCredentials.username,
      };
    } catch (error) {
      throw new UnauthorizedException(error);
    }

    return result;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req): any {
    const user = req.user;
    const message = 'User successfully logged!';

    const result = {
      User: user,
      msg: message,
    };

    return result;
  }

  @Get('/logout')
  logout(@Request() req): any {
    req.session.destroy();
    return { msg: 'The user session has ended' };
  }
}
