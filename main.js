// DESAFÍO COMPLEMENTARIO "Crear un algoritmo utilizando un ciclo"


let number= prompt("ingrese un número del 1 al 11 para ver el jugador de fútbol según la posición. Para salir escriba SALIR");

while (number!="SALIR") {
    switch (number) {
        case "1":
            alert("El portero del equipo es EMILIANO 'Dibu' MARTINEZ");
            break;
            case "2":
                alert("El primer central de la selección argentina es CRISTIAN 'Cuti' ROMERO");
                break;
                case "3":
                alert("El lateral izquierdo de la selección argentina es NICOLAS TAGLIAFICO");
            break;
            case "4":
                alert("El lateral derecho de la selección argentina es NAHUEL MOLINA");
            break;
            case "5":
                alert("El mediocampista central de la selección argentina es LEANDRO PAREDES");
            break;
            case "6":
                alert("El segundo central de la selección argentina es NICOLAS OTAMENDI");
            break;
            case "7":
                alert("El mediocampista por derecha de la selección argentina es RODRIGO DE PAUL");
            break;
            case "8":
                alert("El mediocampista por izquierda de la selección argentina es GIOVANNI LO CELSO");
            break;
            case "9":
                alert("El delantero de área de la selección argentina es LAUTARO 'El Toro' MARTINEZ");
            break;
            case "10":
                alert("El delantero creativo de la selección argentina es LIONEL 'La pulga' MESSI");
            break;
            case "11":
                alert("El segundo delantero de la selección argentina es ANGEL 'Fideo' DI MARIA");
            break;

        default:
            alert("El número ingresado no corresponde a ninguna posición");
            break;
    }

    number=prompt("ingrese un número del 1 al 11 para ver el jugador de fútbol según la posición. Para salir escriba SALIR");
}