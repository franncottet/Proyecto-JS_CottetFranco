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