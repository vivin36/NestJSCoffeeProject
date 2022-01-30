/*
using partialType
export class UpdateCoffeeDto {
  readonly name: string;
  readonly company: string;
  readonly flavours: string[];
} */

import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffee.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
