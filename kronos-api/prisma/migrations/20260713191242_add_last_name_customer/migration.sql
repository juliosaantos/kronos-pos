/*
  Warnings:

  - You are about to drop the column `name` on the `Customers` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `Customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customers" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Customers" ADD CONSTRAINT "Customers_neighborhoodId_fkey" FOREIGN KEY ("neighborhoodId") REFERENCES "Neighborhoods"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
