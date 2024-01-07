import { getApiData } from "./api";
import { renderWeather } from "./functions";

const submitFormEl=document.querySelector<HTMLFormElement>("#submitForm")
const cityEl=document.querySelector<HTMLInputElement>("#city")
submitFormEl!.addEventListener('submit',async ()=>{
let cityInput:string=cityEl!.value
const dataWeather= await getApiData(cityInput)
renderWeather(dataWeather)
cityEl!.value=""
const startPageEl=document.querySelector("#startPage")
startPageEl!.classList.add("hide")
const showMoreBtnEl=document.querySelector<HTMLButtonElement>("#showMoreBtn")
showMoreBtnEl!.addEventListener('click',e=>{
    const target=e.target as HTMLButtonElement
    const perentEl = target.parentElement;
    const hideEl=perentEl?.children[3];
    hideEl?.classList.toggle("hide")
    if(!showMoreBtnEl?.classList.contains("hide")){
        showMoreBtnEl!.innerHTML="Show less"
        showMoreBtnEl?.classList.remove("hide")
    }
    else if(showMoreBtnEl?.classList.contains("hide")){
        showMoreBtnEl!.innerHTML="Show more info"
        showMoreBtnEl.classList.add("hide")

    }
    
    
})
})






