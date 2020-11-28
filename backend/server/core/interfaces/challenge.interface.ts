import { Document } from 'mongoose';
import { StateChallenge } from '../enums/stateChallenge.enum';
import { TaskDocument } from './task.interface';
import { Status } from './status.interface';
import { ActualAchievement } from './actualAchievement.interface';

export interface ChallengeDocument extends Document {
    readonly id: string;
    state: StateChallenge;
    startDate: Date;
    tasksOrder: TaskDocument[];
    tasksStatus: Status;
    achievementsStatus: Status;
    achievements?: ActualAchievement[];
}
