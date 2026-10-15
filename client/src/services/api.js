const BASE_URL = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  if (!BASE_URL) {
    throw new Error('VITE_API_URL is not configured');
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
}

export const getTasks = () => request('/tasks');

export const createTask = (task) =>
  request('/tasks', { method: 'POST', body: JSON.stringify(task) });