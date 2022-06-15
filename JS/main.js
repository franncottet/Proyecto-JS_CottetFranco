// DESAFÍO  "INCORPORAR ARRAYS"

//PARA MI PROYECTO VOY A HACER UNA PÁGINA WEB DE PRESTAMOS Y ADELANTOS DE DINERO. QUE A PARTIR DEL DINERO PRESTADO Y EL TIEMPO QUE DEMORE LA DEVOLUCIÓN DEL DINERO (3 cuotas, 6 cuotas, 12 cuotas, 15 cuotas, 18 cuotas, 24 cuotas) CALCULE AUTOMATICAMENTE EL INTERES MENSUAL

//INTERES ==> 72% de interes anual (6% mensual=0,06)


//Solicitar al usuario que seleccione la cantidad de dinero a recibir. (min. $5000 - max.$100.000)


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


