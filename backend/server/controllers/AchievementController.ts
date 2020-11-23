import { Request, Response } from 'express';
import { getAchievements } from '../core/services/getAchievements.service';
import { Task } from '../core/interfaces/task.interface';
import { loadTasks } from '../../data/tasks';
import { Challenge } from '../core/interfaces/challenge.interface';
import { ActualAchievement } from '../core/interfaces/actualAchievement.interface';
import { Constants } from '../core/constants/constants';
import { StateChallenge } from '../core/enums/stateChallenge.enum';

export class AchievementController {

    public getAchievements(req: Request, res: Response) {
        const taskData: Task[] = loadTasks();
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
        const achievements = getAchievements(1, challenges);

        res.json(achievements);
    }
}
