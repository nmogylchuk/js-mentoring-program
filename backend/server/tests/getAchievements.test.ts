import { StateChallenge } from '../core/enums/stateChallenge.enum';
import { loadTasks } from './../../data/tasks';
import { Task } from '../core/interfaces/task.interface';
import { Challenge } from '../core/interfaces/challenge.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { getAchievements } from '../core/services/getAchievements.service';
import { Constants } from '../core/constants/constants';
import { ActualAchievement } from '../core/interfaces/actualAchievement.interface';

const taskData: Task[] = loadTasks();
describe('getAchievements', () => {
  it('should return expected achievement length', () => {
    const actualAchievement: ActualAchievement = {
      id: 1,
      description: 'test achievement',
      status: Constants.PENDING_STATUS,
      tasks: null,
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

    const actualAchievements1 = getAchievements(1, challenges);
    expect(actualAchievements1.length).toBe(1);
    expect(actualAchievements1[0].id).toBe(1);
    expect(actualAchievements1[0].description).toBe('test achievement');
    expect(actualAchievements1[0].status.state).toBe(StateItem.PENDING);
    expect(actualAchievements1[0].status.updated.getDay()).toBe(
      new Date().getDay()
    );
  });
});
