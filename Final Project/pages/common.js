$(document).ready(function(){
    $(".city").click(function() {
        var city = $(".city").val();
        var uri = "https://api.openweathermap.org/data/2.5/weather?q=" + city + ",ru$units=si&appid=380be86ab068031579b0509d4f27df73";
        console.log(uri);
        $.get(uri, onRes);
    });
});
function onRes(response) {
    console.log(response);
    $(".temp").html(response.main.temp);
    $(".city-name").html(response.name);
    $(".weather").html(response.weather[0].description);
    console.log(response.main.temp);
}
