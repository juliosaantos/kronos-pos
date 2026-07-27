import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantSettingsService } from './tenant-settings.service';
import { CreateTenantSettingDto } from './dto/create-tenant-setting.dto';
import { UpdateTenantSettingDto } from './dto/update-tenant-setting.dto';

@Controller('tenant-settings')
export class TenantSettingsController {
  constructor(private readonly tenantSettingsService: TenantSettingsService) {}

  @Post()
  create(@Body() createTenantSettingDto: CreateTenantSettingDto) {
    return this.tenantSettingsService.create(createTenantSettingDto);
  }

  @Get()
  findAll() {
    return this.tenantSettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenantSettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenantSettingDto: UpdateTenantSettingDto) {
    return this.tenantSettingsService.update(+id, updateTenantSettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenantSettingsService.remove(+id);
  }
}
