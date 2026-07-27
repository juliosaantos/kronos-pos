import { Module } from '@nestjs/common';
import { ProductsOptionsService } from './products-options.service';
import { ProductsOptionsController } from './products-options.controller';

@Module({
  controllers: [ProductsOptionsController],
  providers: [ProductsOptionsService],
})
export class ProductsOptionsModule {}
