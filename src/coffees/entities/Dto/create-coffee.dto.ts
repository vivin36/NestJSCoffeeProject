import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly company: string;
  @IsString({ each: true })
  readonly flavours: string[];
}
