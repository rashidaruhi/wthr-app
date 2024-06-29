console.log("Ruhi");
async function fetchData() 
{


    const cityName = document.getElementById("city").value
    // const apiKey = "bf78b037bbdb4bf0e2b0e0e00ebc5000"
    const apikey= '7851ed2e0ed56ba37e0c290edd1f5950';
    // const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;

    const res =await fetch(url)
    const data=await res.json()
    // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // const res = await fetch(url)
    // const data = await res.json()

    // const data =
    // {
    //     "coord": {
    //          "lon": 78.4744,
    //          "lat": 17.3753
    //     },
    //      "weather": 
    //     [
    //          {
    //             "id": 721,
    //             "main": "haze",
    //             "description": "haze",
    //             "icon": "50d"
    //         }
    //     ],
    //     "base": "stations",
    //     "main": {
    //         "temp": 30.23,
    //         "feels_like": 33.71,
    //         "temp_min": 30.23,
    //         "temp_max": 31.73,
    //         "pressure": 1004,
    //         "humidity": 62,
    //         "sea_level": 1004,
    //         "grnd_level": 949
    //     },
    //     "visibility": 6000,
    //     "wind": {
    //         "speed": 7.2,
    //         "deg": 270
    //     },
    //     "clouds": {
    //         "all": 40
    //     },
    //     "dt": 1719657991,
    //     "sys": {
    //         "type": 1,
    //         "id": 9214,
    //         "country": "IN",
    //         "sunrise": 1719620087,
    //         "sunset": 1719667448
    //     },
    //     "timezone": 19800,
    //     "id": 1269843,
    //     "name": "Hyderabad",
    //     "cod": 200
    // }
    // console.log(data);

    let weather = data.weather[0].main
    let temperature = data.main.temp
    let city = data.name
    let description = data.weather[0].description
    let pressure = data.main.pressure
    let humidity = data.main.humidity
    let visibility = data.visibility

    let weatherIcon = "https://openweathermap.org/img/wn/50d@2x.png"
    
    
    document.getElementById("wIcon").src =  weatherIcon
    document.getElementById("temp").innerHTML = temperature
    document.getElementById("cityName").innerHTML = city
    document.getElementById("desc").innerHTML = description
    document.getElementById("pressure").innerHTML = pressure
    document.getElementById("humidity").innerHTML = humidity   
    document.getElementById("visibility").innerHTML = visibility
    

    console.log(weather);

}