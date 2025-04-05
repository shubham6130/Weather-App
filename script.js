const apikey = "7546822569ad24b7b7bc89405e89151b";
// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



// async function means this function will wait for information to come back
async function checkWeather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"; // block = display
        document.querySelector(".weather").style.display = "none"; 

    }
    else
    {
        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed +" km/h";

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        

        if(data.weather[0].main == "Clouds")
        {
            weatherIcon.src = "Images/clouds.png"
        }
        else if(data.weather[0].main == "Clear")
        {
            weatherIcon.src = "Images/clear.png"
        }
        else if(data.weather[0].main == "Rain")
        {
            weatherIcon.src = "Images/rain.png"
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weatherIcon.src = "Images/drizzle.png"
        }
        else if(data.weather[0].main == "Mist")
        {
            weatherIcon.src = "Images/mist.png"
        }
        else if(data.weather[0].main == "Snow")
        {
            weatherIcon.src = "Images/snow.png"
        }

        
    }

    

    
}

searchButton.addEventListener("click",()=>
{
    // Get the city name from input box
    const cityName = searchBox.value;
    
    // Call your weather function with that city
    checkWeather(cityName);
})

