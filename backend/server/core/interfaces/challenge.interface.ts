import { StateChallenge } from '../enums/stateChallenge.enum';
import { Task } from './task.interface';
import { Status } from './status.interface';
import { ActualAchievement } from './actualAchievement.interface';

export interface Challenge {
    readonly id: number;
    state: StateChallenge;
    startDate: Date;
    tasksOrder: Task[];
    tasksStatus: Status;
    achievementsStatus: Status;
    achievements?: ActualAchievement[];
}
