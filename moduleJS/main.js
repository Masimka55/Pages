import { FAVORITE , WEATHER} from "./elements.js";
import { likeButton, render } from "./like_list.js";
import { renderData , renderForecast } from "./fetch.js";
import { styleHeartNone } from "./styleHeart.js";
import { setResultCity, getResultCity} from "./LocalStorage.js";
import { getCookie } from "./cookie.js"; 

WEATHER.DATA_FORM.addEventListener("submit", (event) => {
    event.preventDefault()
    renderData(WEATHER.DATA_NAME.value)
    renderForecast(WEATHER.DATA_NAME.value)
    styleHeartNone()
    setResultCity(WEATHER.DATA_NAME.value)
   
})

FAVORITE.BT.addEventListener("click", (event) =>{
    likeButton();

})


document.addEventListener("DOMContentLoaded", function() {
    getResultCity();
    getCookie();
    render();
    
  })



