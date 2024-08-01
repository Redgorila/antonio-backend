import {
  IsEmail,
  IsNumber,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(2, 50)
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsNumber()
  readonly phone: string;

  @IsString()
  readonly password: string;
}
