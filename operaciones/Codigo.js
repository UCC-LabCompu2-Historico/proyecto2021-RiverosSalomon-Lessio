function Cambio() {

}

function calcularPlazoFijo() {
    var renovacion = document.getElementById("Renovacion_Meses").value;
    var dinero = document.getElementById("Inversion_PF").value;
    var banco = document.getElementById("option3");
    var banco_Value = banco.options[banco.selectedIndex].value;
    if (banco_Value == 1) {
        var porcentaje_Mensual = 3.08;
    }
    if (banco_Value == 2) {
        var porcentaje_Mensual = 0.12;
    }
    var ganancia = (Number(dinero) * Number(porcentaje_Mensual))/100;
    var Total= Number(dinero) + Number(ganancia);
    var Total_Mensual= Number(Total) / Number(renovacion);
    if(dinero>0 && renovacion>0){
        document.getElementById("Total_PF").value= Total;
    }
}

function calcularPrestamo() {

}