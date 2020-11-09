import {Task} from '../interfaces/task.interface';
import {Challenge} from '../interfaces/challenge.interface';
import {StateChallenge} from '../enums/stateChallenge.enum';
import {StateItem} from '../enums/stateItem.enum';
import {Status} from '../interfaces/status.interface';
import {Achievement} from '../interfaces/achievement.interface';
import {loadAchievements} from '../../../data/achievements';

/**
 * Returns a new challenge using the following parameters: a list of tasks, a list of challenges, challenge duration
 * that by default should be 30 days, number of achievements –by default, challenge duration / 6
 * @param tasks - a list of tasks
 * @param challenges - a list of challenges
 * @param challengeDuration - challenge duration that by default should be 30 days
 * @param numberOfAchievements - number of achievements that by default should be challenge duration / 6
 */
// type StartNewChallenge = (
//     tasks: Task[],
//     challenges: Challenge[],
//     challengeDuration: number,
//     numberOfAchievements: number
// ) => Challenge;

function randomArrayShuffle<T>(array: T[]): T[] {
    if (array.length <= 1) return array;
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.ceil(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export function startNewChallenge(
    tasks: Task[],
    challenges: Challenge[],
    challengeDuration: number = 30,
    numberOfAchievements: number = Math.floor(challengeDuration / 6)
): Challenge {
    const allAchievements: Achievement[] = loadAchievements();
    const mandatoryAchievements: Achievement[] = allAchievements.filter(
        (achievement) => achievement.id === 4 || achievement.id === 5
    );
    const otherAchievements: Achievement[] = randomArrayShuffle(
        allAchievements.filter(
            (achievement) => achievement.id !== 4 && achievement.id !== 5
)
    ).slice(0, numberOfAchievements - 2);

    const achievements: Achievement[] = mandatoryAchievements.concat(
        otherAchievements
    );

    const tasksOrder: Task[] = randomArrayShuffle(tasks).slice(
        0,
        challengeDuration
    );
    const date = new Date();
    const status: Status = {
        state: StateItem.PENDING,
        updated: date,
    };

    const lastChallengeId = challenges
        .map((challenge) => challenge.id)
        .sort((a, b) => a - b)[challenges.length - 1];

    const challenge: Challenge = {
        id: lastChallengeId + 1,
        state: StateChallenge.IN_PROGRESS,
        startDate: date,
        tasksOrder: tasksOrder,
        tasksStatus: status,
        achievementsStatus: status,
        achievements: achievements,
    };
    return challenge;
}
