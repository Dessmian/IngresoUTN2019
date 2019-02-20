function Mostrar()
{
do{
var sexo = prompt("ingrese f ó m .");
}while(sexo != "f" && sexo != "m"){
    if (sexo == "f"){
    document.getElementById('Sexo').value="Femenino";
    }
    else{
    document.getElementById('Sexo').value="Masculino";    
    }
}


}//FIN DE LA FUNCIÓN