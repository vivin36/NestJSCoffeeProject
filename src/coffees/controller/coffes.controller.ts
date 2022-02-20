import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoffeService } from 'src/coffees/service/coffe-service.service';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { CreateCoffeeDto } from '../entities/Dto/create-coffee.dto';
import { UpdateCoffeeDto } from '../entities/Dto/update-coffee.dto';

@Controller('coffes')
export class CoffesController {
  constructor(private readonly coffeService: CoffeService) {}

  @Get()
  findAll() {
    return this.coffeService.getAllCoffees();
  }

  @Get('/paginate')
  paginate(@Query() queryParams1) {
    const { id, offset } = queryParams1;
    console.log(queryParams1);
    return `Id passed as queryParams is ${id} and offset  ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeService.getById(id);
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  saveData(@Body() coffeData: CreateCoffeeDto) {
    return this.coffeService.createNew(coffeData);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  updateData(@Param('id') id: number, @Body() body: UpdateCoffeeDto) {
    return this.coffeService.updateItem(id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  deleteData(@Param('id') id: number) {
    return this.coffeService.deleteCoffe(id);
  }
}
