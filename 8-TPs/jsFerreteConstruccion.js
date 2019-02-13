/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaramos las variables
    var largoDelTerreno;
    var anchoDelTerreno;
    var radioDelTerreno;
    var alambreNecesario;
    var hilosDeAlambre;

    //Obtenemos los valores
    hilosDeAlambre = 3;
    largoDelTerreno = parseFloat(document.getElementById("Largo").value);
    anchoDelTerreno = parseFloat(document.getElementById("Ancho").value);

    //Procesamos los datos
    alambreNecesario = ((largoDelTerreno * 2) + (anchoDelTerreno * 2)) * hilosDeAlambre;
    alambreNecesario = alambreNecesario.toFixed(2);

    //Entregamos los resultados
    alert("Usted necesita " + alambreNecesario + " metros de alambre");
}
function Circulo () 
{
    //Declaramos las variables
    var largoDelTerreno;
    var anchoDelTerreno;
    var radioDelTerreno;
    var alambreNecesario;
    var hilosDeAlambre;

    //Obtenemos los valores
    hilosDeAlambre = 3;
    radioDelTerreno = parseFloat(document.getElementById("Radio").value);

    //Procesamos los datos
    alambreNecesario = (radioDelTerreno * 2 * 3.14) * 3;
    alambreNecesario = alambreNecesario.toFixed(2);

    //Entregamos los resultados
    alert("Usted necesita " + alambreNecesario + " metros de alambre");
	
}
function Materiales () 
{
        //Declaramos las variables
        var largoDelTerreno;
        var anchoDelTerreno;
        var radioDelTerreno;
        var bolsasDeCemento;
        var bolsasDeCal;
        var metrosCuadrados;
    
        //Obtenemos los valores
        largoDelTerreno = parseFloat(document.getElementById("Largo").value);
        anchoDelTerreno = parseFloat(document.getElementById("Ancho").value);
    
        //Procesamos los datos
        metrosCuadrados = largoDelTerreno * anchoDelTerreno;
        bolsasDeCemento = metrosCuadrados * 2;
        bolsasDeCemento = bolsasDeCemento.toFixed(0);
        bolsasDeCal = metrosCuadrados * 3;
        bolsasDeCal = bolsasDeCal.toFixed(0);

    
        //Entregamos los resultados
        alert("Usted necesita " + bolsasDeCal + " bolsas de cal, y " +bolsasDeCemento + " bolsas de cemento." );
	
}