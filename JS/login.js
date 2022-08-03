const formulario = document.getElementById("formulario")

const userName=document.getElementById("userName")
const userEmail=document.getElementById("userEmail")

const alertSuccess=document.getElementById("alertSuccess")
const EmailError=document.getElementById("EmailError")
const NameError=document.getElementById("NameError")

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

const mensajeExito= () =>{
    alertSuccess.classList.remove("d-none")
    alertSuccess.textContent="Tu cuenta ha sido creada con éxito. Ya puedes solicitar prestamos"
}

const mensajeError = (errores)=>{
errores.forEach(i=>{
    i.tipo.classList.remove("d-none")
    i.tipo.textContent=i.msj
    
})
}

formulario.addEventListener("submit", e=>{

    alertSuccess.classList.add("d-none")

    //e.preventDefault();

    const errores=[];



if (!regUserName.test(userName.value)) {
    userName.classList.add("is-invalid")
    errores.push({
        tipo: NameError,
        msj: "Formato no válido en el campo nombre, solo letras"
    })
}else{
    userName.classList.remove("is-invalid")
    userName.classList.add("is-valid")
    NameError.classList.add("d-none")
}

if (!regUserEmail.test(userEmail.value)) {
    userEmail.classList.add("is-invalid")
    errores.push({
        tipo: EmailError,
        msj: "Ingrese un correo válido"
    })
}else{
    userEmail.classList.remove("is-invalid")
    userEmail.classList.add("is-valid")
    EmailError.classList.add("d-none")
}

if (errores.lenght!==0) {
    mensajeError(errores)
    return
}

mensajeExito()
console.log("formulario enviado");
})
















/*
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

*/