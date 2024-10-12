let inpValue = document.getElementById("inpValue");
let form = document.getElementById("form");
let cityName = document.getElementById("cityName");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let temp =document.getElementById('mytemp')

// console.log(cityName);

let getData = async () => {
  try {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inpValue.value}&appid=0ea3f6f8acd7c4bda80884d0ac7a0fcb&unit=matirc`
    );
    let responsJson = await response.json();
    if (cityName.innerText=responsJson.name==undefined) {
      cityName.innerText='Please Cheak city name'
    }
    else{
      cityName.innerText=responsJson.name
    }
   
    humidity.innerText=responsJson.main.humidity+'%'
    wind.innerText=responsJson.wind.speed+'km'
   temp.innerText=responsJson.main.temp
   
 
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
  console.log(await getData(nameValue));
  // inpValue.value=""
});
