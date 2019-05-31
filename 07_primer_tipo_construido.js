// Definimos un nuevo "tipo"
// función constructora
function Dni (numeroDni) {
    this.numero = numeroDni;
}
// metemos un método estático al dni
// La función esValido es estatica se tendra que llamar como Dni.esValido  
Dni.esValido = function (cadena)
{
    var valido = false;
    if (cadena.length < 9 ) { //&& !isNaN(parseInt(cadena, 10))) {
        valido = true;
        var i = 0;
        var todosNumeros = "0123456789";
        while (i < cadena.length && cadena.length > 0 && valido) {
            if (todosNumeros.indexOf(cadena.charAt(i)) == -1) {
                valido = false;
            }
            i++;
        }

    }     
    return valido;
}

// metemos al prototype del dni una función (el prototypo __proto__ se crea por defento asociado a Dni)
// la función calcularLetra es dinamica es decir se tendra que llamar desde una variable de tipo Dni
Dni.prototype = 
{
    calcularLetra : function () {
        var letra = '';
        var SECUENCIA_DNI = "TRWAGMYFPDXBNJZSQVHLCKE";
        letra = SECUENCIA_DNI.charAt(this.numero % 23);
        return letra;
    }
}

var dni = new Dni(8937147);

console.log(dni);
var letra = dni.calcularLetra();
console.log(letra);

console.log(Dni.esValido("12121212"));
console.log(Dni.esValido("-1211212"));
console.log(Dni.esValido("a2323"));
console.log(Dni.esValido("1212121212121212121212"));
console.log(Dni.esValido("1212 12"));
console.log("vamos con NaN ");
console.log(isNaN("12"));
console.log(isNaN(-12));
console.log(isNaN(1212));
console.log(isNaN(1212.12));
console.log("12">12);
console.log(12 > 0);
var pp = 12;
console.log(isNaN(pp));
var pp2 = new Number(12);
console.log(isNaN(pp2));
