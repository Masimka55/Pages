export const WEATHER = {
             RESULT_CITY : document.querySelector('.result_city'),
             DATA_FORM   : document.querySelector('.data_form'),
             RESULT_TEMP : document.querySelector('.result_temp'),
             DATA_NAME   : document.querySelector('.data_city'),
             FEELS_LIKE  : document.querySelector('.feels_like'),
};

export const URL = {
            SERVER_WEATHER  : 'http://api.openweathermap.org/data/2.5/weather',
            SERVER_FORECAST : 'http://api.openweathermap.org/data/2.5/forecast',
            API_KEY         : 'f660a2fb1e4bad108d6160b7f58c555f',
            IMG             : document.querySelector('.img'),
            IMG1 : document.querySelector('.img')
}

export const FORECAST = {
             TIME       : document.querySelectorAll('.timeBlock'),
             TEMP       : document.querySelectorAll('.tempBlock'),
             FEELS_TEMP : document.querySelectorAll('.feelsTempBlock'),
}

export const FAVORITE = {
             UL         : document.querySelector('.like_favorites'),
             BTM_HEART  : document.querySelector('.heart'),
             BT : document.querySelector('.but')
}

export const SUN = {
             RISE    : document.querySelector('.sunrise'),
             SET     : document.querySelector('.sunset')
}
