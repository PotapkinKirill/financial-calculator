import axios from 'axios'

const baseUrl = 'https://financial-calculator-backend.herokuapp.com/api/v1/'

export const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});

export default (api)
