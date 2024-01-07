import { CurrentWeather } from "./types";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const API_KEY = import.meta.env.VITE_API_KEY;

export const getApiData = async (city: string) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('SOMETHING IS WRONG WITH THE DATA');
  }
  const data:CurrentWeather = await response.json();
  console.log(data);
  return data;
};