import { AchievementDocument } from './achievement.interface';
import { Status } from './status.interface';
import { ActualTask } from './actualTask.interface';

export interface ActualAchievement extends Omit<AchievementDocument, 'checkComplete'> {
  status: Status;
  tasks: ActualTask[];
}
