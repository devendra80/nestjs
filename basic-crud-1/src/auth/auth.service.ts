import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthDto } from './dtos';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/shared/models/user.model';
import { TokenService } from 'src/shared/services/token.service';

@Injectable()
export class AuthService {
     constructor(
          @InjectModel(User)
          private userModel: typeof User,
          private _tokenService: TokenService
     ) { }

     async signup(dto: AuthDto) {
          try {
               const salt = await bcrypt.genSalt();
               const hash = await bcrypt.hash(dto.password, salt);
               let payload = { ...dto, password: hash };
               const user = await this.userModel.create(payload);
               if (user) {
                    const token = await this._tokenService.signToken(user.id, user.email);
                    let response = {
                         message: '',
                         result: token
                    }
                    return response;
               }
          } catch (err) {
               throw err;
          }
     }

     async signin(dto: AuthDto) {
          try {
               let response = {
                    message: '',
                    data: null
               }
               const user: User = await this.userModel.findOne({
                    where: { email: dto.email },
               });
               if (user) {
                    const matched = await bcrypt.compare(dto.password, user.password);
                    if (matched) {
                         const token = await this._tokenService.signToken(user.id, user.email);
                         response.data = token;
                         return response;
                    } else {
                         return response;
                    }

               } else {
                    // throw new ForbiddenException('Credentials Incorrect');
               }
          } catch (err) {
               // if (err instanceof PrismaClientKnownRequestError) {
               //      if (err.code === 'P2002') {
               //           throw new ForbiddenException('Credentials Error');
               //      }
               // }
               throw err;
          }
     }
}
