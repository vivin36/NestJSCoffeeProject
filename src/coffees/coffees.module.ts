import { Module } from '@nestjs/common';
import { CoffeService } from './service/coffe-service.service';
import { CoffesController } from './controller/coffes.controller';

@Module({
  imports: [],
  controllers: [CoffesController],
  providers: [CoffeService],
})
export class CoffeesModule {}
