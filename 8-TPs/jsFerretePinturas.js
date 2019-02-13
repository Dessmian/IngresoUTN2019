/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFahrenheit;
    var resultadoConversion;

    temperaturaFahrenheit = parseFloat(document.getElementById("Temperatura").value);

    resultadoConversion = (temperaturaFahrenheit - 32) * 5/9;
    resultadoConversion = resultadoConversion.toFixed(2);

    alert(temperaturaFahrenheit + "° Fahrenheit son " + resultadoConversion + "° Celcius.");
}

function CentigradosFahrenheit () 
{
    var temperaturaCelcius;
    var resultadoConversion;

    temperaturaCelcius = parseFloat(document.getElementById("Temperatura").value);

    resultadoConversion = (temperaturaCelcius * 9/5) + 32;
    resultadoConversion = resultadoConversion.toFixed(2);

    alert(temperaturaCelcius + "° Celcius son " + resultadoConversion + "° Fahrenheit");
}
