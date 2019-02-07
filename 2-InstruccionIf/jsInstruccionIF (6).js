function Mostrar()
{
    var edad;
    edad = document.getElementById("edad").value;
    edad = parseInt(edad);
        if(edad<0)
        {
            alert("Ingrese una edad valida")
        }    
        else if(edad>=18)
        {
            alert("Es un adulto")
        }
        else if(edad<13)
        {
            alert("Es un niño")
        }
        else if(edad>=13 & edad<=17)
        {
            alert("Es un adolecente")
        }  






}//FIN DE LA FUNCIÓN
