function Mostrar()
{
	var numeroUno = parseFloat(prompt("Ingrese un numero"));
	var numeroDos = parseFloat(prompt("Ingrese un numero"));
	var numeroTres = parseFloat(prompt("Ingrese un numero"));
	var numeroCuatro = parseFloat(prompt("Ingrese un numero"));
	var numeroCinco = parseFloat(prompt("Ingrese un numero"));
	var sumaAcumulada = numeroUno + numeroDos + numeroTres + numeroCuatro + numeroCinco;
document.getElementById('suma').value=sumaAcumulada.toFixed(2);
document.getElementById('promedio').value=(sumaAcumulada/5).toFixed(2);

}//FIN DE LA FUNCIÓN