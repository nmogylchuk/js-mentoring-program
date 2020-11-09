import {Achievement} from './../server/core/interfaces/achievement.interface';

export function loadAchievements(): Achievement[] {
    return [
        {
            id: 1,
            description: 'Complete each task 7 days in a row'
        },
        {
            id: 2,
            description: 'Complete five tasks before 8:00 AM'

        },
        {
            id: 3,
            description: 'Complete 4 Monday\'s tasks'

        },
        {
            id: 4,
            description: 'Complete half of the tasks'

        },
        {
            id: 5,
            description: 'Complete all tasks'

        }
    ];
}
