let nombre = [];

alert("Ingrese los siguientes Datos que se le piden: \n");

 let Nombre=(prompt("Ingrese el Nombre del Empleado:  \n"));
 let Salario=parseFloat(prompt("Ingrese el salario que recibe: \n"));
 if(Salario<257 || Salario>3000)
 {
    Salario=parseInt(prompt("Ingrese el salario que recibe: entre 257-3000 \n"))
    
 }
 let ISS=Salario*0.03;
 let AFP= Salario*0.0625;
 let Nuevosala=Salario-ISS-AFP;

 let tramo='';
 let Exceso=0;
 let porcentajedeTR=0;
 let CuotaFJ=0;

if (Nuevosala<=472)
{
    tramo='Tramo 1';
    Exceso=0;
    porcentajedeTR=0;
    CuotaFJ=0;

}
else if (Nuevosala<=895)
{
    tramo='Tramo 2';
    Exceso=472;
    porcentajedeTR=0.1;
    CuotaFJ=17.6;
}
else if (Nuevosala<=2038)
{
    tramo='Tramo 3';
    Exceso=895;
    porcentajedeTR=0.3;
    CuotaFJ=60;
}
else 
{
 tramo='Tramo 4';
    Exceso=2.000;
    porcentajedeTR=0.3;
    CuotaFJ=288; 
}
let Renta=(Nuevosala-Exceso)*porcentajedeTR+CuotaFJ;
let SalararioFT=Salario-Nuevosala //Tuve errores en el calculo

document.write("Su Nombre es:"+Nombre+"<br>")
document.write("Su salario Inicial es de:"+Salario+"<br>");
document.write("Su Nuevo salario total es de:"+Nuevosala+"<br>");
document.write("Su ISSS total es de:"+ISS+"<br>");
document.write("Su AFP total es de:"+AFP+"<br>");
document.write("Su Renta Total es de:"+Renta+"<br>");
document.write("Su Salario final total es de:"+SalararioFT+"<br>");