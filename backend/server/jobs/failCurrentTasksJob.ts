import * as schedule from 'node-schedule';
import { Task } from '../core/interfaces/task.interface';
import { loadTasks } from '../../data/tasks';
import { Status } from '../core/interfaces/status.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { Challenge } from '../core/interfaces/challenge.interface';
import { StateChallenge } from '../core/enums/stateChallenge.enum';
import { getCurrentTask } from '../core/services/getCurrentTask.service';

export class FailCurrentTasksJob {

    /**
     * Fail all current tasks at 12:00 AM each day
     */
    public failCurrentTasks() {
        const cronExpression = '0 0 0 ? * * *';

        schedule.scheduleJob(cronExpression, () => {
            console.log('Update all current tasks status to FAILURE.');
            this.updateCurrentTaskStatus();
        });
    }

    private updateCurrentTaskStatus(): void {
        const taskData: Task[] = loadTasks();
        const challengeTasksStatus: Status = {
            state: StateItem.PENDING,
            updated: new Date(),
        };
        const challengeAchievementsStatus: Status = {
            state: StateItem.PENDING,
            updated: new Date(),
        };
        const challenge1: Challenge = {
            id: 1,
            state: StateChallenge.IN_PROGRESS,
            startDate: new Date(),
            tasksOrder: taskData.slice(0, 3),
            tasksStatus: challengeTasksStatus,
            achievementsStatus: challengeAchievementsStatus,
        };

        const challenges: Challenge[] = [];
        challenges.push(challenge1);
        const currentTask = getCurrentTask(1, challenges);

        const completedStatus: Status = {
            state: StateItem.FAILURE,
            updated: new Date(),
        };
        currentTask.status = completedStatus;
    }
}
