$(".city").click(function () {
    //api call here
    var city = $(".city").val();
    var uri = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",ru$units=si&appid=4e651d58543d2bad33b52678226ee6e6";
    console.log (uri);
    $.get(uri, onRes);
});

function onRes(response) {
    console.log(response);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description);
}
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}