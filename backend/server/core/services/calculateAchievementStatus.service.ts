import { Achievement } from '../interfaces/achievement.interface';
import { Status } from '../interfaces/status.interface';

/**
 * Returns achievements statusfor the challenge by its achievements listand tasks status
 * @param achievements - a list of achievements
 * @param taskStatus - tasks status
 */
type CalculateAchievementStatus = (
    achievements: Achievement[],
    tasksStatus: Status
  ) => Status;

function calculateAchievementStatus (achievements: Achievement[], tasksStatus: Status): Status {
    return;
}
