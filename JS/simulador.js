let boton = document.getElementById("cotizarPrestamo")
let cotizacionFinal = document.getElementById ("cotizacionFinal")
let dineroSolicitado= document.getElementById("dineroSolicitado")
let cuotas=document.getElementById("cuotas")

let tabla_cuota= document.getElementById("tabla_cuota")
let tabla_interes= document.getElementById("tabla_interes")
let tabla_final= document.getElementById("tabla_final")

function calculoInteres() {
    let dineroSolicitado= document.getElementById("dineroSolicitado").value
    let cuotas=document.getElementById("cuotas").value;
    let interes=dineroSolicitado*0.06
    let cuotaMensual=(dineroSolicitado/cuotas)+interes
    cotizacionFinal.innerHTML=`Deberas abonar ${cuotaMensual.toFixed(2)} por mes`
    tabla_cuota.innerHTML= ` ${cuotas}`
    tabla_interes.innerHTML= `$ ${interes}`
    tabla_final.innerHTML= `$ ${cuotaMensual.toFixed(2)}`
}

function presionarBoton() {
    
    if (dineroSolicitado.value<5000 || dineroSolicitado.value>100000 || cuotas.value<3 || cuotas.value>24) {
        cotizacionFinal.innerHTML="Error, recuerde que el mínimo es $5.000 y el máximo es $100.000 y las cuotas deben ser de 3 a 24"
        cotizacionFinal.classList.remove("alert-success")
        cotizacionFinal.classList.add("alert-danger")
        
      } else if (dineroSolicitado.value>=5000 && dineroSolicitado.value<=100000 && cuotas.value>=3 && cuotas.value<=24){
        cotizacionFinal.classList.remove("alert-danger")
        cotizacionFinal.classList.add("alert-success")
        calculoInteres()
    }
}

boton.addEventListener("click", presionarBoton)



/*
if (dineroSolicitado.value<=5000 || dineroSolicitado.value>=100000 || cuotas.value<=3 || cuotas.value>=24) {
    return alert("Error")
}else if (dineroSolicitado.value<=5000 && dineroSolicitado.value>=100000 && cuotas.value<=3 || cuotas.value>=24) {
    boton.addEventListener("click", calculoInteres)
}






/*

//INTERES ==> 72% de interes anual (6% mensual=0,06)



let bienvenida=prompt("Bienvenido a la aplicacion para calcular prestamos. Escriba OK para continuar, de otra manera, el sistema se cerrará");


if(bienvenida ==="OK" || bienvenida ==="Ok" || bienvenida ==="ok" ){
    // Ingreso dato de dinero
    let dinero=parseInt(prompt("¿Cuanta cantidad de dinero quiere recibir? Recuerde que el mínimo es $5.000 y el máximo es $100.000"));
    //Proceso el dato del dinero
    if (dinero <=100000 && dinero>=5000) {
        //Si el monto ingresado cumple la condicion.. calculo los intereses
        //Creo la función
        function Calculointeres() {
            //Ingreso dato del dinero
            let interes=dinero*0.06
            //Creo una función que procese los datos ingresados por el usuario
            function Calculocuotafinal() {
                let cuotas=parseInt(prompt("¿En cuantas cuotas lo vas a devolver? Desde 3 cuotas a 24 cuotas"));
                cuotamensual=(dinero/cuotas)+interes;
                return cuotamensual;
            };
            //Llamo a la función creada.
            return Calculocuotafinal();
        }
        //Llamo a la función que cree + salida de los datos.
        alert("Deberas abonar " + Calculointeres() + " por mes");
    }
    
} else {
    alert ("Gracias, vuelva pronto");
}
*/