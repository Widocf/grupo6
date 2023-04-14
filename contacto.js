// API Fecha
$(document).ready(function() {
    $.ajax({
            method: "GET",
            url: "https://api.open-meteo.com/v1/forecast?latitude=34.73&longitude=58.25&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m",
        })
        .done(function(dato) {
            $("#fecha").append(dato.current_weather.time);
        });
});


// Validacion Contacto con Jquery

$(document).ready(function() {
	$("#formularioContacto").validate({
		rules: {
			nombre: { required: true, minlength: 5},
			email: { required:true, email: true},
			asunto: { required:true, minlength: 5, maxlength: 50},
			mensaje: { required:true, minlength: 20, maxlength: 500},
        },
        messages: {
            nombre: { required: "* Es necesario que ingrese un nombe y apellido", minlength: "*La longitud debe ser mayor a 5 caracteres"},
            email: { required:"* Debe ingresar un email", email: "*Debe ingresar un email correcto"},
            asunto: { required: "* Debe ingresar un asunto", minlength: "*La longitud debe ser mayor a 5 caracteres"},
            mensaje: { required: "* Es necesario que ingrese un mensaje", minlength: "*La longitud del mensaje debe ser mayor a 20 caracteres"},
        },
        errorElement: "div"
        });
    })

    //*