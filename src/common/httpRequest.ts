import axios from 'axios';

export const httpRequest = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
