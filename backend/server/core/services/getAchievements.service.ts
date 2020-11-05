import { ActualAchievement } from '../interfaces/actualAchievement.interface';

/**
 * Returns a list of actual achievements by the challenge id
 * @param challengeId - id of current challenge
 */
type GetAchievements = (challengeId: number) => ActualAchievement[];