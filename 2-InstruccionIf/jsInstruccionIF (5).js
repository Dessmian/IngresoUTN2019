function Mostrar()
{
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
        if(edad>17)
        {
            alert("No es adolecente");
        }
        else if(edad<13)
        {
            alert("No es un adolecente");
        }


}//FIN DE LA FUNCIÓN