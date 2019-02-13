/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
    var sueldo;
    var resultado;
    var porcentaje;

    porcentaje = 10

    sueldo = parseFloat(document.getElementById("sueldo").value);

    resultado = sueldo + (sueldo * porcentaje / 100);

    document.getElementById("resultado").value = resultado;
	
}
