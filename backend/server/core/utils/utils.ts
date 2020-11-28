import { Constants } from '../constants/constants';
import Challenge from '../../models/Challenge';
import {ChallengeDocument} from '../interfaces/challenge.interface';

export async function findChallengeById(id: string): Promise<ChallengeDocument> {
  const challenge: ChallengeDocument = await Challenge.findOne({id});
  return challenge;
}

export function getDayBetweenStartDateAndCurrentDate(startDate: Date): number {
  const timeBetween = new Date().getTime() - startDate.getTime();
  return Math.floor(timeBetween / Constants.DAY);
}
