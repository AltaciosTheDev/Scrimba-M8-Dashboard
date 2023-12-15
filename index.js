
// UNSPLASH API: BACKGROUND AND AUTHOR
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.full})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })
    
    
//COIN GECHO API: IMAGE, NAME AND MARKET VALUES 
fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()
    })
    .then(data => {
        document.getElementById("crypto-top").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `
        document.getElementById("crypto-bottom").innerHTML = `
            <p> 🎯: $${data.market_data.current_price.usd}</p>
            <p> 👆: $${data.market_data.high_24h.usd}</p>
            <p> 👇: $${data.market_data.low_24h.usd}</p>
        `
    })
    .catch(err => console.error(err))
    

//INTERNAL MANUAL TIME FUNCTION: DATE CONSTRUCTOR, TOLOCALETIMESTRING METHOD, AND SET INTERVAL FUNCTION 
setInterval(getTimeToDashboard, 1000)
//similar to setTimeout. Instead of calling it at a specified time, it calls the function constantly at a specified interval.
function getTimeToDashboard(){
    const time = new Date()
    const shortTime = time.toLocaleTimeString("en-us", {timeStyle: "medium"})
    document.getElementById("time").textContent = shortTime
}

//WEATHER API 
navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    console.log(lat)
    console.log(lon)
    
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            let iconId = data.weather[0].icon
            let iconUrl = `https://openweathermap.org/img/wn/${iconId}@2x.png`
            
            document.getElementById("weather-top").innerHTML = `
                <img class="weather-img" src="${iconUrl}">
                <p>Temp: ${data.main.temp}</p>
            `
            document.getElementById("weather-bottom").innerHTML = `
                <p>Feels like: ${data.main.feels_like}</p>
                <p>Humidity: ${data.main.humidity}</p>
                <p>Country: ${data.sys.country}</p>
            `
        })//first fetch function
        

}) //geolocation function 


//https://openweathermap.org/img/wn/10d@2x.png


















// function getCurrentTime(){
//     const time = new Date()
//     console.log(time)
//     let hours = time.getHours()
//     const minutes = time.getMinutes()
//     let meridian = 'AM'
//     if(hours >= 12){
//        hours -= 12 
//        meridian = 'PM'
//     }
//     console.log(hours)
//     console.log(minutes)
//     const timeTolog = `${hours}:${minutes} ${meridian}`
//     console.log(timeTolog)
    
//     return timeTolog
// }