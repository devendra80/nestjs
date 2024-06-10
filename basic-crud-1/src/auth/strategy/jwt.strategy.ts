import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
     constructor(
          config: ConfigService
     ) {
          super({
               jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
               secretOrKey: config.get('JWTSECRET'),
          });
     }

     async validate(payload: { sub: string; email: string }) {
          //      const user = await this.prisma.user.findUnique({
          //           where: {
          //                email: payload.email,
          //           },
          //      });
          //      // console.log(user);
          //      delete user.hash;
          //      return user;
          // }
     }
}