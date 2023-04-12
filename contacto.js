$(document).ready(function() {
    $.ajax({
            method: "GET",
            url: "https://api.open-meteo.com/v1/forecast?latitude=34.73&longitude=58.25&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m",
        })
        .done(function(dato) {
            $("#fecha").append(dato.current_weather.time);
        });
});

