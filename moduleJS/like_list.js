import { FAVORITE , WEATHER } from "./elements.js"
import { renderData, renderForecast } from "./fetch.js";
import { createElement } from "./creatsElement.js";
import { styleHeartNone, styleHeartRed } from "./styleHeart.js";
import { setCookie ,getCookie} from "./cookie.js";

FAVORITE.BT.disabled = true;
let like_list = []

export function render(){
    FAVORITE.UL.replaceChildren();
   for (const item of like_list){
         let favoritesCity = createElement('li', 'favorites_city', item);
         let svg = createElement('svg','svg_delete',null) 
         FAVORITE.UL.append(favoritesCity) 
         favoritesCity.append(svg)  
         
         favoritesCity.addEventListener("click",() =>{
                if (like_list.includes(item)){
                            renderData(item); 
                        renderForecast(item);
                        styleHeartRed()
  }})
          svg.addEventListener("click", ()=>{
          deleteCity(item)
          styleHeartNone()
  })
   }

}

function deleteCity(city) {
  like_list = like_list.filter(item => item !== city);
  render();
  setCookie(like_list)
}

 export function likeButton(){
   const city = WEATHER.RESULT_CITY.textContent
 if (like_list.includes(city)){
     like_list = like_list.filter(item => item != city)
     styleHeartNone()
 }
 else {
    like_list.push(city)
    styleHeartRed()
 }
 setCookie(like_list)
 render()
}
 like_list = getCookie()
