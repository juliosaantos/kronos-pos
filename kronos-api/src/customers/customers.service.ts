import { Injectable } from '@nestjs/common';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCustomerDto } from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
  constructor(private prisma: PrismaService) {}

  create(createCustomerDto: CreateCustomerDto) {
    return this.prisma.customers.create({
      data: createCustomerDto,
    });
  }

  findAll() {
    return this.prisma.customers.findMany({
      include: { neighborhood: true },
    });
  }

  findOne(id: number) {
    return this.prisma.customers.findUnique({
      where: {
        id,
      },
      include: { neighborhood: true },
    });
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.prisma.customers.update({
      where: {
        id,
      },
      data: updateCustomerDto,
    });
  }

  remove(id: number) {
    return this.prisma.customers.delete({
      where: {
        id,
      },
    });
  }
}
