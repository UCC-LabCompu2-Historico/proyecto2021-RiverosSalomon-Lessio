/**
 * Calcula la compra y venta de moneda extranjera en pesos argentinos
 * @method Cambio
 */
function Cambio() {
    var operacion, moneda, valor, Total;
    valor = document.getElementById("cambio").value;
    operacion = document.getElementById("option1").value;
    moneda = document.getElementById("option2").value;
    if (valor <= 0 || operacion=="nada" || moneda=="nada") {
        alert("SE HAN INGRESADOS VALORES NO VÁLIDOS O FALTAN DATOS");
        document.Tipo_de_Cambio.cambio.value = "";
    } else if (valor > 0) {
        if (operacion == "vender") {
            if (moneda == "dolar" && valor <= 31000) {
                Total = Number(valor) / 155;
            } else if (moneda == "dolar" && valor > 31000) {
                alert("DEBIDO A NORMATIVAS NACIONALES SOLO PUEDES ADQUIRIR HASTA US$200");
                document.Tipo_de_Cambio.cambio.value = "";
            } else if (moneda == "euro" && valor <= 37000) {
                Total = Number(valor) / 185;
            } else if (moneda == "euro" && valor > 37000) {
                alert("DEBIDO A NORMATIVAS NACIONALES SOLO PUEDES ADQUIRIR HASTA €200");
                document.Tipo_de_Cambio.cambio.value = "";
            } else if (moneda == "real" && valor <= 4000) {
                Total = Number(valor) / 20;
            } else if (moneda == "real" && valor > 4000) {
                alert("DEBIDO A NORMATIVAS NACIONALES SOLO PUEDES ADQUIRIR HASTA R$200");
                document.Tipo_de_Cambio.cambio.value = "";
            }
        } else if (operacion == "comprar") {
            if (moneda == "dolar") {
                Total = Number(valor) * 150;
            } else if (moneda == "euro") {
                Total = Number(valor) * 180;
            } else if (moneda == "real") {
                Total = Number(valor) * 15;
            }
        }
        document.getElementById("Total_Cambio").value = Total.toFixed(2);
        Tipo_de_Cambio(operacion, moneda, valor, Total)
    }
}

/**
 *  Crea un comprobante con los datos ingresados en tipo de cambio
 * @method Tipo_de_Cambio
 * @param {text} Operaciones - eleccion entre vender o comprar
 * @param {text} Moneda - eleccion entre las diferentes monedas extranjeras
 * @param {number} Valor - monto ingresado para cambiar a la moneda que corresponda
 * @param {number} Total - dinero total luego de realizar la operacion
 */
function Tipo_de_Cambio(Operaciones, Moneda, Valor, Total) {
    var canvas = document.getElementById("comprobante_TC");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    ctx.font = "25px Arial";
    if (Operaciones == "vender") {
        if (Moneda == "dolar") {
            ctx.fillText('Operación: ' + Operaciones, 50, 150);
            ctx.fillText('Moneda Extranjera: ' + Moneda, 50, 200);
            ctx.fillText('El monto ingresado es $' + Number(Valor).toFixed(2), 50, 250);
            ctx.fillText('Le hemos vendido US$' + Total.toFixed(2), 50, 300);
        } else if (Moneda == "euro") {
            ctx.fillText('Operación: ' + Operaciones, 50, 150);
            ctx.fillText('Moneda Extranjera: ' + Moneda, 50, 200);
            ctx.fillText('El monto ingresado es  $' + Number(Valor).toFixed(2), 50, 250);
            ctx.fillText('Le hemos vendido  €' + Total.toFixed(2), 50, 300);
        } else if (Moneda == "real") {
            ctx.fillText('Operación: ' + Operaciones, 50, 150);
            ctx.fillText('Moneda Extranjera: ' + Moneda, 50, 200);
            ctx.fillText('El monto ingresado es  $' + Number(Valor).toFixed(2), 50, 250);
            ctx.fillText('Le hemos vendido  R$' + Total.toFixed(2), 50, 300);
        }
    } else if (Operaciones == "comprar") {
        if (Moneda == "dolar") {
            ctx.fillText('Operación: ' + Operaciones, 50, 150);
            ctx.fillText('Moneda Extranjera: ' + Moneda, 50, 200);
            ctx.fillText('El monto ingresado es US$' + Number(Valor).toFixed(2), 50, 250);
            ctx.fillText('Le hemos comprado $' + Total.toFixed(2), 50, 300);
        } else if (Moneda == "euro") {
            ctx.fillText('Operación: ' + Operaciones, 50, 150);
            ctx.fillText('Moneda Extranjera: ' + Moneda, 50, 200);
            ctx.fillText('El monto ingresado es  €' + Number(Valor).toFixed(2), 50, 250);
            ctx.fillText('Le hemos comprado $' + Total.toFixed(2), 50, 300);
        } else if (Moneda == "real") {
            ctx.fillText('Operación: ' + Operaciones, 50, 150);
            ctx.fillText('Moneda Extranjera: ' + Moneda, 50, 200);
            ctx.fillText('El monto ingresado es  R$' + Number(Valor).toFixed(2), 50, 250);
            ctx.fillText('Le hemos comprado $ ' + Total.toFixed(2), 50, 300);
        }
    }
}

/**
 * Calcula el Plazo fijo segun el dinero invertido
 * Y llama a una funcion para realiza una grafica
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
    Total_Mensual = Number(ganancia) / Number(renovacion);
    if (dinero <= 0 || renovacion <= 0 || renovacion.includes(".") || renovacion.includes(",") || banco_Value=="nada") {
        alert("SE HAN INGRESADOS VALORES NO VÁLIDOS O FALTAN DATOS");
        document.Plazo_Fijo.Renovacion_PF.value = "";
        document.Plazo_Fijo.Inversion_PF.value = "";
    } else if (dinero > 1000000 || renovacion > 50) {
        alert("USTED PUEDE CREAR PLAZOS FIJOS DE HASTA $1.000.000 Y LA RENOVACIÓN MÁXIMA ES 50 MESES");
        document.Plazo_Fijo.Renovacion_PF.value = "";
        document.Plazo_Fijo.Inversion_PF.value = "";
    } else if (dinero > 0 && renovacion > 0) {
        document.getElementById("Total_PF").value = Total.toFixed(2);
        document.getElementById("Ganancias_PF").value = ganancia.toFixed(2);
        var currentdate = new Date();
        var arrDate = [];
        var init = currentdate.getMonth() + 1;
        arrDate.push(init);
        for (var i = 1; i <= renovacion; i++) {
            if (init < 12) {
                arrDate[i] = init + 1;
                init++;
            } else {
                init = 0;
                arrDate[i] = init + 1;
                init++;
            }
        }
        var mlist = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var arrMonth = [];
        for (var i = 0; i <= renovacion; i++) {
            arrMonth.push(mlist[arrDate[i] - 1]);
        }
        var arrDinero = [];
        arrDinero.push(dinero);
        for (var x = 1; x <= renovacion; x++) {
            var dd = Number(arrDinero[x - 1])
            arrDinero[x] = dd + Number(Total_Mensual);
        }
        crearGrafico(arrMonth, arrDinero);
    }
}

/**
 *  Crea un grafico para mostrar el progreso del plazo fijo
 * @method crearGrafico
 * @param {number} Meses - tiempo de renovacion, son los meses que figuran en el grafico
 * @param {number} Dinero - monto inicial y lineal segun el tiempo de renovacion
 */
function crearGrafico(Meses, Dinero) {
    var canvas = document.getElementById("Grafico_PF");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    var chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Meses,
            datasets: [{
                label: 'GRAFICO DE INVERSION',
                backgroundColor: 'rgb(255,51,51)',
                borderColor: 'rgb(0,0,0)',
                data: Dinero
            }]
        },
        options: {}
    });
}

/**
 * Calcula el interes del prestamo y el valor de las cuotas
 * @method calcularPrestamo
 */
function calcularPrestamo() {
    var dinero, cuotas, valor_Cuotas, Total, fecha;
    fecha = document.getElementById("fecha_P").value;
    dinero = document.getElementById("Inversion_P").value;
    cuotas = document.getElementById("Renovacion_Cuotas").value;
    if (dinero <= 0 || cuotas <= 0 || cuotas.includes(".") || cuotas.includes(",") || fecha == "") {
        alert("SE HAN INGRESADOS VALORES NO VÁLIDOS O FALTAN VALORES");
        document.Prestamos.Renovacion_P.value = "";
        document.Prestamos.Inversion_P.value = "";
        document.Prestamos.fecha_P.value = "";
    } else if (dinero > 1000000 || cuotas > 100 || fecha == "") {
        alert("USTED NO PUEDE PEDIR MÁS DE $1.000.000 Y LA CANTIDAD MÁXIMA DE CUOTAS ES 100");
        document.Prestamos.Renovacion_P.value = "";
        document.Prestamos.Inversion_P.value = "";
        document.Prestamos.fecha_P.value = "";
    } else if (dinero > 0 && cuotas > 0 && cuotas <= 100 && dinero <= 1000000 && fecha != "") {
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
        comprobante(dinero,fecha, cuotas, valor_Cuotas, Total);
    }
}

/**
 *  Crea un comprobante con los datos ingresados en prestamos
 * @method comprobante
 * @param {number} Dinero - monto inicial solicitado
 * @param {text} Fecha - fecha en la cual se pidio el prestamo
 * @param {number} Cuotas - cantidad de cuotas solicitas
 * @param {number} Valor - importe de cada cuota
 * @param {number} Total - el monto que se debe devolver
 */
function comprobante(Dinero,Fecha, Cuotas, Valor, Total) {
    var canvas = document.getElementById("comprobante_P");
    var ctx = canvas.getContext("2d");
    canvas.width = canvas.width;
    ctx.font = "25px Arial";
    ctx.fillText('El monto solicitado es $'+ Number(Dinero).toFixed(2),50, 100)
    ctx.fillText('El préstamo se pidió el ' + Fecha, 50, 150);
    ctx.fillText('Se pagará en ' + Cuotas + ' cuotas', 50, 200);
    ctx.fillText('El valor de cada cuota es $' + Valor.toFixed(2), 50, 250);
    ctx.fillText('El valor a devolver es $' + Total.toFixed(2), 50, 300);
}
