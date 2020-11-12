import { Achievement } from './achievement.interface';
import { Status } from './status.interface';
import { ActualTask } from './actualTask.interface';

export interface ActualAchievement extends Omit<Achievement, 'checkComplete'> {
  status: Status;
  tasks: ActualTask[];
}
