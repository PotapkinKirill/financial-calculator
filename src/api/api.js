const api = (params, REST, body = null) => {
  return fetch('http://localhost:3001/api/v1/' + params, {
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
