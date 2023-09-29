
/*Creamos una constante  y a partir de ahi creamos un documento con su
id y llamamos al id , diciendole que es un contenedor de texto.
A partir de ahi llamariamos a los dos span para rellenar los datos, 
la base y la altura , para que salga decimal y transformar lo que recogemos
utilizariamos parseFloat */ 

const calcular = ()=>{
  const base= parseFloat(document.getElementById("base").value );
  const altura= parseFloat(document.getElementById("altura").value );
  const salida = document.getElementById("salida");

  if(isNaN(base)){
    alert("No es un numero");
  }
  if(isNaN(altura)){
    alert("No es un numero");
  }
  
  salida.textContent=(base * altura/2).toFixed(2);

  
}
