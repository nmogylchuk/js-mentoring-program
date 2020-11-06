import { ArchiveItem } from '../interfaces/archiveItem.interface';

/**
 * Returns all past tasks with their results by the challenge id
 * @param challengeId - id of current challenge
 */
type GetTaskArchive = (challengeId: number) => ArchiveItem[];

function getTaskArchive(challengeId: number): ArchiveItem[] {
  return;
}
