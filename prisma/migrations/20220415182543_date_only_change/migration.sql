-- AlterTable
ALTER TABLE `comments` MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `last_modified_date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `files` MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `last_modified_date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `ideas` MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `last_modified_date` DATE NOT NULL;

-- AlterTable
ALTER TABLE `reactions` MODIFY `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `views` MODIFY `last_visited_date` DATE NOT NULL;
