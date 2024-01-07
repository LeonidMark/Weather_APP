
import { CurrentWeather } from "./types"

export const renderWeather = async (weather:CurrentWeather)=>{
const weatherCastEl=document.querySelector<HTMLElement>("#weatherCast")
weatherCastEl!.innerHTML=`<div class="card p-4">    
                    
<div class="d-flex">
    <h6 class="flex-grow-1">${weather.name}</h6>
    <h6>${weather.sys.country}</h6>
</div>
<div class="d-flex flex-column temp mt-5 mb-3">
    <h1 class="mb-0 font-weight-bold" id="heading"> ${weather.main.temp} C </h1>
    <span class="small grey">${getWeatherArray(weather.weather)}</span>
</div>
<div class="d-flex">
    <div class="temp-details flex-grow-1">
         <p class="my-1">
             <img src="https://i.imgur.com/B9kqOzp.png" height="17px" >
            <span> ${weather.wind.speed} </span>
         </p>
         <p class="my-1"> 
            <i class="fa fa-tint mr-2" aria-hidden="true"></i>
            <span>${weather.main.humidity}</span> 
         </p>
         <p class="my-1"> 
            <i class="fa fa-tint mr-2" aria-hidden="true"></i>
            <span>Feels Like: ${weather.main.feels_like}</span> 
         </p>
    </div>
    <div>
        <img src="https://i.imgur.com/Qw7npIg.png" width="100px" id="imageWeather">
    </div>
</div>

</div>

`


    //const weatherData= await getApiData(cityInput)

}

export const getWeatherArray=(data:CurrentWeather["weather"])=>{
    const mainWeather=data.filter(x=>x.main)
return mainWeather;
}