import { WEATHER , FORECAST, SUN , URL,FAVORITE} from "./elements.js";
import { setResultCity } from "./localStorage.js";

export function dataCity(data){
    WEATHER.DATA_NAME.value = ""
    WEATHER.RESULT_CITY.textContent = data.name
    WEATHER.RESULT_TEMP.textContent = Math.round(data.main.temp)
    WEATHER.FEELS_LIKE.textContent = Math.round(data.main.feels_like)

    const timeSunRise = new Date(data.sys.sunrise * 1000)
    SUN.RISE.textContent = timeSunRise.getHours() + ":" + timeSunRise.getMinutes()

    const timeSunSet = new Date(data.sys.sunset * 1000)
    SUN.SET.textContent = timeSunSet.getHours() + ":" + timeSunSet.getMinutes()
    URL.IMG.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    
    FAVORITE.BT.disabled = false;
    setResultCity(data.name)
}

 export function dataForecastCity(data){
    for (let i = 0; i < data.length; i++){
         if(FORECAST.TIME[i] && FORECAST.TEMP[i] && FORECAST.FEELS_TEMP[i] ){
               FORECAST.TIME[i].textContent = data[i].dt_txt.slice(11,16)
               FORECAST.TEMP[i].textContent = Math.round(data[i].main.temp)
               FORECAST.FEELS_TEMP[i].textContent = Math.round(data[i].main.feels_like)
             
         }
    }
}



