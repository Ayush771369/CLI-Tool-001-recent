import type { FileInfo } from './types.js';
import { formatSize } from './utils/formatsize.js';
import { formatTime } from './utils/formatTime.js';

export function formatFiles(
    files: FileInfo[],
    limit = 20
): string {
    return files
        .slice(0, limit)
        .map((file, index) => {
            const modifiedAt = formatTime(file.modifiedAt)
            const size = formatSize(file.sizeBytes);

            return [
                `${index + 1}. ${file.name}`,
                `   Size: ${size}`,
                `   Modified: ${modifiedAt}`,
            ].join("\n");
        })
        .join("\n\n");
}