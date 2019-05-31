function PersonaIMC (altura, peso)
{
    this.altura = altura; // en centimetros
    this.peso = peso; // en kilos
}

PersonaIMC.prototype = 
{
    calcularIMCnum : function () 
    {
        var IMC = Math.trunc(this.peso / ((this.altura/100)**2));
        return IMC;
    },

    calcularIMClit : function () 
    {
        var nIMC = this.calcularIMCnum();
        var literalIMC;
        if (nIMC < 16) {
            literalIMC = "desnutrido";
         } else if (nIMC < 18) {
            literalIMC = "delgado";
         } else if (nIMC < 25) {
            literalIMC = "normal";
         } else if (nIMC < 31) {
            literalIMC = "sobrepeso";
         } else {
            literalIMC = "obesidad";
         }
         return literalIMC;
    } 
}