import { WebSocketMessageType } from './webSocketMessageType';
import { WebSocketMessage } from './webSocketMessage';
import { TaskDocument } from '../core/interfaces/task.interface';
import { Status } from '../core/interfaces/status.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { getCurrentTask } from '../core/services/getCurrentTask.service';
import { calculateAchievementsStatus } from '../core/services/calculateAchievementsStatus.service';
import { AchievementDocument } from '../core/interfaces/achievement.interface';
import Task from "../models/Task";
import Achievement from "../models/Achievement";

export class WebSocket {

    public webSocket({io}: { // @ts-ignore
        io: SocketIO.Server
    }): void {
        io.on(WebSocketMessageType.CONNECT, (socket: any) => {

            socket.on(WebSocketMessageType.CURRENT_TASK_COMPLETED, (m: WebSocketMessage) => {
                console.log('[server](message): %s', JSON.stringify(m));
                io.emit('message', m);
                this.updateCurrentTaskStatus('id');
                this.calculateGivenAchievementsStatus();

            });

            socket.on(WebSocketMessageType.DISCONNECT, () => {
                console.log('Client disconnected');
            });
        });
    }

    private async updateCurrentTaskStatus(challengeId : string): Promise<void> {
        const tasks: TaskDocument[] = await Task.find();
        const currentTask = await getCurrentTask(challengeId);

        const completedStatus: Status = {
            state: StateItem.SUCCESS,
            updated: new Date(),
        };
        currentTask.status = completedStatus;
    }

    private async calculateGivenAchievementsStatus(): Promise<void> {
        const achievements: AchievementDocument[] = await Achievement.find();
        const tasksStatus: Status = {
            state: StateItem.SUCCESS,
            updated: new Date(),
        };

        calculateAchievementsStatus(achievements, tasksStatus);
    }
}
