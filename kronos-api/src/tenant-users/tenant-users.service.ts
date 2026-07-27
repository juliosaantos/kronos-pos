import { Injectable } from '@nestjs/common';
import { CreateTenantUserDto } from './dto/create-tenant-user.dto';
import { UpdateTenantUserDto } from './dto/update-tenant-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TenantUsersService {

  constructor(private prisma: PrismaService) {}

  create(createTenantUserDto: CreateTenantUserDto) {
    return this.prisma.tenantUsers.create({
      data: createTenantUserDto,
    });
  }

  findAll() {
    return this.prisma.tenantUsers.findMany();
  }

  findOne(id: number) {
    return this.prisma.tenantUsers.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTenantUserDto: UpdateTenantUserDto) {
    return this.prisma.tenantUsers.update({
      where: {
        id,
      },
      data: updateTenantUserDto,
    });
  }

  remove(id: number) {
    return this.prisma.tenantUsers.delete({
      where: {
        id,
      },
    });
  }
}
