/*
  Warnings:

  - You are about to drop the column `created_at` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `neighborhood_id` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_fee` on the `Neighborhoods` table. All the data in the column will be lost.
  - You are about to drop the column `estimated_delivery_time` on the `Neighborhoods` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `Neighborhoods` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `Neighborhoods` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `PaymentMethod` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `PaymentMethod` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `image_url` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `is_available` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `is_available` on the `ProductsOptions` table. All the data in the column will be lost.
  - You are about to drop the column `product_id` on the `ProductsOptions` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `ProductsOptions` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `logo_url` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `allow_delivery` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `allow_dine_in` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `allow_pickup` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `closing_time` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `opening_time` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `TenantUsers` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `TenantUsers` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `TenantUsers` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `TenantUsers` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `TenantUsers` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firebase_uid` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `is_active` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `photo_url` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[firebaseUid]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `neighborhoodId` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deliveryFee` to the `Neighborhoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `estimatedDeliveryTime` to the `Neighborhoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `Neighborhoods` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `PaymentMethod` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productId` to the `ProductsOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `ProductsOptions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `logoUrl` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allowDelivery` to the `TenantSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allowDineIn` to the `TenantSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `allowPickup` to the `TenantSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `closingTime` to the `TenantSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `openingTime` to the `TenantSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `TenantSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TenantSettings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenantId` to the `TenantUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `TenantUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `TenantUsers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firebaseUid` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "OrderType" AS ENUM ('DELIVERY', 'PICKUP', 'DINE_IN');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('ACCEPTED', 'PENDING', 'IN_PROGRESS', 'READY', 'DELIVERED', 'CANCELED');

-- DropIndex
DROP INDEX "User_firebase_uid_key";

-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "created_at",
DROP COLUMN "is_active",
DROP COLUMN "neighborhood_id",
DROP COLUMN "tenant_id",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "neighborhoodId" INTEGER NOT NULL,
ADD COLUMN     "tenantId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Neighborhoods" DROP COLUMN "delivery_fee",
DROP COLUMN "estimated_delivery_time",
DROP COLUMN "is_active",
DROP COLUMN "tenant_id",
ADD COLUMN     "deliveryFee" INTEGER NOT NULL,
ADD COLUMN     "estimatedDeliveryTime" INTEGER NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PaymentMethod" DROP COLUMN "is_active",
DROP COLUMN "tenant_id",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "category_id",
DROP COLUMN "image_url",
DROP COLUMN "is_available",
DROP COLUMN "tenant_id",
ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "imageUrl" TEXT NOT NULL,
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductsOptions" DROP COLUMN "is_available",
DROP COLUMN "product_id",
DROP COLUMN "tenant_id",
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "productId" INTEGER NOT NULL,
ADD COLUMN     "tenantId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "created_at",
DROP COLUMN "is_active",
DROP COLUMN "logo_url",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "logoUrl" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TenantSettings" DROP COLUMN "allow_delivery",
DROP COLUMN "allow_dine_in",
DROP COLUMN "allow_pickup",
DROP COLUMN "closing_time",
DROP COLUMN "created_at",
DROP COLUMN "opening_time",
DROP COLUMN "tenant_id",
DROP COLUMN "updated_at",
ADD COLUMN     "allowDelivery" BOOLEAN NOT NULL,
ADD COLUMN     "allowDineIn" BOOLEAN NOT NULL,
ADD COLUMN     "allowPickup" BOOLEAN NOT NULL,
ADD COLUMN     "closingTime" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "openingTime" TEXT NOT NULL,
ADD COLUMN     "tenantId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "TenantUsers" DROP COLUMN "created_at",
DROP COLUMN "is_active",
DROP COLUMN "tenant_id",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "tenantId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "created_at",
DROP COLUMN "firebase_uid",
DROP COLUMN "is_active",
DROP COLUMN "photo_url",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "firebaseUid" TEXT NOT NULL,
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "photoUrl" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "customerId" INTEGER NOT NULL,
    "orderNumber" INTEGER NOT NULL,
    "type" "OrderType" NOT NULL,
    "status" "OrderStatus" NOT NULL,
    "paymentMethodId" INTEGER NOT NULL,
    "subtotal" DECIMAL(65,30) NOT NULL,
    "discount" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "deliveryFee" DECIMAL(65,30) NOT NULL,
    "notes" TEXT NOT NULL,
    "createdByUserId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItems" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "orderId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "productName" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "notes" TEXT NOT NULL,

    CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrderItemsOptions" (
    "id" SERIAL NOT NULL,
    "tenantId" INTEGER NOT NULL,
    "orderItemId" INTEGER NOT NULL,
    "productOptionId" INTEGER NOT NULL,
    "productOptionName" TEXT NOT NULL,
    "unitPrice" DECIMAL(65,30) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrderItemsOptions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_firebaseUid_key" ON "User"("firebaseUid");
