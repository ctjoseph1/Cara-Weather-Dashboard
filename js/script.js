// TODO
// 1. When user search for a city in the input, call weather API and show the result in the HTML
//    - Add event listener to form submit

//    - Get the user input value
//    - Build the API query URL based on the user input value
//    - Call the API and render the result in the HTML
//        - Get the city name and show it in the main weather forecast card
//        - Get the first weather forecast item and get the following values
//            - date
//            - temperature
//            - wind speed
//            - humidity
//            - icon
//        - render those values to the main card
//        - Loop through all weathers array and get the following values
//            - date
//            - temperature
//            - wind speed
//            - humidity
//            - icon
//        - render those values to the smaller card
// 2. When user search for a city, store it in local storage
// 3. On initial page load load the search history and show it as a list in the HTML
//    - ....
//    - Build the API query URL based on the history stored in local storage
//    - Call the API and render the result in the HTML
// 4. When user click on the search history, call weather API and show the result in the HTML
// 5. CSS

$("#search-form").on("submit", function (event) {
    event.preventDefault()
    //    console.log(event.target)
    var cityName = $("#search-input").val()
    getDataFromApi(cityName)

})

function getDataFromApi(cityName) {
    $(".card-title").text("Weather Information for " + cityName);


    var cardDiv = $("<div>")
    cardDiv.attr('class', 'card-body')
    cardDiv.text('Hello there')
    $('#forecast').append(cardDiv)
}

function getDataFromApi(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=63827b77bc19fce737245d79e9a2106f&units=metric')

        .then(function (response) {
            // const data =  response.json();
            return response.json();
        })

        .then(function (data) {
            const myCard = document.querySelector('.card');
            console.log(data);

            var fiveDays = [
                data.list[0],
                data.list[8],
                data.list[16],
                data.list[24],
                data.list[32],
            ]
            
            console.log(fiveDays)
            //         var cardDiv = $("<div>")
            // cardDiv.attr('class', 'card-body')
            // cardDiv.text('Hello there')
            // $('#forecast').append(cardDiv)

            // Loop through the next 5 days
            for (var i = 0; i < 5; i++) {

            var cardDiv= $("<div>")
            cardDiv.attr('class', 'card')
            cardDiv.attr('style', 'width: 18rem;')
            
            var cardBody = $('<div>')
            cardBody.attr('class', 'card-body')

            var dateH5= $('<h5>')
            dateH5.attr ('class', 'card-title')
            dateH5.text(fiveDays[0].dt_txt)

            var iconImg= $('<img>')
            iconImg.attr('src', 'https://openweathermap.org/img/wn/10d@2x.png')
            iconImg.attr('class', 'card-subtitle mb-2 text-body-secondary')

            var tempEl = $("<p>")
            tempEl.attr("class", "card-text");
            tempEl.text(`Temp: ${fiveDays[0].main.temp}`)

            var windEl = $("<p>")
            windEl.attr("class", "card-text");
            windEl.text(`Wind: ${fiveDays[0].wind.speed}`)

            var humidityEl = $("<p>")
            humidityEl.attr("class", "card-text");
            humidityEl.text(`Humidity: ${fiveDays[0].main.humidity}`)


            // as above do wind, humidity THEN
            // combine them by append

            // combine them\
            cardBody.append(dateH5, iconImg, tempEl, windEl, humidityEl)
            cardDiv.append(cardBody);

            $("#forecast").append(cardDiv)
            }
        })
}

            //create all x5 cards- likely same format as above but diff date?


/*
<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">18/12/2023</h5>
        <img src="https://openweathermap.org/img/wn/10d@2x.png" class= "card-subtitle mb-2 text-body-secondary"></img>
        <p class="card-text">Temp: 18.89</p>
        <p class="card-text">Wind: 2.76KPH</p>
        <p class="card-text">Humidity: 44%</p>
    </div>
</div>
*/



// 0 8 16 24 32 5 days at 9pm

