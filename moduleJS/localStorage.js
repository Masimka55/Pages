import { renderData, renderForecast } from "./fetch.js"
import { WEATHER } from "./elements.js"

export function setResultCity(data){
    localStorage.setItem("resultCityName", JSON.stringify(data))
}

export function getResultCity(){
    try{
    const resultName = JSON.parse( localStorage.getItem("resultCityName"))
    if (resultName){
        WEATHER.DATA_NAME.value = resultName 
        renderData(resultName)
        renderForecast(resultName)
    }
}
catch(error){
console.log(error);
}
}