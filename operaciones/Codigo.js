/**
 * Calcula la compra y venta de moneda extranjera en pesos argentinos
 * @method Cambio
 */
function Cambio() {
    var operacion, moneda, valor, Total;
    valor = document.getElementById("cambio").value;
    operacion = document.getElementsById("option1").value;
    moneda = document.getElementsById("option2").value;
    if (valor <= 0) {
        alert("SE HAN INGRESADOS VALORES NO VÁLIDOS");
    }else if (valor > 0) {
        if (operacion == "vender" && moneda == "dolar") {
            Total = Number(valor) / 155;
            document.getElementById("Total_Cambio").value = Total.toFixed(2);
        } else if (operacion == "vender" && operacion == "euro") {
            Total = Number(valor) / 185;
            document.getElementById("Total_Cambio").value = Total.toFixed(2);
        } else if (operacion == "vender" && operacion == "real") {
            Total = Number(valor) / 20;
            document.getElementById("Total_Cambio").value = Total.toFixed(2);
        }
        if (operacion == "comprar" && moneda == "dolar") {
            Total = Number(valor) * 150;
            document.getElementById("Total_Cambio").value = Total.toFixed(2);
        } else if (operacion == "comprar" && operacion == "euro") {
            Total = Number(valor) * 180;
            document.getElementById("Total_Cambio").value = Total.toFixed(2);
        } else if (operacion == "comprar" && operacion == "real") {
            Total = Number(valor) * 15;
            document.getElementById("Total_Cambio").value = Total.toFixed(2);
        }
    }
}

/**
 * Calcula el Plazo fijo segun el dinero invertido
 * @method calcularPlazoFijo
 */
function calcularPlazoFijo() {
    var renovacion = document.getElementById("Renovacion_Meses").value;
    var dinero = document.getElementById("Inversion_PF").value;
    var banco = document.getElementById("option3");
    var banco_Value = banco.options[banco.selectedIndex].value;
    var porcentaje, porcentaje_Mensual, ganancia, Total, Total_Mensual;
    if (banco_Value == "PF_Pesos") {
        porcentaje = 37;
    } else if (banco_Value == "PF_Dolares") {
        porcentaje = 1.40;
    }
    porcentaje_Mensual = (Number(renovacion) * Number(porcentaje)) / 12;
    ganancia = (Number(dinero) * Number(porcentaje_Mensual)) / 100;
    Total = Number(dinero) + Number(ganancia);
    Total_Mensual = Number(Total) / Number(renovacion);
    if (dinero > 0 && renovacion > 0) {
        document.getElementById("Total_PF").value = Total.toFixed(2);
    } else if (dinero <= 0 || renovacion <= 0) {
        alert("SE HAN INGRESADOS VALORES NO VÁLIDOS")
    }
}

function calcularPrestamo() {

}