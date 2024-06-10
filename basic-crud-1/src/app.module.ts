import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './shared/modules/database.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from './shared/intercepters/logging.interceptor';
import { TransformInterceptor } from './shared/intercepters/transform.interceptor';
import { ErrorsInterceptor } from './shared/intercepters/errors.interceptor';
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';

@Module({
     imports: [
          ConfigModule.forRoot({ isGlobal: true }),
          //AuthModule,
          DatabaseModule,
          UserModule,
     ],
     controllers: [
          AppController,
          //UserController
     ],
     providers: [
          AppService,
          {
               provide: APP_INTERCEPTOR,
               useClass: LoggingInterceptor
          },
          {
               provide: APP_INTERCEPTOR,
               useClass: TransformInterceptor
          },
          {
               provide: APP_INTERCEPTOR,
               useClass: ErrorsInterceptor
          }
     ],
})
export class AppModule { }
