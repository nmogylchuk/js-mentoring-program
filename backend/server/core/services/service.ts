import { ActualTask } from '../interfaces/actualTask';
import { ActualAchievement } from '../interfaces/actualAchievement';
import { Task } from '../interfaces/task';
import { Challenge } from '../interfaces/challenge';
import { Achievement } from '../interfaces/achievement';
import { Status } from '../interfaces/status';

/**
 * Returns a current task with its status by the challenge id
 * @param challengeId - id of current challenge
 */
type GetCurrentTask = (challengeId: number) => ActualTask;

/**
 * Returns a list of actual achievements by the challenge id
 * @param challengeId - id of current challenge
 */
type GetAchievements = (challengeId: number) => ActualAchievement[];

/**
 * Returns all past tasks with their results by the challenge id
 * @param challengeId - id of current challenge
 */
type GetTaskArchive = (challengeId: number) => Task[];

/**
 * Returns a new challenge using the following parameters: a list of tasks, a list of challenges, challenge duration
 * that by default should be 30 days, number of achievements –by default, challenge duration / 6
 * @param tasks - a list of tasks
 * @param challenges - a list of challenges
 * @param challengeDuration - challenge duration that by default should be 30 days
 * @param numberOfAchievements - number of achievements that by default should be challenge duration / 6
 */
type StartNewChallenge = (
  tasks: Task[],
  challenges: Challenge[],
  challengeDuration: number,
  numberOfAchievements: number
) => Challenge;

/**
 * Returns achievements statusfor the challenge by its achievements listand tasks status
 * @param achievements - a list of achievements
 * @param taskStatus - tasks status
 */
type CalculateAchievementStatus = (
  achievements: Achievement[],
  taskStatus: Status
) => Status;
