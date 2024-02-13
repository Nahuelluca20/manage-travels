/*
  Warnings:

  - You are about to drop the column `city` on the `hotels` table. All the data in the column will be lost.
  - You are about to drop the column `country` on the `hotels` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `post_travels` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "hotels" DROP COLUMN "city",
DROP COLUMN "country",
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "post_travels" DROP COLUMN "image",
ADD COLUMN     "image_url" TEXT;
