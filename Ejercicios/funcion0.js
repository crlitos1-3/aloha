var inicio=parseInt(prompt("Ingrese el valor inicial de la tabla:"));
var fin=parseFloat(prompt("Ingrese el valor final de la tabla:"));

function Tablita(inicio, fin){
    var valor = parseInt(prompt("Ingrese la tabla de multiplicar que quiere Obtener "))
    if(inicio<=fin)
    {
   document.write("Mostrando el contenido de manera ascendente <br>")
    for (let f = inicio; f <= fin; f++)
    {
        var tabla = f * valor;
        document.write(f+"*" + valor  + "=" + tabla + "<br>")
1       
    }
  }
    else
    {
   document.write("Mostrando el contenido de manera ascendente ")
   for (let f = inicio; f >= fin; f--){
    var tabla = f * valor;
    document.write(f+"*" + valor  + "=" + tabla + "<br>")
1       
   }
    }
}