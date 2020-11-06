import { Task } from '../interfaces/task.interface';
import { Challenge } from '../interfaces/challenge.interface';

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

function startNewChallenge(
  tasks: Task[],
  challenges: Challenge[],
  challengeDuration: number,
  numberOfAchievements: number
): Challenge {
  return;
}
