
import { CurrentWeather } from "./types"

export const renderWeather = async (weather:CurrentWeather)=>{
const weatherCastEl=document.querySelector<HTMLElement>("#weatherCast")
weatherCastEl!.innerHTML=`<div class="card p-4">    
                    
<div class="d-flex">
    <h6 class="flex-grow-1">${weather.name}</h6>
    <h6>${weather.sys.country}</h6>
</div>
<div class="mb-2" id="iconForecast">
</div>
<div class="d-flex flex-column temp mt-5 mb-3">

    <h1 class="mb-0 font-weight-bold" id="heading"> ${Math.round(weather.main.temp)} C&deg </h1>
    <span class="small grey">${getWeatherArray(weather.weather)?.description}</span>
</div>
<div class="d-flex">
    <div class="temp-details flex-grow-1">
         <p class="my-1">
             <img src="https://i.imgur.com/B9kqOzp.png" height="17px" >
            <span> ${weather.wind.speed} </span>
         </p>
         <p class="my-1"> 
            <i class="fa fa-tint mr-2" aria-hidden="true"></i>
            <span>${weather.main.humidity} %</span> 
         </p>
         <p class="my-1"> 
            <i class="fa fa-tint mr-2" aria-hidden="true"></i>
            <span>Feels Like: ${weather.main.feels_like}</span> 
         </p>
        <div class=" flex-grow-1 moreInfo hide">
         <p class="my-1">
             <img src="https://i.imgur.com/B9kqOzp.png" height="17px" >
            <span>Sea level: ${weather.main.sea_level ? weather.main.sea_level : "no information"} </span>
         </p>

         <p class="my-1">
             <img src="https://i.imgur.com/B9kqOzp.png" height="17px" >
            <span>Max temperature: ${weather.main.temp_max} &deg </span>
         </p>
         <p class="my-1">
             <img src="https://i.imgur.com/B9kqOzp.png" height="17px" >
            <span>Min temperature: ${weather.main.temp_min} &deg </span>
         </p>
         <p class="my-1">
             <img src="https://i.imgur.com/B9kqOzp.png" height="17px" >
            <span>The pressure is: ${weather.main.pressure}</span>
         </p>
         </div>
         <button type="button" class="btn btn-outline-secondary" id="showMoreBtn">Show more info</button>
        </div>
    </div>
</div>


</div>

`
const iconForecastEl=document.querySelector<HTMLElement>("#iconForecast")
rainyWeather(weather,iconForecastEl!)
hotWeather(weather,iconForecastEl!)
cloudyWeather(weather,iconForecastEl!)
snowWeather(weather,iconForecastEl!)



    //const weatherData= await getApiData(cityInput)

}

export const getWeatherArray=(data:CurrentWeather["weather"])=>{
    const mainWeather=data.find(x=>x.main)
return mainWeather;
}
export const rainyWeather=(weather:CurrentWeather,element:HTMLElement)=>{
    if(weather.rain){
        element.innerHTML=`
        <div class="breezy icons">
        <ul>
    
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>	
        </ul>
        <span class="cloudr"></span>
    
    
    </div>
            `
    }
}
export const hotWeather=(weather:CurrentWeather,element:HTMLElement)=>{
    if(!weather.rain && weather.main.temp>20){
        element.innerHTML=`
        <div class="hot icons">
    
        <span class="sun"></span>
        <span class="sunx"></span>
    </div>
            `
    }
}
export const cloudyWeather=(weather:CurrentWeather,element:HTMLElement)=>{
    if(!weather.rain && weather.main.temp<=20){
        element.innerHTML=`
        <div class="cloudy icons">
        <span class="cloud"></span>
        <span class="cloudx"></span>
    </div>
            `
    }
}
export const snowWeather=(weather:CurrentWeather,element:HTMLElement)=>{
    if(weather.snow){
        element.innerHTML=`
        <div class="stormy icons">
        <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        </ul>
        <span class="snowe"></span>
        <span class="snowex"></span>
    </div>
            `
    }
}