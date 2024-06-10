import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/shared/models/user.model';
import { TokenService } from 'src/shared/services/token.service';

@Module({
     imports: [JwtModule.register({}), SequelizeModule.forFeature([User])],
     controllers: [AuthController],
     providers: [AuthService, JwtStrategy, TokenService],
})
export class AuthModule { }
