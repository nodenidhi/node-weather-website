const request = require('request')

const forecast = (latitude, longitude, callback) => {
   // const url = 'http://api.weatherstack.com/current?access_key=fd4942fb0ab5c26500a2ac4e09fcdbd6' + latitude + ',' + longitude
    const url ='http://api.weatherstack.com/current?access_key=fd4942fb0ab5c26500a2ac4e09fcdbd6&query=37.8267,-122.4233'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast