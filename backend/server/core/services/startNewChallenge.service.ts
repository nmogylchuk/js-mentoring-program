import { Task } from '../interfaces/task.interface';
import { Challenge } from '../interfaces/challenge.interface';
import { StateChallenge } from '../enums/stateChallenge.enum';
import { Achievement } from '../interfaces/achievement.interface';
import { loadAchievements } from '../../../data/achievements';
import { ActualAchievement } from '../interfaces/actualAchievement.interface';
import { ActualTask } from '../interfaces/actualTask.interface';
import { Constants } from '../constants/constants';

function createActualTask(task: Task): ActualTask {
  const actualTask: ActualTask = {
      id: task.id,
      description: task.description,
      status: Constants.PENDING_STATUS,
  };
  return actualTask;
}

function createActualAchievement(achievement: Achievement, actualTasks: ActualTask[]): ActualAchievement {
  const actualAchievement: ActualAchievement = {
      id: achievement.id,
      description: achievement.description,
      image: achievement.image,
      status: Constants.PENDING_STATUS,
      tasks: actualTasks,
  };
  return actualAchievement;
}

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

export function startNewChallenge(
  tasks: Task[],
  challenges: Challenge[],
  challengeDuration: number = 30,
  numberOfAchievements: number = Math.floor(challengeDuration / 6)
): Challenge {

  const actualTasks: ActualTask[] = tasks.map(task => createActualTask(task));
  const allAchievements: ActualAchievement[] = loadAchievements().map(achievement => createActualAchievement(achievement, actualTasks));
  const mandatoryAchievements: ActualAchievement[] = allAchievements.filter(
      (achievement) => achievement.id === 4 || achievement.id === 5
  );
  const otherAchievements: ActualAchievement[] = randomArrayShuffle(
      allAchievements.filter((achievement) => achievement.id !== 4 && achievement.id !== 5)
  ).slice(0, numberOfAchievements - 2);

  const achievements: ActualAchievement[] = mandatoryAchievements.concat(otherAchievements);

  const tasksOrder: Task[] = randomArrayShuffle(tasks).slice(0, challengeDuration);

  const lastChallengeId = challenges.map((challenge) => challenge.id)
      .sort((a, b) => a - b)[challenges.length - 1];

  const challenge: Challenge = {
      id: lastChallengeId + 1,
      state: StateChallenge.IN_PROGRESS,
      startDate: new Date(),
      tasksOrder: tasksOrder,
      tasksStatus: Constants.PENDING_STATUS,
      achievementsStatus: Constants.PENDING_STATUS,
      achievements: achievements,
  };
  return challenge;
}
