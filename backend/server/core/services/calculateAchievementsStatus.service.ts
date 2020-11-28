import { AchievementDocument } from '../interfaces/achievement.interface';
import { Status } from '../interfaces/status.interface';

/**
 * Returns achievements statusfor the challenge by its achievements listand tasks status
 * @param achievements - a list of achievements
 * @param taskStatus - tasks status
 */

export function calculateAchievementsStatus(
  achievements: AchievementDocument[],
  tasksStatus: Status
): Map<string, Status> {
  const statuses: Map<string, Status> = new Map();

  achievements.forEach((achievement) => {
    statuses.set(achievement.id, tasksStatus);
  });

  return statuses;
}
