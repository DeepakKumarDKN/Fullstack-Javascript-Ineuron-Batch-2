let data; 

let inputBox = document.getElementById('inputBox')
let cityName = document.getElementById('cityName')
let region = document.getElementById('region')
let countryName = document.getElementById('countryName')
let image_icon = document.getElementById('image_icon')

let getDate = document.getElementById('getDate')
let tempData = document.getElementById('tempData')
let wheatherType = document.getElementById('wheatherType')

let windTemp = document.getElementById('windTemp')
let celciusTemp = document.getElementById('celciusTemp')
let farenTemp = document.getElementById('farenTemp')

let date_am = document.getElementById('date_am_pm')
let date_year = document.getElementById('dateYear')

let forecastDate = document.querySelectorAll('#forecastDate')
let forecastTemprature = document.querySelectorAll('#forecastTemprature')
let forecasthumid = document.querySelectorAll('#forecasthumid')
let weatherType = document.querySelectorAll('#weatherType')


const getData = async (event) => {
    event.preventDefault()
    if(!inputBox.value){
        alert('Please Enter The City Name')
        return
    }

    const date = new Date()
    let result = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`

    const date_am_pm = date.toLocaleString('en-US', {
        hour : "numeric",
        minute : "numeric",
        hour12 : true
    })

    const year_date = date.toDateString()

    // getting the city name
    const city =  inputBox.value
    
    // fetching the data 
    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=3371bb2b4c5e4d86933111634231610&q=${city}`)
    data  = await fetchData.json()

    const forecastData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3371bb2b4c5e4d86933111634231610&q=${city}&days=3`)
    let forecastResult = await forecastData.json()
    console.log(forecastResult)

    cityName.innerHTML = data.location.name
    region.innerHTML = data.location.region + ' ,'
    countryName.innerHTML = data.location.country
    image_icon.src = data.current.condition.icon
    getDate.innerHTML = 'Today ' + result
    tempData.innerHTML = data.current.temp_c + '<sup>o<sup>'
    wheatherType.innerHTML = data.current.condition.text
    windTemp.innerHTML = data.current.wind_kph + ' km/hr'
    humidTemp.innerHTML = data.current.humidity + " %"
    celciusTemp.innerHTML  = data.current.temp_c
    farenTemp.innerHTML = data.current.temp_f
    date_am.innerHTML = date_am_pm
    date_year.innerHTML = year_date

    for(let i=0; i<=3; i++){
        forecastDate[i].innerHTML = forecastResult.forecast.forecastday[i].date
        forecastTemprature[i].innerHTML = forecastResult.forecast.forecastday[i].day.maxtemp_c
        forecasthumid[i].innerHTML = forecastResult.forecast.forecastday[i].day.avghumidity
        weatherType[i].innerHTML = forecastResult.forecast.forecastday[i].day.condition.text
        

    }    
} 