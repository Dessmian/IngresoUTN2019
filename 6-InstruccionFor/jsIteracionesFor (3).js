function Mostrar()
{

var repetciones = parseFloat(prompt("ingrese el número de repeticiones"));

if(!(isNaN(repetciones)) && repetciones != Infinity){
    for(repetciones ;repetciones > 0 ; repetciones-- ){
    alert("Hola UTN FRA");
    //console.log(repetciones);
    }
}
else{
    alert("Ingrese un numero valido.")
}


}//FIN DE LA FUNCIÓN