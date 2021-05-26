function Cambio(){
    var operacion,moneda,valor;
    valor=document.getElementById("cambio").value;
    operacion=document.getElementsByName("Operacion").value;
    moneda=document.getElementsByName("moneda").value;
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
    }
}
