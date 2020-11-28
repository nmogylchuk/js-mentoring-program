import { TaskDocument } from '../interfaces/task.interface';
import { ChallengeDocument } from '../interfaces/challenge.interface';
import { StateChallenge } from '../enums/stateChallenge.enum';
import { AchievementDocument } from '../interfaces/achievement.interface';
import { Constants } from '../constants/constants';
import Task from "../../models/Task";
import Challenge from "../../models/Challenge";
import Achievement from "../../models/Achievement";

/**
* Returns a new challenge using the following parameters: a list of tasks, a list of challenges, challenge duration
* that by default should be 30 days, number of achievements –by default, challenge duration / 6
* @param tasks - a list of tasks
* @param challenges - a list of challenges
* @param challengeDuration - challenge duration that by default should be 30 days
* @param numberOfAchievements - number of achievements that by default should be challenge duration / 6
*/

function randomArrayShuffle<T>(array: T[]): T[] {
  if (array.length <= 1) return array;
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.ceil(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function startNewChallenge(
    challengeDuration: number = 30,
    numberOfAchievements: number = Math.floor(challengeDuration / 6)
): Promise<ChallengeDocument> {
    const tasks: TaskDocument[] = await Task.find();

    const allAchievements: AchievementDocument[] = await Achievement.find();
    const mandatoryAchievements: AchievementDocument[] = allAchievements.filter(
        (achievement) => achievement.description === 'Complete half of the tasks' ||
            achievement.description === 'Complete all tasks'
    );
    const otherAchievements: AchievementDocument[] = randomArrayShuffle(
        allAchievements.filter((achievement) =>
            achievement.description !== 'Complete half of the tasks' &&
            achievement.description !== 'Complete all tasks')
    ).slice(0, numberOfAchievements - 2);

    const achievements: AchievementDocument[] = mandatoryAchievements.concat(otherAchievements);

    const tasksOrder: TaskDocument[] = randomArrayShuffle(tasks).slice(0, challengeDuration);

    const challenge = new Challenge ({
        state: StateChallenge.IN_PROGRESS,
        startDate: new Date(),
        tasksOrder: tasksOrder,
        tasksStatus: Constants.PENDING_STATUS,
        achievementsStatus: Constants.PENDING_STATUS,
        achievements: achievements,
    });
    return challenge.save();
}
