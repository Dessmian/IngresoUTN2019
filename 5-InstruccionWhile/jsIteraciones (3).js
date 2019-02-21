function Mostrar()
{
    var contador;

    contador = 1;

do{
    contador++;
    password = prompt ("Ingrese la clave");    
}while (password != "utn750" && !(contador > 5)){
    if(password === "utn750"){
        alert("Bienvenido");
    }
    else{
        alert("Contraseña incorrecta");
    }
}

}//FIN DE LA FUNCIÓN
