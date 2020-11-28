import * as schedule from 'node-schedule';
import { Status } from '../core/interfaces/status.interface';
import { StateItem } from '../core/enums/stateItem.enum';
import { getCurrentTask } from '../core/services/getCurrentTask.service';

export class FailCurrentTasksJob {

    /**
     * Fail all current tasks at 12:00 AM each day
     */
    public failCurrentTasks() {
        const cronExpression = '0 0 0 ? * * *';

        schedule.scheduleJob(cronExpression, () => {
            console.log('Update all current tasks status to FAILURE.');
            this.updateCurrentTaskStatus('id');
        });
    }

    private async updateCurrentTaskStatus(challengeId : string): Promise<void> {
        const currentTask = await getCurrentTask(challengeId);

        const completedStatus: Status = {
            state: StateItem.FAILURE,
            updated: new Date(),
        };
        currentTask.status = completedStatus;
    }
}
