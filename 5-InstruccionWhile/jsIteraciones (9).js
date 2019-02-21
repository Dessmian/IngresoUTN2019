function Mostrar()
{
	var array_numero = [];
	var contador = 0;
	var mayor;
	var menor;
	
	do{
		array_numero[contador] = parseFloat(prompt("Ingrese un numero"));
		console.log(array_numero);
		if(contador == 0)
		{
			mayor=array_numero[contador];
			menor=array_numero[contador];
		}
		if(array_numero[contador]>mayor)
		{
			mayor=array_numero[contador];
		}
		if(array_numero[contador]<menor)
		{
			menor=array_numero[contador];
		}
		contador++;
		
	}while( contador < 3);
	alert(mayor);
	alert(menor);



}//FIN DE LA FUNCIÓN 