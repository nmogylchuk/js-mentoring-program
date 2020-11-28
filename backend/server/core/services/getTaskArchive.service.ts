import { ArchiveItem } from '../interfaces/archiveItem.interface';
import { getAchievements } from './getAchievements.service';
import { ActualAchievement } from '../interfaces/actualAchievement.interface';
import { ActualTask } from '../interfaces/actualTask.interface';

function getArchiveTasks(actualTasks: ActualTask[]): ArchiveItem[] {
  return actualTasks.map((task) => {
    const archiveItem: ArchiveItem = {
      id: task.id,
      description: task.description,
      status: task.status,
    };
    return archiveItem;
  });
}

/**
 * Returns all past tasks with their results by the challenge id
 * @param challengeId - id of current challenge
 */

export async function getTaskArchive(
    challengeId: string
): Promise<ArchiveItem[]> {
  const actualAchievements: ActualAchievement[] = await getAchievements(challengeId);

  return actualAchievements.flatMap((actualAchievement) =>
      getArchiveTasks(actualAchievement.tasks)
  );
}

