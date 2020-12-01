import { WebSocketMessageType } from './webSocketMessageType';
import { WebSocketMessage } from './webSocketMessage';
import { Task } from '../core/interfaces/task.interface';
import { loadTasks } from '../../data/tasks';
import { Status } from '../core/interfaces/status.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { Challenge } from '../core/interfaces/challenge.interface';
import { StateChallenge } from '../core/enums/stateChallenge.enum';
import { getCurrentTask } from '../core/services/getCurrentTask.service';
import { calculateAchievementsStatus } from '../core/services/calculateAchievementsStatus.service';
import { Achievement } from '../core/interfaces/achievement.interface';
import { loadAchievements } from '../../data/achievements';

export class WebSocket {

    public webSocket({io}: { // @ts-ignore
        io: SocketIO.Server
    }): void {
        io.on(WebSocketMessageType.CONNECT, (socket: any) => {

            socket.on(WebSocketMessageType.CURRENT_TASK_COMPLETED, (m: WebSocketMessage) => {
                console.log('[server](message): %s', JSON.stringify(m));
                io.emit('message', m);
                this.updateCurrentTaskStatus();
                this.calculateGivenAchievementsStatus();

            });

            socket.on(WebSocketMessageType.DISCONNECT, () => {
                console.log('Client disconnected');
            });
        });
    }

    private updateCurrentTaskStatus(): void {
        const taskData: Task[] = loadTasks();
        const challengeTasksStatus: Status = {
            state: StateItem.PENDING,
            updated: new Date(),
        };
        const challengeAchievementsStatus: Status = {
            state: StateItem.PENDING,
            updated: new Date(),
        };
        const challenge1: Challenge = {
            id: 1,
            state: StateChallenge.IN_PROGRESS,
            startDate: new Date(),
            tasksOrder: taskData.slice(0, 3),
            tasksStatus: challengeTasksStatus,
            achievementsStatus: challengeAchievementsStatus,
        };

        const challenges: Challenge[] = [];
        challenges.push(challenge1);
        const currentTask = getCurrentTask(1, challenges);

        const completedStatus: Status = {
            state: StateItem.SUCCESS,
            updated: new Date(),
        };
        currentTask.status = completedStatus;
    }

    private calculateGivenAchievementsStatus(): void {
        const achievements: Achievement[] = loadAchievements();
        const tasksStatus: Status = {
            state: StateItem.SUCCESS,
            updated: new Date(),
        };

        calculateAchievementsStatus(achievements, tasksStatus);
    }
}
