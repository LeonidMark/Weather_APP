import { getApiData } from "./api";
import { renderWeather } from "./functions";

const submitFormEl=document.querySelector<HTMLFormElement>("#submitForm")
const cityEl=document.querySelector<HTMLInputElement>("#city")
submitFormEl!.addEventListener('submit',async (e)=>{
const target=e.target as HTMLButtonElement
const cityInput:string=cityEl!.value
const dataWeather= await getApiData(cityInput)
renderWeather(dataWeather)

})





