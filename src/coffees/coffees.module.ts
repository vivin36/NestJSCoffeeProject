import { Module } from '@nestjs/common';
import { CoffeService } from './service/coffe-service.service';
import { CoffesController } from './controller/coffes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])],
  controllers: [CoffesController],
  providers: [CoffeService],
})
export class CoffeesModule {}
