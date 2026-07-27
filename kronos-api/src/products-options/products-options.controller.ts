import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsOptionsService } from './products-options.service';
import { CreateProductsOptionDto } from './dto/create-products-option.dto';
import { UpdateProductsOptionDto } from './dto/update-products-option.dto';

@Controller('products-options')
export class ProductsOptionsController {
  constructor(private readonly productsOptionsService: ProductsOptionsService) {}

  @Post()
  create(@Body() createProductsOptionDto: CreateProductsOptionDto) {
    return this.productsOptionsService.create(createProductsOptionDto);
  }

  @Get()
  findAll() {
    return this.productsOptionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsOptionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductsOptionDto: UpdateProductsOptionDto) {
    return this.productsOptionsService.update(+id, updateProductsOptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsOptionsService.remove(+id);
  }
}
