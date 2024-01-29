export function setCookie(array) {
  const arrayString = JSON.stringify(array);
        document.cookie = `like_list=${arrayString}; expires=Sun, 31 Dec 2024 23:59:59 UTC; path=/`;
}

export function getCookie() {
       const storedCookie = document.cookie.split(';').find(cookie => cookie.includes('like_list='));
         if (storedCookie) {
                       let storedArrayString = storedCookie.split('=')[1];
                          return JSON.parse(storedArrayString);
}
  return []; 
  }

 /* import { render } from "./like_list.js";
import Cookies from'js-cookie' */


/* export function setCookie(){ 

Cookies.set("like_list", like_list)
}
export function getCookie() {
  const savedData = Cookies.get("like_list");
  if (savedData) {
    like_list = savedData.split(",");
  }
render()
} */