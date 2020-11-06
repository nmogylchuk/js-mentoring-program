import { ActualTask } from '../interfaces/actualTask.interface';
import { Challenge } from '../interfaces/challenge.interface';
import { StateItem } from '../enums/stateItem.enum';
import { Status } from '../interfaces/status.interface';

/**
 * Returns a current task with its status by the challenge id
 * @param challengeId - id of current challenge
 */
// type GetCurrentTask = (challengeId: number) => ActualTask;

export function getCurrentTask(
  challengeId: number,
  challenges: Challenge[]
): ActualTask {
  const challenge: Challenge = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  const timeBetween = Math.abs(
    new Date().getTime() - challenge.startDate.getTime()
  );
  const daysBetween = Math.ceil(timeBetween / (1000 * 3600 * 24));
  const currentTask = challenge.tasksOrder[daysBetween];
  
  const currentTasksStatus: Status = {
    state: StateItem.PENDING,
    updated: new Date(),
  };
  const actualCurrentTask: ActualTask = {
    id: currentTask.id,
    description: currentTask.description,
    status: currentTasksStatus,
  };
  return actualCurrentTask;
}
