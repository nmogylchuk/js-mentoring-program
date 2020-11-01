import { StateChallenge } from '../enums/stateChallenge';
import { Task } from './task';
import { Status } from './status';

export interface Challenge {
    readonly id: number;
    state: StateChallenge;
    startDate: Date;
    tasksOrder: Task[];
    tasksStatus: Status;
    achievementsStatus: Status;
}
