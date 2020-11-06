import { StateChallenge } from '../core/enums/stateChallenge.enum';
import('../core/interfaces/challenge.interface');
import { loadTasks } from './data/tasks';
import { Task } from '../core/interfaces/task.interface';
import { Challenge } from '../core/interfaces/challenge.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { Status } from '../core/interfaces/status.interface';
import { getCurrentTask } from '../core/services/getCurrentTask.service';

describe('Test getCurrentTask', () => {
  it('should test that getCurrentTask returns expectes task', () => {
    const taskData: Task[] = loadTasks();

    const challengeTasksStatus: Status = {
      state: StateItem.PENDING,
      updated: new Date(),
    };

    const challengeAchievmentsStatus: Status = {
      state: StateItem.PENDING,
      updated: new Date(),
    };

    const challenge1: Challenge = {
      id: 1,
      state: StateChallenge.IN_PROGRESS,
      startDate: new Date(),
      tasksOrder: taskData.slice(0, 3),
      tasksStatus: challengeTasksStatus,
      achievementsStatus: challengeAchievmentsStatus,
    };

    const date = new Date(Date.now() - 3600 * 1000 * 24);

    const challenge2: Challenge = {
      id: 2,
      state: StateChallenge.IN_PROGRESS,
      startDate: date,
      tasksOrder: taskData.slice(4, 7),
      tasksStatus: challengeTasksStatus,
      achievementsStatus: challengeAchievmentsStatus,
    };

    const challenges: Challenge[] = [];
    challenges.push(challenge1);
    challenges.push(challenge2);

    const currentTask1 = getCurrentTask(1, challenges);
    expect(1).toBe(currentTask1.id);
    expect('Go to bed before 11:00 PM').toBe(currentTask1.description);
    expect(StateItem.PENDING).toBe(currentTask1.status.state);


    const currentTask2 = getCurrentTask(2, challenges);
    expect(7).toBe(currentTask2.id);
    expect('Eat your breakfast in bed').toBe(currentTask2.description);
    expect(StateItem.PENDING).toBe(currentTask2.status.state);
  });
});
