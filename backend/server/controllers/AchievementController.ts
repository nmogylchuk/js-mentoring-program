import { Request, Response } from 'express';
import { getAchievements } from '../core/services/getAchievements.service';

export class AchievementController {

    public getAchievements(req: Request, res: Response) {
        const achievements = getAchievements(req.body.id);

        res.json(achievements);
    }
}
