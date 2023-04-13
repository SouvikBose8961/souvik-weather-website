const request = require('request')

const forecast= (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b613e97a74c4825a3a317719a17d8524&query='+latitude+','+longitude
    request({url, json : true},(error, {body}) => {
        if(error){
            callback('Unable to connect to weather services!', undefined)
        }else if(body.error ){
            callback('Unable to find location', undefined)
            
        }else{
            callback(undefined, 'weather is '+body.current.weather_descriptions[0]+'(local time: '+body.location.localtime +'). It is currently '+body.current.temperature+' degrees outside. You will feel '+body.current.feelslike+' degrees out. humidity: '+body.current.humidity
        )}
    })

}
module.exports = forecast