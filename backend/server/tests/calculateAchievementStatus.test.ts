import('../core/interfaces/challenge.interface');
import { StateItem } from '../core/enums/stateItem.enum';
import { Status } from '../core/interfaces/status.interface';
import { AchievementDocument } from '../core/interfaces/achievement.interface';
import { loadAchievements } from '../../data/achievements';
import { calculateAchievementsStatus } from '../core/services/calculateAchievementsStatus.service';

describe('calculateAchievementsStatus', () => {
  it('should calculate expected achievementsStatus', () => {
    const achievements: AchievementDocument[] = loadAchievements();
    const tasksStatus: Status = {
      state: StateItem.SUCCESS,
      updated: new Date(),
    };

    const achievementsStatuses = calculateAchievementsStatus(
      achievements,
      tasksStatus
    );
    expect(achievementsStatuses.size).toBe(achievements.length);
    achievementsStatuses.forEach((value) => {
      expect(value.state).toBe(StateItem.SUCCESS);
      expect(value.updated.getDay()).toBe(new Date().getDay());
    });
  });
});
