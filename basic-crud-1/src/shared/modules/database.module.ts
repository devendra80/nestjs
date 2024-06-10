import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../../user/entities/user.entity';
import dbconfig from '../config/database.config';
import { TypeOrmModule } from '@nestjs/typeorm';

const env = process.env.ENVIRONMENT || 'development';
console.log(dbconfig[env]);

@Module({
     imports: [
            TypeOrmModule.forRoot({
               type: 'postgres',
               host: dbconfig[env].host,
               port: +dbconfig[env].port,
               username: dbconfig[env].username,
               password: dbconfig[env].password,
               database: dbconfig[env].database,
               entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
               //entities: [User],
               synchronize: true,
               //logging: true,
          })
     ]
})
export class DatabaseModule { }
