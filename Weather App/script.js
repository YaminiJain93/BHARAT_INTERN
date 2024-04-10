const apiKey = '0547dbffd16527dbaaf019fd99b3f088';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector(".search-box input")
const searchBtn = document.querySelector(".search-box button")
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity-percent").innerHTML = data.main.humidity+ "%";
    document.querySelector(".speed").innerHTML = data.wind.speed + "Km/hr";


}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


checkWeather() 
