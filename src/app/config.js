// API Configuration
const isDevelopment = process.env.NODE_ENV === 'development';

// Use the remote API if not in development mode, otherwise use localhost
const API_BASE_URL = isDevelopment
  ? 'http://localhost:3000'
  : 'https://todo-backend-wj3c.vercel.app';

// API Route Prefixes
const AUTH_PREFIX = '/api/v1';
const TASK_PREFIX = '/task/v1';

export { API_BASE_URL, AUTH_PREFIX, TASK_PREFIX }; 