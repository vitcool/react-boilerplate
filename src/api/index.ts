const API_URL = 'https://jsonplaceholder.typicode.com';

export const getRequest = (url: string) => {
  const URL = `${API_URL}${url}`;

  return fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
};
