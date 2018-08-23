import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/v1/'

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default (api)
