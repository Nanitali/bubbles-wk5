import request from 'superagent'
const duckUrl = 'http://localhost:3000/api/v1/ducks/'

export function getDucks () {
  return request
    .get(duckUrl)
    .then(res => {
      return res.body
    })
}
