cimport { ActualAchievement } from '../interfaces/actualAchievement.interface';
import { ChallengeDocument } from '../interfaces/challenge.interface';
import { findChallengeById } from '../utils/utils';

/**
 * Returns a list of actual achievements by the challenge id
 * @param challengeId - id of current challenge
 */

export async function getAchievements(
    challengeId: string
): Promise<ActualAchievement[]> {
  const challenge: ChallengeDocument = await findChallengeById(challengeId);
  return await challenge.achievements;
}
