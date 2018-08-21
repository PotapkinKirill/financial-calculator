const baseUrl = process.env.BASE_URL

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
