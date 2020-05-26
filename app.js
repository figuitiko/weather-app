
const place = require('./place/place')
const weather = require('./weather/weather')

const argv = require('yargs').options({
    dir:{
        alias: 'd',
        desc: 'adress of the city',
        demand: true
    }
    
}).argv;




const getInfoPlace = async(dir) => {
    
    try {
        const coords = await place.getPlace(dir);
       
        
        const temp = await weather.getWeather(coords.lat, coords.lng);
        return `the weather of ${coords.location} is of ${temp}` 
    } catch (error) {
        return `we cant detect the weather ${dir}`
    }
}


getInfoPlace(argv.dir)
.then(console.log)
.catch(console.log)