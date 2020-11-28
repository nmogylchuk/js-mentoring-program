import { Request, Response } from 'express';
import { startNewChallenge } from '../core/services/startNewChallenge.service';

export class ChallengeController {

    public startNewChallenge(req: Request, res: Response) {
        const newChallenge = startNewChallenge(req.body.challengeDuration, req.body.numberOfAchievements);
        res.json(newChallenge);
    }
}
