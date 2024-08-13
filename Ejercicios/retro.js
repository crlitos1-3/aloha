var si,i,d,sf,n,u,r;
var nom,descuent;
var empleado=0, gerente=0;


function tabla (si,i,d,sf,n){
    document.write('<b>PLANILLA DE EMPLEADOS</b><br><br>');
			document.write('<table border=2>');
			document.write('<tr><td>Número obrero</td>  <td>Ocupacion</td> <td>Nombre Obrero</td> <td>Salario inicial</td> <td>Descuento</td> <td>Descuento por Uniforme</td> <td>Salario final</td> </tr>');

            n=parseInt(prompt("Ingrese la cantidad de empleados"));
			for (i=1;i<=n;i++)
				{
					nom=prompt('Digite el nombre del obrero número '+i+'');
                     u=prompt('Usted es gerente \n Si usted es gerente se les descontara $50 \n 1-Si \n 2-No')
					 if(u==1)
					 {
						r='Gerente'
						descuent=50;
					    gerente++;
						
					 }else{
						r='Empleado'
						descuent=25;
					    empleado++;
					 }
					si=prompt('Digite el salario inicial del empleado','');
                    while(si<=356)
                    {
                        si=prompt('Digite un salario mayor a 356','');
                    }
					d=si*0.05;
					sf=(si-d)-descuent;
					var ms=sf/n;
					var md=si/d;
					var mu=si/descuent;
					
					

					document.write('<tr> <td>'+i+'</td> <td>'+r+'</td> <td>'+nom+'</td> <td>$'+si+'</td> <td>$'+d+'</td> <td>'+descuent+'</td> <td>$'+sf+'</td> </tr>');
				}
			document.write('</table>');
			document.write("<br>")
			

			document.write('<fieldset>')
			document.write('<legend>')
			document.write('Datos Generales:')
			document.write('</legend>')

			
			document.write('El total en conceptos de salarios pagados es: '+ms.toFixed(2))
			document.write("<br>")
			document.write('El total en concepto de descuento 1: ' +md.toFixed(2))
			document.write("<br>")
			document.write('El total en concepto de Uniformes: ' +mu.toFixed(2))
			document.write("<br>")
			document.write('El total de Gerentes: ' +gerente)
			document.write("<br>")
			document.write('El total de Empleados: ' +empleado)
			

			document.write('</fieldset>')


}