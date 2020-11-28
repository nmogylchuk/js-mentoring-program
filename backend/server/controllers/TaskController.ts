import { Request, Response } from 'express';
import { getCurrentTask } from '../core/services/getCurrentTask.service';
import { getTaskArchive } from '../core/services/getTaskArchive.service';

export class TaskController {

    public getCurrentTask(req: Request, res: Response) {
        const newChallenge = getCurrentTask(req.body.challengeId);

        res.json(newChallenge);
    }

    public getArchiveTask(req: Request, res: Response) {
        const archiveTask = getTaskArchive(req.body.challengeId);

        res.json(archiveTask);
    }
}
