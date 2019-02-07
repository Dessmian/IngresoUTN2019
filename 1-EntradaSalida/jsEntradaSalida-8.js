/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var nDividendo;
    var nDivisor;
    var resto;

    nDividendo = document.getElementById("numeroDividendo").value;
    nDivisor = document.getElementById("numeroDivisor").value;

    nDividendo = parseInt(nDividendo);
    nDivisor = parseInt(nDivisor);

    resto = nDividendo % nDivisor;

    alert ("El resto es " + resto);

}
