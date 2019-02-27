function Mostrar()
{

    var numeroIngresado;
    var restoDeNumeroIngresado;
    var array_numerosPares = []; 
    var asignadorDeEspacio = 0;  

    numeroIngresado = parseInt(prompt("Ingrese un numero."))

    if(isNaN(numeroIngresado) || numeroIngresado == Infinity){
        alert("Ingrese un numero valido.")
    }else{
        for(numeroIngresado; numeroIngresado>1; numeroIngresado--){
            do{
                restoDeNumeroIngresado= numeroIngresado % 2;
                if(restoDeNumeroIngresado = 0){
                    array_numerosPares[asignadorDeEspacio] = numeroIngresado;
                    asignadorDeEspacio++;
                }
            }while(numeroIngresado >=2);
        }
    }
    
    console.log(array_numerosPares);
    



}//FIN DE LA FUNCIÓN