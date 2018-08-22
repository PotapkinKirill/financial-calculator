import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/v1/'

export const apiNew = axios.create({
  baseURL: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

const api = (path, REST, body = null) => {
  return fetch(baseUrl + path, {
    method: REST,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: body,
    mode: 'cors'
  }).then(response => response.json())
}

export default (api)
