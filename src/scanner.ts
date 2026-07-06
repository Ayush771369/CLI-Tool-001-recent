import { promises as fs ,Stats } from 'fs';
import type { FileInfo } from './types.js';
import path from 'path/win32';

/**
 * Validate that the given path exists and is a directory.
 * Throws an Error if the path does not exist or is not a directory.
 */
export async function validateDirectory(directory: string): Promise<Stats> {
  try {
    const stat = await fs.stat(directory);
    if (!stat.isDirectory()) {
      throw new Error(`Path is not a directory: ${directory}`);
    }
    return stat;
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'code' in err && err.code === 'ENOENT') {
      throw new Error(`Directory does not exist: ${directory}`);
    }
    throw err;
  }
}

export default validateDirectory;

export async function scan(directory: string): Promise<FileInfo[]>
{
    const files: FileInfo[] = [];
    const entries = await fs.readdir(directory, { withFileTypes: true });
    
    for (const entry of entries) {
        const fullPath = path.join(directory, entry.name);
        
        if (entry.isDirectory()) {
            const nestedFiles = await scan(fullPath);
            files.push(...nestedFiles);
        } else if (entry.isFile()) {
            const stat = await fs.stat(fullPath);
            const fileInfo: FileInfo = {
                absolutepath: fullPath,
                name: entry.name,
                sizeBytes: stat.size,
                modifiedAt: stat.mtime,
            };
            files.push(fileInfo);
        }
    }
    
    return files;
} 