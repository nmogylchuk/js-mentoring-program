import { ActualTask } from '../interfaces/actualTask.interface';

/**
 * Returns a current task with its status by the challenge id
 * @param challengeId - id of current challenge
 */
type GetCurrentTask = (challengeId: number) => ActualTask;