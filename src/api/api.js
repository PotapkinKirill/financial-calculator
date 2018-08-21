const baseUrl = process.env.REACT_APP_BASE_URL

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
