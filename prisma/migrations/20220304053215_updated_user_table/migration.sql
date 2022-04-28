/*
  Warnings:

  - A unique constraint covering the columns `[staff_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `avatar` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `avatar` VARCHAR(191) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `token` JSON NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_staff_id_key` ON `users`(`staff_id`);

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
