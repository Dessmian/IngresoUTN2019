/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaramos las variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotalPrecios;

    //Obtenemos los valores
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    //Procesamos los datos
    sumaTotalPrecios = precioUno + precioDos + precioTres;
    sumaTotalPrecios = sumaTotalPrecios.toFixed(2);

    //Entregamos el resultado
    alert("La suma es " + sumaTotalPrecios);
}
function Promedio () 
{
    //Declaramos las variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotalPrecios;
    var promedioTotalPrecios;

    //Obtenemos los valores
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    //Procesamos los datos
    sumaTotalPrecios = precioUno + precioDos + precioTres;
    promedioTotalPrecios = sumaTotalPrecios / 3;
    promedioTotalPrecios = promedioTotalPrecios.toFixed(2);

    //Entregamos el resultado
    alert("El promedio es " + promedioTotalPrecios);
	
}
function PrecioFinal () 
{
    //Declaramos las variables
    var precioUno;
    var precioDos;
    var precioTres;
    var sumaTotalPrecios;
    var porcentajeIVA;
    var precioFinalConIVA;
    var valorAgregado;

    //Obtenemos los valores
    porcentajeIVA = 21
    precioUno = parseFloat(document.getElementById("PrecioUno").value);
    precioDos = parseFloat(document.getElementById("PrecioDos").value);
    precioTres = parseFloat(document.getElementById("PrecioTres").value);

    //Procesamos los datos
    sumaTotalPrecios = precioUno + precioDos + precioTres;
    valorAgregado = sumaTotalPrecios * porcentajeIVA / 100;
    precioFinalConIVA = sumaTotalPrecios + valorAgregado;
    precioFinalConIVA = precioFinalConIVA.toFixed(2);

    //Entregamos el resultado
    alert("El precio final con IVA es " + precioFinalConIVA);
	
}