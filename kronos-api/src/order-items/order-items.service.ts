import { Injectable } from '@nestjs/common';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OrderItemsService {
  constructor(private prisma: PrismaService) {}

  create(createOrderItemDto: CreateOrderItemDto) {
    return this.prisma.orderItems.create({
      data: createOrderItemDto,
    });
  }

  findAll() {
    return this.prisma.orderItems.findMany();
  }

  findOne(id: number) {
    return this.prisma.orderItems.findUnique({
      where: { 
        id
      },
    });
  }

  update(id: number, updateOrderItemDto: UpdateOrderItemDto) {
    return this.prisma.orderItems.update({
      where: { 
        id
      },
      data: updateOrderItemDto,
    });
  }

  remove(id: number) {
    return this.prisma.orderItems.delete({
      where: { 
        id
      },
    });
  }
}
