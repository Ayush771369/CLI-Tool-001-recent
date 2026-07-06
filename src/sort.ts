import type { FileInfo } from './types.js';

export function sortByModifiedDate(files: FileInfo[]): FileInfo[] {
    return [...files].sort((a, b) => {
        const aTime = a.modifiedAt?.getTime() ?? 0;
        const bTime = b.modifiedAt?.getTime() ?? 0;
        return bTime - aTime;
    });
}