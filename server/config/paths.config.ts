import path from 'path';
import { fileURLToPath } from 'url';

// folder and file paths
export const SERVER_DIST_FOLDER = path.dirname(fileURLToPath(import.meta.url));
export const PUBLIC_FOLDER_PATH = path.join('./public');
export const POSTS_FOLDER_PATH = path.join(PUBLIC_FOLDER_PATH, '/posts');

// routes
export const BLOGPOST_ROUTE = '/blogpost';
