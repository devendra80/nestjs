import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';

describe('AppController (e2e)', () => {
     let app: INestApplication;
     // beforeEach(async () => {
     //   const moduleFixture: TestingModule = await Test.createTestingModule({
     //     imports: [AppModule],
     //   }).compile();
     //   app = moduleFixture.createNestApplication();
     //   await app.init();
     // });
     // it('/ (GET)', () => {
     //   return request(app.getHttpServer())
     //     .get('/')
     //     .expect(200)
     //     .expect('Hello World!');
     // });
     beforeAll(async () => {
          const moduleRef = await Test.createTestingModule({
               imports: [AppModule],
          }).compile();

          app = moduleRef.createNestApplication();
          app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
          await app.init();
     });

     afterAll(() => {
          app.close();
     });
     it.todo('should pass');
});
