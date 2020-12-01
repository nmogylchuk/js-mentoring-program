import { StateChallenge } from '../core/enums/stateChallenge.enum';
import('../core/interfaces/challenge.interface');
import { loadTasks } from './../../data/tasks';
import { Task } from '../core/interfaces/task.interface';
import { Challenge } from '../core/interfaces/challenge.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { Status } from '../core/interfaces/status.interface';
import { startNewChallenge } from '../core/services/startNewChallenge.service';

describe('startNewChallenge', () => {
  it('should create expected Challenge', () => {
    const tasks: Task[] = loadTasks();
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
      tasksOrder: tasks.slice(0, 3),
      tasksStatus: challengeTasksStatus,
      achievementsStatus: challengeAchievmentsStatus,
    };

    const challenge2: Challenge = {
      id: 6,
      state: StateChallenge.IN_PROGRESS,
      startDate: new Date(),
      tasksOrder: tasks.slice(4, 7),
      tasksStatus: challengeTasksStatus,
      achievementsStatus: challengeAchievmentsStatus,
    };

    const challenges: Challenge[] = [];
    challenges.push(challenge1);
    challenges.push(challenge2);

    const challenge = startNewChallenge(tasks, challenges, 5, 2);
    expect(challenge.id).toBe(7);
    expect(challenge.state).toBe(StateChallenge.IN_PROGRESS);
    expect(challenge.startDate.getDay()).toBe(new Date().getDay());
    expect(challenge.tasksOrder.length).toBe(5);
    expect(challenge.tasksStatus.state).toBe(StateItem.PENDING);
    expect(challenge.achievementsStatus.state).toBe(StateItem.PENDING);
    expect(challenge.achievements.length).toBe(2);
    expect(challenge.achievements[0].id).toBe(4);
    expect(challenge.achievements[1].id).toBe(5);
  });
});
