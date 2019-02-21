function Mostrar()
{
    var genero;
do{
genero = prompt("ingrese f ó m .");
}while(genero != "f" && genero != "m"){
    if (genero == "f"){
    document.getElementById('Sexo').value="Femenino";
    }
    else{
    document.getElementById('Sexo').value="Masculino";    
    }
}


}//FIN DE LA FUNCIÓN