import {ActualAchievement} from '../interfaces/actualAchievement.interface';
import {StateItem} from "../enums/stateItem.enum";
import {Status} from "../interfaces/status.interface";
import {Challenge} from "../interfaces/challenge.interface";
import {Task} from "../interfaces/task.interface";

/**
 * Returns a list of actual achievements by the challenge id
 * @param challengeId - id of current challenge
 */
// type GetAchievements = (challengeId: number) => ActualAchievement[];

export function getAchievements(
    challengeId: number,
    challenges: Challenge[]
): ActualAchievement[] {
    const challenge: Challenge = challenges.find(
        (challenge) => challenge.id === challengeId
    );

    const timeBetween = new Date().getTime() - challenge.startDate.getTime();
    const daysBetween = Math.floor(timeBetween / (1000 * 3600 * 24));
    const passedTasks: Task[] = challenge.tasksOrder.slice(0, daysBetween);

    const achievements: ActualAchievement[] = passedTasks.map(passedTask => {
            const taskStatus: Status = {
                state: StateItem.SUCCESS,
                updated: new Date(),
            };
            const actualAchievement: ActualAchievement = {
                id: passedTask.id,
                description: passedTask.description,
                status: taskStatus,
            };
            return actualAchievement;
        }
    );
    return achievements;
}
