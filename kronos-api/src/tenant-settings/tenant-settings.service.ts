import { Injectable } from '@nestjs/common';
import { CreateTenantSettingDto } from './dto/create-tenant-setting.dto';
import { UpdateTenantSettingDto } from './dto/update-tenant-setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TenantSettingsService {
 constructor(private prisma: PrismaService) {}

  create(createTenantSettingDto: CreateTenantSettingDto) {
    return this.prisma.tenantSettings.create({
      data: createTenantSettingDto,
    });
  }

  findAll() {
    return this.prisma.tenantSettings.findMany();
  }

  findOne(id: number) {
    return this.prisma.tenantSettings.findUnique({
      where: {
        id,
      },
    });
  }

  update(id: number, updateTenantSettingDto: UpdateTenantSettingDto) {
    return this.prisma.tenantSettings.update({
      where: {
        id,
      },
      data: updateTenantSettingDto,
    });
  }

  remove(id: number) {
    return this.prisma.tenantSettings.delete({
      where: {
        id,
      },
    });
  }
}
