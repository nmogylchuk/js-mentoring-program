import {ActualTask} from '../interfaces/actualTask.interface';
import {Challenge} from '../interfaces/challenge.interface';
import {Constants} from '../constants/constants';
import {findChallengeByid, getDayBetweenStartDateAndCurrentDate} from '../utils/utils';

/**
 * Returns a current task with its status by the challenge id
 * @param challengeId - id of current challenge
 */

export function getCurrentTask(
    challengeId: number,
    challenges: Challenge[]
): ActualTask {
    const challenge: Challenge = findChallengeByid(challengeId, challenges);

    if (!challenge) {
        return null;
    }

    const dayBetween = getDayBetweenStartDateAndCurrentDate(challenge.startDate);
    const currentTask = challenge.tasksOrder[dayBetween];

    const actualCurrentTask: ActualTask = {
        id: currentTask.id,
        description: currentTask.description,
        status: Constants.PENDING_STATUS,
    };
    return actualCurrentTask;
}
