/**
 * Calcula la compra y venta de moneda extranjera en pesos argentinos
 * @method Cambio
 */
function Cambio() {
    var operacion, moneda, valor, Total;
    valor = document.getElementById("cambio").value;
    operacion = document.getElementById("option1").value;
    moneda = document.getElementById("option2").value;
    if (valor <= 0) {
        alert("SE HAN INGRESADOS VALORES NO VÁLIDOS");
    } else if (valor > 0) {
        if (operacion == "vender") {
            if(moneda=="dolar") {
                Total=Number(valor)/155;
            }else if(moneda=="euro"){
                Total=Number(valor)/185;
            }else if(moneda=="real"){
                Total=Number(valor)/20;
            }
        }else if (operacion == "comprar") {
            if(moneda=="dolar") {
                Total=Number(valor)*150;
            }else if(moneda=="euro"){
                Total=Number(valor)*180;
            }else if(moneda=="real"){
                Total=Number(valor)*15;
            }
        }
        document.getElementById("Total_Cambio").value = Total.toFixed(2);
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

/**
 * Calcula el interes del prestamo y el valor de las cuotas
 * @method calcularPrestamo
 */
function calcularPrestamo() {
    var dinero, cuotas, valor_Cuotas, Total;
    dinero = document.getElementById("Inversion_P").value;
    cuotas = document.getElementById("Renovacion_Cuotas").value;
    if (dinero <= 0 || cuotas <= 0) {
        alert("SE HAN INGRESADOS VALORES NO VÁLIDOS")
    } else if (dinero > 0 && cuotas > 0) {
        if (cuotas <= 10) {
            Total = Number(dinero) + ((Number(dinero) * 15) / 100);
            valor_Cuotas = Number(Total) / Number(cuotas);
        } else if (cuotas <= 25) {
            Total = Number(dinero) + ((Number(dinero) * 25) / 100);
            valor_Cuotas = Number(Total) / Number(cuotas);
        } else if (cuotas <= 50) {
            Total = Number(dinero) + ((Number(dinero) * 50) / 100);
            valor_Cuotas = Number(Total) / Number(cuotas);
        } else if (cuotas > 50) {
            Total = Number(dinero) + ((Number(dinero) * 65) / 100);
            valor_Cuotas = Number(Total) / Number(cuotas);
        }
        document.getElementById("Total_P").value = Total.toFixed(2);
        document.getElementById("Cuotas_P").value = valor_Cuotas.toFixed(2);
    }
}