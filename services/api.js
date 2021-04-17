import axios from 'axios';

const callApi = async (method, path, data) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const baseUrl = 'https://reinforcedit.com';
  const url = `${baseUrl}${path}`;

  return axios[method](url, data, { headers });
};

export const shortUrl = (data) => callApi('post', '/url', data);
export const breakUrl = (data) => callApi('get', `/url/${data}`, null);
