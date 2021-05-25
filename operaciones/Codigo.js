function Cambio(){
    var op,moneda,valor;
    valor=document.getElementById("cambio").value;
    op=document.getElementsByName("Operacion").value;
    moneda=document.getElementsByName("moneda").value;
    if(isNaN(valor)){
        alert("Se ingreso un valor invalido");
    }
}
