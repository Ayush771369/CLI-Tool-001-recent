import { Command } from 'commander';
import { scan } from './scanner.js';
import { sortByModifiedDate } from './sort.js';

// create a program instance to ensure Command is used
const program = new Command();
program.version('0.1.0');

program
    .name('recent')
    .description("Find recently modified files inside a directory")

program
    .argument('<directory>', 'Directory to scan')
    .action(async (directory: string) => {
        try {
            const files = await scan(directory);
            const sortedFiles = sortByModifiedDate(files);
            console.log(`Found ${files.length} files in directory: ${directory}`);
            console.log(sortedFiles);
        } catch (error) {
            console.error('Error scanning directory:', error);

            process.exit(1);
        }
        // Add logic to list files in the specified path
    });

program.parse();