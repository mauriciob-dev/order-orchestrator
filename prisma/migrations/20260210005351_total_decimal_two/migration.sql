/*
  Warnings:

  - You are about to alter the column `total` on the `Order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(30,2)`.

*/
-- AlterTable
ALTER TABLE `Order` MODIFY `total` DECIMAL(30, 2) NOT NULL;
