import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transformOptions: {
          enableImplicitConversion: true, //Conversion happens to the type of the class, validation afterwards
        },
        // transform: true, transforms the dto into an instance of the class of the dto
      }),
    },
  ],
})
export class CommonModule {}
