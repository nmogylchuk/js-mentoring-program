import { StateChallenge } from '../core/enums/stateChallenge.enum';

import('../core/interfaces/challenge.interface');
import { loadTasks } from './../../data/tasks';
import { Task } from '../core/interfaces/task.interface';
import { Challenge } from '../core/interfaces/challenge.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { getTaskArchive } from '../core/services/getTaskArchive.service';
import { ActualAchievement } from '../core/interfaces/actualAchievement.interface';
import { Constants } from '../core/constants/constants';
import { ActualTask } from '../core/interfaces/actualTask.interface';

const taskData: Task[] = loadTasks();
describe('getTaskArchive', () => {
  it('should return expected archiveItem length', () => {
    const actualTasks: ActualTask[] = taskData
      .filter((task) => task.id === 1)
      .map((task) => {
        const actual: ActualTask = {
          id: task.id,
          description: task.description,
          status: Constants.PENDING_STATUS,
        };
        return actual;
      });

    const actualAchievement: ActualAchievement = {
      id: 1,
      description: 'test achievement',
      status: Constants.PENDING_STATUS,
      tasks: actualTasks,
    };

    const actualAchievements: ActualAchievement[] = [];
    actualAchievements.push(actualAchievement);

    const challenge1: Challenge = {
      id: 1,
      state: StateChallenge.IN_PROGRESS,
      startDate: new Date(),
      tasksOrder: taskData.slice(0, 3),
      tasksStatus: Constants.PENDING_STATUS,
      achievementsStatus: Constants.PENDING_STATUS,
      achievements: actualAchievements,
    };

    const challenges: Challenge[] = [];
    challenges.push(challenge1);

    const archiveTask1 = getTaskArchive(1, challenges);
    expect(archiveTask1.length).toBe(1);
    expect(archiveTask1[0].id).toBe(1);
    expect(archiveTask1[0].description).toBe('Go to bed before 11:00 PM');
    expect(archiveTask1[0].status.state).toBe(StateItem.PENDING);
    expect(archiveTask1[0].status.updated.getDay()).toBe(new Date().getDay());
  });
});

describe('getTaskArchive', () => {
  it('should return expected archiveItem', () => {
    const actualTasks: ActualTask[] = taskData
      .filter((task) => task.id === 5)
      .map((task) => {
        const actual: ActualTask = {
          id: task.id,
          description: task.description,
          status: Constants.PENDING_STATUS,
        };
        return actual;
      });

    const actualAchievement: ActualAchievement = {
      id: 1,
      description: 'test achievement',
      status: Constants.PENDING_STATUS,
      tasks: actualTasks,
    };

    const actualAchievements: ActualAchievement[] = [];
    actualAchievements.push(actualAchievement);

    const challenge2: Challenge = {
      id: 2,
      state: StateChallenge.IN_PROGRESS,
      startDate: new Date(),
      tasksOrder: taskData.slice(4, 7),
      tasksStatus: Constants.PENDING_STATUS,
      achievementsStatus: Constants.PENDING_STATUS,
      achievements: actualAchievements,
    };

    const challenges: Challenge[] = [];
    challenges.push(challenge2);

    const archiveTask2 = getTaskArchive(2, challenges);
    expect(archiveTask2.length).toBe(1);
    expect(archiveTask2[0].id).toBe(5);
    expect(archiveTask2[0].description).toBe(
      'Meditate for at least 10 minutes'
    );
    expect(archiveTask2[0].status.state).toBe(StateItem.PENDING);
    expect(archiveTask2[0].status.updated.getDay()).toBe(new Date().getDay());
  });
});
