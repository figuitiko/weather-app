const axios = require('axios');

const getWeather = async(lat, lng) =>{

    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=23fbc249fb7b4d04b77fb2636acd3554&units=metric`)

    return res.data.main.temp
}

module.exports = {
    getWeather
}