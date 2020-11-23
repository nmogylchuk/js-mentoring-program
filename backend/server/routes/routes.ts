import { Request, Response, NextFunction } from 'express';
import { ChallengeController } from '../controllers/ChallengeController';
import { AchievementController } from '../controllers/AchievementController';
import { TaskController } from '../controllers/TaskController';

export class Routes {

    public challengeController: ChallengeController = new ChallengeController();

    public achievementController: AchievementController = new AchievementController();

    public taskController: TaskController = new TaskController();

    public routes({app}: { app: any }): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful!'
                });
            });

        app.route('/challenges')
            .post((req: Request, res: Response, next: NextFunction) => {
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                next();
            }, this.challengeController.startNewChallenge);

        app.route('/task/current')
            .get(this.taskController.getCurrentTask);

        app.route('/task/archive')
            .get(this.taskController.getArchiveTask);

        app.route('/achievements')
            .get(this.achievementController.getAchievements);


    }
}
