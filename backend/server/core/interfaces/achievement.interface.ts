import {Document} from 'mongoose';

export interface AchievementDocument extends Document {
    readonly id: string;
    description: string;
    image?: string;
}
