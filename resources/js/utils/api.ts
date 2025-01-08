const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchCSRFToken() {
  const response = await fetch(`${API_URL}/csrf-cookie`, {
    credentials: 'include',
  });
  return response;
}

async function apiRequest(endpoint: string, method: string = 'GET', data: any = null) {
  await fetchCSRFToken();

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  };

  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
  if (csrfToken) {
    headers['X-CSRF-TOKEN'] = csrfToken;
  }

  const options: RequestInit = {
    method,
    headers,
    credentials: 'include',
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  const response = await fetch(`${API_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`API request failed: ${response.statusText}`);
  }

  return response.json();
}

export { apiRequest };

