/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Customers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Orders` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Tenant` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TenantSettings` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `TenantUsers` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `TenantUsers` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "Tenant" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "TenantSettings" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "TenantUsers" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
