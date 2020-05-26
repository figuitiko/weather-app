const axios = require('axios');

const getPlace = async(dir ) => {
    const encodedUrl = encodeURI(dir);
    
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'X-RapidAPI-Key': '43ea3df052msh078d5a062a06f0dp13da7cjsn8ac11cbd0b4a'}
    });
    
   const  res =  await instance.get()
            

        if(res.data.Results.length === 0 ){
            throw new Error(`theres is not results ${dir}`)
        }
        const data = res.data.Results[0];
        const location = data.name;
        const lat = data.lat;
        const lng = data.lon;

            return {
                location,
                lat,
                lng,
            };
}

module.exports = {
    getPlace
}

