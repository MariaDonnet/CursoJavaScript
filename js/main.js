alert("BIENVENIDOS A AZORES, EL SISTEMA DE RESERVAS DE TUS VIAJES")

  let nombreIngresado = "";
nombreIngresado = prompt("Ingresar Nombre")
if(nombreIngresado == ""){
    alert("INGRESE SU NOMBRE")
}else{
    alert("NOMBRE INGRESADO:"+" "+nombreIngresado)
}

let apellidoIngresado = "";
apellidoIngresado = prompt("Ingresar apellido")
if(apellidoIngresado == ""){
    alert("INGRESE SU APELLIDO")
}
else{
    alert("APELLIDO INGRESADO:"+" "+apellidoIngresado)
}

if((nombreIngresado !="") && (apellidoIngresado !=""  )){
  alert("Gracias por ingresar su Nombre y Apellido");
}
else{
  alert("error: Ingresar nombre y apellido para poder utilizar nuestro sistema de reserva de viajes");
}

let edad = Number(prompt("ingrese su edad"));
if (edad >=18){
  alert("Ya podes acceder al servicio")
}    
if(edad <18){
  alert("Necesitas tener la mayoria de edad para accceder")
}


function creacionVuelo (numero, nombre) {
  //La funcion informa que la persona registro correctamente su vuelo 
  alert("DNI "+numero+": "+nombre+" vueloreservado")
  console.log("DNI "+numero+": "+nombre);
}

