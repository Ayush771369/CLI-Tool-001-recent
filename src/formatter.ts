import type { FileInfo } from './types.js';
import { formatSize } from './utils/formatsize.js';
import { formatTime } from './utils/formatTime.js';

export function formatFiles(
    files : FileInfo[],
    limit = 20
): string
{
    return files.slice(0, limit).map(file => {
        const modifiedAt = file.modifiedAt ? formatTime(file.modifiedAt) : 'Unknown';
        const size = formatSize(file.size);
        return `${file.name} (${size}) - Modified: ${modifiedAt}`;
    }).join('\n');
}