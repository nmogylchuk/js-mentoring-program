import { Request, Response } from 'express';
import { getCurrentTask } from '../core/services/getCurrentTask.service';
import { getTaskArchive } from '../core/services/getTaskArchive.service';
import { Task } from "../core/interfaces/task.interface";
import { loadTasks } from '../../data/tasks';
import { Challenge } from '../core/interfaces/challenge.interface';
import { StateChallenge } from '../core/enums/stateChallenge.enum';
import { Status } from '../core/interfaces/status.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { ActualTask } from '../core/interfaces/actualTask.interface';
import { Constants } from '../core/constants/constants';
import { ActualAchievement } from '../core/interfaces/actualAchievement.interface';

export class TaskController {

    public getCurrentTask(req: Request, res: Response) {
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

        const challenges: Challenge[] = [];
        challenges.push(challenge1);
        const newChallenge = getCurrentTask(1, challenges);

        res.json(newChallenge);
    }

    public getArchiveTask(req: Request, res: Response) {
        const taskData: Task[] = loadTasks();
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

        const archiveTask = getTaskArchive(1, challenges);

        res.json(archiveTask);
    }
}
