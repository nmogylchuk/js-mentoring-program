import { Status } from './status';

export interface Achievement {
    readonly id: number;
    description: string;
    image?: string;

/**
 * Returns an achievement status by tasks status
 * @param status - task status
 */
    checkComplete(tasksStatus: Status): Status;
}

