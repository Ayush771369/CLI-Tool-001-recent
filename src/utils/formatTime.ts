export function formatTime(date: Date): string {
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    let timeAgo = '';
    if (diffInSeconds < 5) {
        timeAgo = 'Just now';
    } else if (diffInSeconds < 60) {
        timeAgo = `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
        timeAgo = `${Math.floor(diffInSeconds / 60)} minutes ago`;
    } else if (diffInSeconds < 86400) {
        timeAgo = `${Math.floor(diffInSeconds / 3600)} hours ago`;
    } else if (diffInSeconds < 604800) {
        timeAgo = `${Math.floor(diffInSeconds / 86400)} days ago`;
    } else if (diffInSeconds < 2592000) {
        timeAgo = `${Math.floor(diffInSeconds / 604800)} weeks ago`;
    } else if (diffInSeconds < 31536000) {
        timeAgo = `${Math.floor(diffInSeconds / 2592000)} months ago`;
    } else {
        timeAgo = `${Math.floor(diffInSeconds / 31536000)} years ago`;
    }

    return timeAgo;
}