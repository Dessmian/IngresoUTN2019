function Mostrar()
{
	var nota;

	nota = (Math.floor(Math.random() * 11));
	
	if (nota < 4)
	{
		alert("Su nota es " + nota + ", no se desanime que todavia se puede.");
	}
	else if (nota >= 4 && nota < 9)
	{
		alert("Su nota es " + nota + ", usted aprobo.");
	}
	else if(nota >= 9)
	{
		alert("Su nota es " + nota + ", exelente!");
	}
	
}