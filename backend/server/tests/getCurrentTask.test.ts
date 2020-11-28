import { StateChallenge } from '../core/enums/stateChallenge.enum';
import('../core/interfaces/challenge.interface');
import { loadTasks } from './../../data/tasks';
import { TaskDocument } from '../core/interfaces/task.interface';
import { ChallengeDocument } from '../core/interfaces/challenge.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { Status } from '../core/interfaces/status.interface';
import { getCurrentTask } from '../core/services/getCurrentTask.service';

describe('getCurrentTask', () => {
  it('should return expected task', () => {
    const taskData: TaskDocument[] = loadTasks();

    const challengeTasksStatus: Status = {
      state: StateItem.PENDING,
      updated: new Date(),
    };

    const challengeAchievmentsStatus: Status = {
      state: StateItem.PENDING,
      updated: new Date(),
    };

    const challenge1: ChallengeDocument = {
      id: 1,
      state: StateChallenge.IN_PROGRESS,
      startDate: new Date(),
      tasksOrder: taskData.slice(0, 3),
      tasksStatus: challengeTasksStatus,
      achievementsStatus: challengeAchievmentsStatus,
    };

    const challenges: ChallengeDocument[] = [];
    challenges.push(challenge1);

    const currentTask1 = getCurrentTask(1, challenges);
    expect(currentTask1.id).toBe(1);
    expect(currentTask1.description).toBe('Go to bed before 11:00 PM');
    expect(currentTask1.status.state).toBe(StateItem.PENDING);
  });
});

describe('getCurrentTask', () => {
  it('should return expected task', () => {
    const taskData: TaskDocument[] = loadTasks();

    const challengeTasksStatus: Status = {
      state: StateItem.PENDING,
      updated: new Date(),
    };

    const challengeAchievmentsStatus: Status = {
      state: StateItem.PENDING,
      updated: new Date(),
    };

    const challenge2: ChallengeDocument = {
      id: 2,
      state: StateChallenge.IN_PROGRESS,
      startDate: new Date(),
      tasksOrder: taskData.slice(4, 7),
      tasksStatus: challengeTasksStatus,
      achievementsStatus: challengeAchievmentsStatus,
    };

    const challenges: ChallengeDocument[] = [];
    challenges.push(challenge2);

    const currentTask2 = getCurrentTask(2, challenges);
    expect(currentTask2.id).toBe(5);
    expect(currentTask2.description).toBe('Meditate for at least 10 minutes');
    expect(currentTask2.status.state).toBe(StateItem.PENDING);
  });
});
