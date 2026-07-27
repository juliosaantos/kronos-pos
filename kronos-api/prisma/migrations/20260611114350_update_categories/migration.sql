/*
  Warnings:

  - You are about to drop the column `is_active` on the `Categories` table. All the data in the column will be lost.
  - You are about to drop the column `tenant_id` on the `Categories` table. All the data in the column will be lost.
  - Added the required column `tenantId` to the `Categories` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Categories" DROP COLUMN "is_active",
DROP COLUMN "tenant_id",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "tenantId" INTEGER NOT NULL;
