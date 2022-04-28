/*
  Warnings:

  - You are about to alter the column `reaction` on the `reactions` table. The data in that column could be lost. The data in that column will be cast from `Int` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `comments` MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `last_modified_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `files` MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `last_modified_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ideas` ADD COLUMN `anonymous` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `last_modified_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `reactions` MODIFY `reaction` BOOLEAN NOT NULL,
    MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `views` MODIFY `last_visited_date` DATETIME(3) NOT NULL;
