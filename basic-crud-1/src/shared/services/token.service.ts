import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class TokenService {
     
     constructor(
          private jwt: JwtService,
          private config: ConfigService
     ) {

     }

     async signToken(userId: string, email: string) {
          const payload = {
               sub: userId,
               email,
          };
          const secret = this.config.get('JWTSECRET');
          const token = await this.jwt.signAsync(payload, {
               expiresIn: '15m',
               secret: secret,
          });
          return token;
     }
}
