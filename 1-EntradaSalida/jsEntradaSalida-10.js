/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var resultado;
    var porcentaje;

    porcentaje = 25;

    importe = document.getElementById("importe").value;

    importe = parseFloat(importe);

    resultado = importe - (importe * porcentaje / 100);

    document.getElementById("resultado").value = resultado;
}
