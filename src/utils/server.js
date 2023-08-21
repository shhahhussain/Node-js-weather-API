const request = require('request')
const address = process.argv[2]

const forecast = (address, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=54c568b9ca91f0912b4abe73e3935447&query=' + encodeURIComponent(address);
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('connecting error', undefined)
        } else if (response.body.error) {
            callback('unable to fetch data', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions + ' in ' + address + '. It is currently ' + response.body.current.temperature + ' degree but it feel like ' + response.body.current.feelslike + ' degree')
        }
    });
}

forecast(address, (error, data) => {
});

module.exports = forecast