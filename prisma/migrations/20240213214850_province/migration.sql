/*
  Warnings:

  - Added the required column `province` to the `hotels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hotels" ADD COLUMN     "province" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT;

-- AddForeignKey
ALTER TABLE "hotels" ADD CONSTRAINT "hotels_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
