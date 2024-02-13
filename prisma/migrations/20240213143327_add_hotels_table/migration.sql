/*
  Warnings:

  - Added the required column `hotel_url` to the `hotels` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stars` to the `hotels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "hotels" ADD COLUMN     "hotel_url" TEXT NOT NULL,
ADD COLUMN     "stars" INTEGER NOT NULL,
ALTER COLUMN "image" DROP NOT NULL;
