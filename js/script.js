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

$("#search-form").on("submit",function(event){
   event.preventDefault()
//    console.log(event.target)
 var cityName = $("#search-input").val()   
getDataFromApi(cityName)

})

var cardDiv = $("<div>")
cardDiv.attr('class', 'card-body')
cardDiv.text('Hello there')
$('#forecast').append(cardDiv) 

function getDataFromApi(cityName){
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName +'&appid=63827b77bc19fce737245d79e9a2106f&units=metric')

    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
}

{/* <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> */}