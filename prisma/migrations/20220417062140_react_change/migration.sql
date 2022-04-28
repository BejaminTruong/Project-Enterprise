-- AlterTable
ALTER TABLE `comments` MODIFY `last_modified_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `files` MODIFY `last_modified_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ideas` MODIFY `last_modified_date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `reactions` MODIFY `reaction` BOOLEAN NULL;

-- AlterTable
ALTER TABLE `views` MODIFY `last_visited_date` DATETIME(3) NOT NULL;
