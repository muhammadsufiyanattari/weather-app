let inpValue = document.getElementById("inpValue");
let form = document.getElementById("form");
let cityName = document.getElementById("cityName");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let temp =document.getElementById('mytemp')
let imgSrc=document.getElementById('image')
let displayDiv=document.getElementById('display')
let mainBox=document.getElementById('mainBox')
// console.log(imgSrc.src="img/clear.png");


// console.log(cityName);

let getData = async () => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inpValue.value}&appid=0ea3f6f8acd7c4bda80884d0ac7a0fcb&units=metric`
    );
    let responsJson = await response.json();
    console.log(cityName.innerText=responsJson.weather[0].main);
    let weatherCondition=cityName.innerText=responsJson.weather[0].main
    if (weatherCondition=='Clear') {
      imgSrc.src="img/clear.png"
    }
    else if (weatherCondition=='Snow') {
      imgSrc.src="img/snowing-4013_256.gif" 
    }
    else if (weatherCondition=='Haze') {
      imgSrc.src="img/haze.png"
    }
    else if(weatherCondition=='Rain'){
      imgSrc.src="img/rainy-day.png"
    }
    else if(weatherCondition=='Clouds'){
      imgSrc.src="img/cloudy (1).png"
    }
    else{
      imgSrc.src="img/1530391_weather_clouds_sun_sunny_icon.png"
    }
    if (cityName.innerText=responsJson.name==undefined) {
      cityName.innerText='Please Cheak city name'
    }
    else{
      cityName.innerText=responsJson.name
    }
   
    humidity.innerText=responsJson.main.humidity+'%'
    wind.innerText=responsJson.wind.speed+'km/h'
    temp.innerText= Math.round(responsJson.main.temp)+'°C'
   
 
    return responsJson;
  } catch (error) {
    console.log(error.message);
  }
};


// let data= getData()
form.addEventListener("submit", async (event) => {
  // getData();
  event.preventDefault();
  // console.log
    // cityName.innerText(data.name)
  let nameValue=(inpValue.value);
  // getData()
  displayDiv.style.display='block'
  mainBox.style.margin="50px 10px 20px 30px !important" 
  console.log(await getData(nameValue));
  inpValue.value=""
});
