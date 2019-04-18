import request from 'superagent'

const satellite = 'https://api.wheretheiss.at/v1/satellites/25544'

export function getSatellite (callback) {
  request.get(satellite)
    .end((err, res) => {
      callback(err, res.body)
    })
}
