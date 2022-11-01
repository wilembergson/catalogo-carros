/*
  Warnings:

  - You are about to drop the column `login` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userLogin]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userLogin` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "users_login_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "login",
ADD COLUMN     "userLogin" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_userLogin_key" ON "users"("userLogin");
