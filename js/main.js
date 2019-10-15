function openDay(evt, Day) {
    
    var i, tabcontent, tablinks;
  
    /*Se ponen como ocultas todas las noticias*/ 
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
   /*Se les quita el active a todos los elementos del menu*/ 
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    /*Se le agrega el atributo display:block al elemento que se proporciona es decir el dia de la semana*/ 
    document.getElementById(Day).style.display = "block";
    /*Se pone como activo al boton que llamo la funcion*/ 
    evt.currentTarget.className += " active";
  }

  window.onload = function()
{
  /*Se busca el id abierto y se le manda el evento click al cargar la pagina para que aparezca por defecto*/ 
    document.getElementById("abierto").click();
}
  