import { StateItem } from '../enums/stateItem.enum';
import { Status } from '../interfaces/status.interface';

export class Constants {
    public static readonly DAY = 1000 * 3600 * 24;

    public static readonly PENDING_STATUS: Status = {
        state: StateItem.PENDING,
        updated: new Date(),
    };
  }
