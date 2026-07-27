import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TenantModule } from './tenant/tenant.module';
import { TenantUsersModule } from './tenant-users/tenant-users.module';
import { TenantSettingsModule } from './tenant-settings/tenant-settings.module';
import { PaymentMethodModule } from './payment-method/payment-method.module';
import { NeighborhoodsModule } from './neighborhoods/neighborhoods.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { ProductsOptionsModule } from './products-options/products-options.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { OrderItemsModule } from './order-items/order-items.module';
import { OrderItemOptionsModule } from './order-item-options/order-item-options.module';

@Module({
  imports: [
    PrismaModule, 
    UsersModule, 
    TenantModule, 
    TenantUsersModule, TenantSettingsModule, PaymentMethodModule, NeighborhoodsModule, CategoriesModule, ProductsModule, ProductsOptionsModule, CustomersModule, OrdersModule, OrderItemsModule, OrderItemOptionsModule
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
