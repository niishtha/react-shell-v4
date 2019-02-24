import fetch from 'isomorphic-fetch';
import queryString from 'query-string';

const fireRequest = async (method, url, data) => {
  const options = {
    method,
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(url, options);
  const json = await response.json();
  return response.ok ? json : Promise.reject(json);
};

export default {
  get(url, query) {
    const qs = queryString.stringify(query, { arrayFormat: 'index' });
    return fireRequest('GET', `${url}?${qs}`);
  },

  post(url, data) {
    return fireRequest('POST', url, data);
  },

  put(url, data) {
    return fireRequest('PUT', url, data);
  },

  delete(url) {
    return fireRequest('DELETE', url);
  },
};
