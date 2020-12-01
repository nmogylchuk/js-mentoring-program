import { ActualAchievement } from '../interfaces/actualAchievement.interface';
import { Challenge } from '../interfaces/challenge.interface';
import { findChallengeByid } from '../utils/utils';

/**
 * Returns a list of actual achievements by the challenge id
 * @param challengeId - id of current challenge
 */

export function getAchievements(
  challengeId: number,
  challenges: Challenge[]
): ActualAchievement[] {
  const challenge: Challenge = findChallengeByid(challengeId, challenges);

  return challenge.achievements;
}
