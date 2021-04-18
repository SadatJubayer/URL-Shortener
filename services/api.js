import axios from 'axios';

const callApi = async (method, path, data) => {
  const headers = {
    'Content-Type': 'application/json',
  };
  const url = `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`;

  return axios[method](url, data, { headers });
};

export const shortUrl = (data) => callApi('post', '/url', data);
export const breakUrl = (data) => callApi('get', `/url/${data}`, null);
export const getStats = (data) => callApi('get', `/url/${data}/stats`, null);
