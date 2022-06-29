// 

let boton = document.getElementById("solicitarPrestamo")
let cotizacionFinal = document.getElementById ("cotizacionFinal")

function calculoInteres() {
    let dineroSolicitado= document.getElementById("dineroSolicitado").value;
    let cuotas=document.getElementById("cuotas").value;
    let interes=dineroSolicitado*0.06
    cotizacionFinal.innerHTML=`Deberas abonar ${interes} por mes`
}

boton.addEventListener("click", calculoInteres)

 


/*



class Persona{
    constructor(person, edad, ocupacion, antlaboral, libredeudas){
        this.person=person;
        this.edad=edad
        this.ocupacion=ocupacion;
        this.antlaboral=antlaboral;
        this.libredeudas=libredeudas
    }
    
}



let personas=new Persona(prompt("Ingresa tu nombre y apellido"), parseInt(prompt("Ingresa tu edad")) ,prompt("Ingresa tu ocupacion"), parseInt(prompt("Ingresa tu antiguedad laboral en años y meses con coma (ejemplo: 1 año y medio serian -> 1,6")) ,
prompt("Estas libre de deudas? Escribir SI o NO") )

console.log(personas)


for (let prop in Persona) {
    
    if (prop.edad>=18 && prop.antlaboral>=1 && prop.libredeudas==SI ) {
        console.log("Felicidades, cumple con todos los requisitos para solicitar una cotización")
    }else{
        console.log("No cumple con todos los requisitos para solicitar una cotización: Ser mayor a 18 años, antiguedad laboral de 1 año y estar libre de deudas ")
    }
}


const listaDatos = document.querySelector("#listaDatos")
const arrayDatos =[this.edad, this.ocupación, this.antlaboral, this.libredeudas]

for (const prop of arrayDatos) {
    console.log(prop);
}
    
console.log(listaDatos);
    
    



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




/*
//Solicitar al usuario que seleccione la cantidad de dinero a recibir. (min. $5000 - max.$100.000)

let bienvenida=prompt("Bienvenido a la aplicacion para calcular prestamos. Escriba OK para continuar o ESC para salir.");


let dinero=parseInt(prompt("¿Cuanta cantidad de dinero quiere recibir? Recuerde que el mínimo es $5.000 y el máximo es $100.000 - Escriba 0 para SALIR"));
let cuotas=parseInt(prompt("¿En cuantas cuotas lo vas a devolver? Desde 3 cuotas a 24 cuotas"))

//Declarar las funciones con los calculos de interés y cuotas mensuales

function Calculointeres() {
    interes=dinero*0.06
}
function Calculocuotafinal() {
    cuotamensual=(dinero/cuotas)+interes;
}

//Ejecutar el While - "Si" se cumplen las condiciones, se ejecutan las funciones y se informa al usuario el número y monto de cada cuota, sino, se sale del sistema o se pide que ingrese un nuevo número.

while (dinero!=0) {
    if (dinero<=100000 && dinero>=5000 && cuotas>=3 && cuotas<=24) {
        
        Calculointeres();
        Calculocuotafinal();
        alert (cuotas + " cuotas de " + cuotamensual)
    }else if(dinero==0){
        break
    }else{
        alert("el número ingresado no es correcto, recuerde que el mínimo es $5.000 y el máximo es $100.000. Desde 3 cuotas a 24 cuotas");
    }
    
    
    dinero=parseInt(prompt("¿Cuanta cantidad de dinero quiere recibir? Recuerde que el mínimo es $5.000 y el máximo es $100.000 - Escriba 0 para SALIR"));
    cuotas=parseInt(prompt("¿En cuantas cuotas lo vas a devolver? Desde 3 cuotas a 24 cuotas"))
}

*/
