import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DatabaseModule } from '../shared/modules/database.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  //imports: [TypeOrmModule.forFeature([User]), DatabaseModule],
  //imports: [DatabaseModule],
  //imports: [SequelizeModule.forFeature([User])], // use SequelizeModule.forFeature() here
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
