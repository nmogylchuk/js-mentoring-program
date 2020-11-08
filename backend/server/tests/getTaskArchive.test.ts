import {StateChallenge} from '../core/enums/stateChallenge.enum';

import('../core/interfaces/challenge.interface');
import {loadTasks} from './data/tasks';
import {Task} from '../core/interfaces/task.interface';
import {Challenge} from '../core/interfaces/challenge.interface';
import {StateItem} from '../core/enums/stateItem.enum';
import {Status} from '../core/interfaces/status.interface';
import {getTaskArchive} from "../core/services/getTaskArchive.service";
import {getAchievements} from "../core/services/getAchievements.service";

describe('Test getTaskArchive', () => {
    it('should test that getTaskArchive returns expected archiveItems', () => {
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

        const taskArchives1 = getTaskArchive(1, challenges);
        expect(taskArchives1.length).toBe(0);

        const taskArchives2 = getTaskArchive(2, challenges);
        expect(taskArchives2.length).toBe(1);
        expect(taskArchives2[0].id).toBe(5);
        expect(taskArchives2[0].description).toBe('Meditate for at least 10 minutes');
        expect(taskArchives2[0].status.state).toBe(StateItem.SUCCESS);
        expect(taskArchives2[0].status.updated.getDay()).toBe(date.getDay());
    });
});
