import {Challenge} from '../interfaces/challenge.interface';
import {Constants} from "../constants/constants";


export function findChallengeByid(challengeId: number, challenges: Challenge[]): Challenge {
    return challenges.find(
        (challenge) => challenge.id === challengeId
    );
}

export function getDayBetweenStartDateAndCurrentDate(startDate: Date): number {
    const timeBetween = new Date().getTime() - startDate.getTime();
    return Math.floor(timeBetween / Constants.DAY);
}
