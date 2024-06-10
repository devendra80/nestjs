import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dtos';

import {
     ApiBasicAuth,
     ApiOperation,
     ApiResponse,
     ApiTags,
} from '@nestjs/swagger';

@ApiBasicAuth()
@ApiTags('auth')
@Controller('auth')
export class AuthController {

     constructor(
          private authService: AuthService
     ) {

     }

     @Post('signup')
     @ApiOperation({ summary: 'Sign Up API' })
     @ApiResponse({ status: 403, description: 'Forbidden.' })
     async signup(@Body() dto: AuthDto) {
          return await this.authService.signup(dto);
     }

     @HttpCode(HttpStatus.OK)
     @Post('login')
     @ApiResponse({
          status: 200,
          description: 'The found record',
     })
     async signin(@Body() dto: AuthDto) {
          return await this.authService.signin(dto);
     }
}
