-- AlterTable
ALTER TABLE `catogories` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `comments` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `departments` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `files` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `ideas` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `reactions` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `roles` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `submissions` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `views` ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false;
