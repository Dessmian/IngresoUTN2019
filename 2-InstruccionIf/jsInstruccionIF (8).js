function Mostrar()
{
    var edad;
    var estadoCivil;

    edad = parseInt(document.getElementById("edad").value);
    estadoCivil = document.getElementById("estadoCivil").value;
    if(edad>=18 & estadoCivil == "Soltero")
    {
        alert("Es mayor y esta soltero");
    }


	


}//FIN DE LA FUNCIÓN