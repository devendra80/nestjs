import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
     data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
     intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
          //return next.handle().pipe(map((response) => ({
            //   code : context.switchToHttp().getResponse().statusCode,
              // message : response.message,
               //data : response.data ? response.data : []
          //})));

          return next.handle().pipe(map((response) => {
               console.log('Response:', response); // Add this line
               return {
                    code : context.switchToHttp().getResponse().statusCode,
                    message : response.message,
                    data : response.data ? response.data : []
               };
          }));
     }
}
