function validar(){
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;

  var regn =/^[a-zA-Z ]{2,30}$/;  
  var regx =/\S+@\S+\.\S+/;
  let flag1 = false;
  let flag2 = false;
    
    
    if(regn.test(nombre) || nombre !== "" ){
      document.getElementById("texto1").innerHTML="Nombre válido";
      document.getElementById("texto1").style.visibility="visible";
      document.getElementById("texto1").style.color= "#33ff00";
      flag1 = true;
    } else{
      document.getElementById("texto1").innerHTML="Nombre inválido";
      document.getElementById("texto1").style.visibility="visible";
      document.getElementById("texto1").style.color="#ff0000";
    }
    
    if(regx.test(email) || email !== ""){
      document.getElementById("texto2").innerHTML="Email válido";
      document.getElementById("texto2").style.visibility="visible";
      document.getElementById("texto2").style.color= "#33ff00";
      flag2 = true;
    } else{
      document.getElementById("texto2").innerHTML="E-mail inválido";
      document.getElementById("texto1").style.visibility="visible";
      document.getElementById("texto2").style.color="#ff0000";
    } 

    if ((flag1 === true) && (flag2 === true)){
      document.querySelector('.submit-button');
      const confirm = document.querySelector('.submit-confirm');
      confirm.textContent = '¡El formulario ha sido enviado con éxito!'
      confirm.style.color = '#7fffd4'
      
      document.getElementById("texto1").style.visibility = "hidden";
      document.getElementById("texto2").style.visibility = "hidden";
      document.getElementById("nombre").value = "";
      document.getElementById("email").value = "";
    }
  

}