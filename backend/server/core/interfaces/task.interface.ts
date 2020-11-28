import {Document} from "mongoose";

export interface Task {
    readonly id: string;
    description: string;
}

export interface TaskDocument extends Document {
    readonly id: string;
    description: string;
}
