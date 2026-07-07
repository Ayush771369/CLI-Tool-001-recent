export interface FileInfo {
	absolutepath: string;
	name: string;
	sizeBytes: number;
	modifiedAt: Date;
}

export interface ScanOptions {
	ignoredDirectories: Set<string>;
	ignoredFiles: Set<string>;
}