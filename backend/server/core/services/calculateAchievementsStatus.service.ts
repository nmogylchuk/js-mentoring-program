import { Achievement } from '../interfaces/achievement.interface';
import { Status } from '../interfaces/status.interface';

/**
 * Returns achievements statusfor the challenge by its achievements listand tasks status
 * @param achievements - a list of achievements
 * @param taskStatus - tasks status
 */
// type CalculateAchievementStatus = (
//     achievements: Achievement[],
//     tasksStatus: Status
//   ) => Status;

export function calculateAchievementsStatus(
  achievements: Achievement[],
  tasksStatus: Status
): Map<number, Status> {
  const statuses: Map<number, Status> = new Map();

  achievements.forEach((achievement) => {
    statuses.set(achievement.id, tasksStatus);
  });

  return statuses;
}
