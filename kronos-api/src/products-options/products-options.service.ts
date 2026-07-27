import { Injectable } from '@nestjs/common';
import { CreateProductsOptionDto } from './dto/create-products-option.dto';
import { UpdateProductsOptionDto } from './dto/update-products-option.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsOptionsService {
  constructor(private prisma: PrismaService) {}

  create(createProductsOptionDto: CreateProductsOptionDto) {
    return this.prisma.productsOptions.create({
      data: createProductsOptionDto,
    });
  }

  findAll() {
    return this.prisma.productsOptions.findMany();
  }

  findOne(id: number) {
    return this.prisma.productsOptions.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateProductsOptionDto: UpdateProductsOptionDto) {
    return this.prisma.productsOptions.update({
      where: {
        id,
      },
      data: updateProductsOptionDto,
    });
  }

  remove(id: number) {
    return this.prisma.productsOptions.delete({
      where: {
        id,
      },
    });
  }
}
