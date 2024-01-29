import { URL } from './elements.js';
import { dataCity, dataForecastCity } from './dataCity.js';

async function getData(cityName) {
  const url = `${URL.SERVER_WEATHER}?q=${cityName}&appid=${URL.API_KEY}&units=metric`;
  try {
    const response = await fetch(url);
    if (response.status === 200) {
      return response.json(); 
    } else if (response.status === 404) {
      throw new Error(`City '${cityName}' not found`); 
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    console.log(error);
  }
}

 export function renderData(data) {
  getData(data)
  .then((data) => { 
    console.log(data);
    dataCity(data)
    
  });

}

async function forecastData (cityName){
    const url = `${URL.SERVER_FORECAST}?q=${cityName}&appid=${URL.API_KEY}&units=metric`;
    try {
        const response = await fetch(url)
        if(response.status === 200){
          const data = await response.json()
            return data.list
        }
        else{
            throw new Error("ERROR")
        }
    } catch (error) {
       console.log(error);
    }
}

export function renderForecast(data){
    forecastData(data)
    .then((data) => {
        dataForecastCity(data)
        console.log(data);
    })
}







