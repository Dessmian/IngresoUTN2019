/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    //Declaramos las variables
    var cantidadDeLamparas;
    var marcaDeLampara;
    var descuentoPorcentual;
    var descuentoFinal;
    var porcentajeIngresosBrutos;
    var adicionalIngresosBrutos;
    var descuentoFinal;
    var precioOriginalCompra;
    var precioFinalCompra;
    var precioFinalCompraConIB;

    //Fijamos el precio de las lamapras.
    var precioLamparas = 35;

    //Fijamos el porcentaje a sumar por ingresos brutos.
    var porcentajeIngresosBrutos = 10;


    //Obtenemos los valores de cantidad y precio de lamaparas.
    cantidadDeLamparas = parseInt(document.getElementById("Cantidad").value);
    marcaDeLampara = document.getElementById("Marca").value;


    //Creamos un caso para cada marca de lamparas y generamos el importe final corepondiente
    //a cada marca y cantidad comprada de la misma.
    switch (marcaDeLampara) {

        case ("ArgentinaLuz"):
            {

                //Declaramos el porcentaje de descuento, acorde a la cantidad de lamparas.
                if (cantidadDeLamparas >= 6) {
                    descuentoPorcentual = 50;
                }
                else if (cantidadDeLamparas == 5) {
                    descuentoPorcentual = 40;
                }
                else if (cantidadDeLamparas == 4) {
                    descuentoPorcentual = 25;
                }
                else if (cantidadDeLamparas == 3) {
                    descuentoPorcentual = 15;
                }
                else {
                    descuentoPorcentual = 0;
                }

                //Procesamos los datos.
                precioOriginalCompra = cantidadDeLamparas * precioLamparas;
                descuentoFinal = precioOriginalCompra * descuentoPorcentual / 100;
                precioFinalCompra = precioOriginalCompra - descuentoFinal;
                adicionalIngresosBrutos = precioFinalCompra * porcentajeIngresosBrutos / 100;

                //Entregamos resultados al usuario.
                if (precioFinalCompra > 120) {
                    precioFinalCompraConIB = precioFinalCompra + adicionalIngresosBrutos;


                    document.getElementById("precioDescuento").value = precioFinalCompraConIB;
                    alert("Usted abono $" + adicionalIngresosBrutos + " de IIBB.");
                }
                else {
                    document.getElementById("precioDescuento").value = precioFinalCompra.toFixed(2);
                }
                
                //Siempre me olvido el break :(
                break;


            }

        case ("FelipeLamparas"):
            {


                //Declaramos el porcentaje de descuento, acorde a la cantidad de lamparas.
                if (cantidadDeLamparas >= 6) {
                    descuentoPorcentual = 50;
                }
                else if (cantidadDeLamparas == 5) {
                    descuentoPorcentual = 30;
                }
                else if (cantidadDeLamparas == 4) {
                    descuentoPorcentual = 25;
                }
                else if (cantidadDeLamparas == 3) {
                    descuentoPorcentual = 10;
                }
                else {
                    descuentoPorcentual = 0;
                }

                //Procesamos los datos.
                precioOriginalCompra = cantidadDeLamparas * precioLamparas;
                descuentoFinal = precioOriginalCompra * descuentoPorcentual / 100;
                precioFinalCompra = precioOriginalCompra - descuentoFinal;
                adicionalIngresosBrutos = precioFinalCompra * porcentajeIngresosBrutos / 100;

                //Entregamos resultados al usuario.
                if (precioFinalCompra > 120) {
                    precioFinalCompraConIB = precioFinalCompra + adicionalIngresosBrutos;


                    document.getElementById("precioDescuento").value = precioFinalCompraConIB;
                    alert("Usted abono $" + adicionalIngresosBrutos + " de IIBB.");
                }
                else {
                    document.getElementById("precioDescuento").value = precioFinalCompra.toFixed(2);
                }

                break;


            }

        case ("JeLuz"):
            {

                //Declaramos el porcentaje de descuento, acorde a la cantidad de lamparas.
                if (cantidadDeLamparas >= 6) {
                    descuentoPorcentual = 50;
                }
                else if (cantidadDeLamparas == 5) {
                    descuentoPorcentual = 30;
                }
                else if (cantidadDeLamparas == 4) {
                    descuentoPorcentual = 20;
                }
                else if (cantidadDeLamparas == 3) {
                    descuentoPorcentual = 5;
                }
                else {
                    descuentoPorcentual = 0;
                }

                //Procesamos los datos.
                precioOriginalCompra = cantidadDeLamparas * precioLamparas;
                descuentoFinal = precioOriginalCompra * descuentoPorcentual / 100;
                precioFinalCompra = precioOriginalCompra - descuentoFinal;
                adicionalIngresosBrutos = precioFinalCompra * porcentajeIngresosBrutos / 100;

                //Entregamos resultados al usuario.
                if (precioFinalCompra > 120) {
                    precioFinalCompraConIB = precioFinalCompra + adicionalIngresosBrutos;


                    document.getElementById("precioDescuento").value = precioFinalCompraConIB;
                    alert("Usted abono $" + adicionalIngresosBrutos + " de IIBB.");
                }
                else {
                    document.getElementById("precioDescuento").value = precioFinalCompra.toFixed(2);
                }

                break;

            }

        case ("HazIluminacion"):
            {


                //Declaramos el porcentaje de descuento, acorde a la cantidad de lamparas.
                if (cantidadDeLamparas >= 6) {
                    descuentoPorcentual = 50;
                }
                else if (cantidadDeLamparas == 5) {
                    descuentoPorcentual = 30;
                }
                else if (cantidadDeLamparas == 4) {
                    descuentoPorcentual = 20;
                }
                else if (cantidadDeLamparas == 3) {
                    descuentoPorcentual = 5;
                }
                else {
                    descuentoPorcentual = 0;
                }

                //Procesamos los datos.
                precioOriginalCompra = cantidadDeLamparas * precioLamparas;
                descuentoFinal = precioOriginalCompra * descuentoPorcentual / 100;
                precioFinalCompra = precioOriginalCompra - descuentoFinal;
                adicionalIngresosBrutos = precioFinalCompra * porcentajeIngresosBrutos / 100;

                //Entregamos resultados al usuario.
                if (precioFinalCompra > 120) {
                    precioFinalCompraConIB = precioFinalCompra + adicionalIngresosBrutos;


                    document.getElementById("precioDescuento").value = precioFinalCompraConIB;
                    alert("Usted abono $" + adicionalIngresosBrutos + " de IIBB.");
                }
                else {
                    document.getElementById("precioDescuento").value = precioFinalCompra.toFixed(2);
                }

                break;


            }

        case ("Osram"):
            {


                //Declaramos el porcentaje de descuento, acorde a la cantidad de lamparas.
                if (cantidadDeLamparas >= 6) {
                    descuentoPorcentual = 50;
                }
                else if (cantidadDeLamparas == 5) {
                    descuentoPorcentual = 30;
                }
                else if (cantidadDeLamparas == 4) {
                    descuentoPorcentual = 20;
                }
                else if (cantidadDeLamparas == 3) {
                    descuentoPorcentual = 5;
                }
                else {
                    descuentoPorcentual = 0;
                }

                //Procesamos los datos.
                precioOriginalCompra = cantidadDeLamparas * precioLamparas;
                descuentoFinal = precioOriginalCompra * descuentoPorcentual / 100;
                precioFinalCompra = precioOriginalCompra - descuentoFinal;
                adicionalIngresosBrutos = precioFinalCompra * porcentajeIngresosBrutos / 100;

                //Entregamos resultados al usuario.
                if (precioFinalCompra > 120) {
                    precioFinalCompraConIB = precioFinalCompra + adicionalIngresosBrutos;


                    document.getElementById("precioDescuento").value = precioFinalCompraConIB;
                    alert("Usted abono $" + adicionalIngresosBrutos + " de IIBB.");
                }
                else {
                    document.getElementById("precioDescuento").value = precioFinalCompra.toFixed(2);
                }

                break;


            }

    }


}
