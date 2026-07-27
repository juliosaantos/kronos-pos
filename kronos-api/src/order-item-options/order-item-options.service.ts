import { Injectable } from '@nestjs/common';
import { CreateOrderItemOptionDto } from './dto/create-order-item-option.dto';
import { UpdateOrderItemOptionDto } from './dto/update-order-item-option.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemOptionsService {
  constructor(private prisma: PrismaService) {}

  create(createOrderItemOptionDto: CreateOrderItemOptionDto) {
    return this.prisma.orderItemsOptions.create({
      data: createOrderItemOptionDto,
    });
  }

  findAll() {
    return this.prisma.orderItemsOptions.findMany();
  }

  findOne(id: number) {
    return this.prisma.orderItemsOptions.findUnique({
      where: { 
        id
      },
    });
  }

  update(id: number, updateOrderItemOptionDto: UpdateOrderItemOptionDto) {
    return this.prisma.orderItemsOptions.update({
      where: { 
        id
      },
      data: updateOrderItemOptionDto,
    });
  }

  remove(id: number) {
    return this.prisma.orderItemsOptions.delete({
      where: { 
        id
      },
    });
  }
}
