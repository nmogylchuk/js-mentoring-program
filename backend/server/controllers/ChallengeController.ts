import { Request, Response } from 'express';
import { startNewChallenge } from '../core/services/startNewChallenge.service';
import { Task } from '../core/interfaces/task.interface';
import { loadTasks } from '../../data/tasks';
import { Challenge } from '../core/interfaces/challenge.interface';

export class ChallengeController {

    public startNewChallenge(req: Request, res: Response) {
        const tasks: Task[] = loadTasks();
        const challenges: Challenge[] = [];
        const newChallenge = startNewChallenge(tasks, challenges, 5, 3);

        res.json(newChallenge);
    }
}
