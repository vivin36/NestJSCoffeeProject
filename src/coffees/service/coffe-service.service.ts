import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { CreateCoffeeDto } from '../entities/Dto/create-coffee.dto';

@Injectable()
export class CoffeService {
  private coffeData: Coffee[] = [
    {
      id: 1,
      name: 'nescafe',
      company: 'TEK',
      flavours: ['Dark'],
    },
  ];

  getAllCoffees(): Coffee[] {
    return this.coffeData;
  }

  getById(id: number) {
    const searcheditem = this.coffeData.find((data) => data.id == id);
    if (!searcheditem) {
      throw new HttpException(
        `Coffee with id ${id} is not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return searcheditem;
  }

  createNew(createCoffeeDto: CreateCoffeeDto) {
    const coffee: Coffee = {
      ...createCoffeeDto,
      id: this.coffeData.length + 1,
    };
    this.coffeData = [...this.coffeData, coffee];
  }

  updateItem(id: number, updatedItem: any) {
    const updatingItem = this.coffeData.findIndex((data) => data.id == id);
    console.log(updatingItem, id);
    if (updatingItem != -1) {
      delete this.coffeData[updatingItem];
      this.coffeData = [...this.coffeData, updatedItem];
    }
  }

  deleteCoffe(id: number) {
    const coffeeItemIndex = this.coffeData.findIndex((data) => data.id == id);
    if (coffeeItemIndex) {
      this.coffeData.splice(coffeeItemIndex, 1);
    }
  }
}
