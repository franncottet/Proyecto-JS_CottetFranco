let boton = document.getElementById("cotizarPrestamo")
let cotizacionFinal = document.getElementById ("cotizacionFinal")

function calculoInteres() {
    let dineroSolicitado= document.getElementById("dineroSolicitado").value;
    let cuotas=document.getElementById("cuotas").value;
    let interes=dineroSolicitado*0.06
    let cuotaMensual=(dineroSolicitado/cuotas)+interes
    cotizacionFinal.innerHTML=`Deberas abonar ${cuotaMensual} por mes`
}

boton.addEventListener("click", calculoInteres)

