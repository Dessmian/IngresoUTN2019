function Mostrar()
{

	var contador=0;
	var suma = 0;
	var multiplicacion = 1;	
	var respuesta;
	var numero;

	do{
		numero = parseFloat(prompt("Ingrese un numero"));
		if(numero < 0){
			multiplicacion = multiplicacion * numero;
			contador++;
		}
		else{
			suma = suma + numero;
		}		
		respuesta = confirm("Desea obtener los resultados?");
	}
		while(respuesta != true);
document.getElementById('suma').value=suma;
if(contador >= 1){
document.getElementById('producto').value=multiplicacion;
}

}//FIN DE LA FUNCIÓN