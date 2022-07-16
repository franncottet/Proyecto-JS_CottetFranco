let boton = document.getElementById("trabajo")

function getSelectValue(){
    let selectedValue = document.getElementById("trabajo").value;
    if (selectedValue===1) {
        swal.fire({
        title: "Recordá qué",
        text: "Si trabajás en relación de dependencia, es obligatorio que cuentes con una antiguedad laboral de 6 meses como mínimo",
        icon: "",
        confirmButtonText: "OK"
        });
    }else if (selectedValue===2){
        swal("Si sos profesional independiente debes contar con al menos 1 año de antigüedad en la profesión actual; ")
    }else if (selectedValue===3){
        swal("Si sos comerciante o autónomo independiente, debes tener al menos 2 años en la actividad vigente.")
    }
};

boton.addEventListener("click", getSelectValue)

