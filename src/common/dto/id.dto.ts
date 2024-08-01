import { IsInt, IsPositive } from 'class-validator';

export class idDto {
  @IsInt()
  @IsPositive()
  readonly id: number;
}
