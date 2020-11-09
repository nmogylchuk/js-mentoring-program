import { ArchiveItem } from '../interfaces/archiveItem.interface';
import { Challenge } from '../interfaces/challenge.interface';
import { Task } from '../interfaces/task.interface';
import { Status } from '../interfaces/status.interface';
import { StateItem } from '../enums/stateItem.enum';

/**
 * Returns all past tasks with their results by the challenge id
 * @param challengeId - id of current challenge
 */
// type GetTaskArchive = (challengeId: number) => ArchiveItem[];

export function getTaskArchive(
  challengeId: number,
  challenges: Challenge[]
): ArchiveItem[] {
  const challenge: Challenge = challenges.find(
    (challenge) => challenge.id === challengeId
  );

  const timeBetween = new Date().getTime() - challenge.startDate.getTime();
  const daysBetween = Math.floor(timeBetween / (1000 * 3600 * 24));
  const passedTasks: Task[] = challenge.tasksOrder.slice(0, daysBetween);

  const archiveItems: ArchiveItem[] = passedTasks.map((passedTask, dayTask) => {
    const date = new Date(
      Date.now() - (daysBetween - dayTask) * (3600 * 1000 * 24)
    );
    const taskStatus: Status = {
      state: StateItem.SUCCESS,
      updated: date,
    };
    const archiveItem: ArchiveItem = {
      id: passedTask.id,
      description: passedTask.description,
      status: taskStatus,
    };
    return archiveItem;
  });
  return archiveItems;
}
