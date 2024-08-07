import { ValidationPipeOptions } from '@nestjs/common';

export const VALIDATION_PIPE_OPTIONS: ValidationPipeOptions = {
  whitelist: true,
  forbidNonWhitelisted: true,
  transformOptions: {
    enableImplicitConversion: true, //Conversion happens to the type of the class, validation afterwards
  },
  transform: true, //transforms the dto into an instance of the class of the dto
};
