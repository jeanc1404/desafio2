//FUNCIONES

//Porcentaje de descuento
function porcentajeDescuento(edad) {
    let descuento = 0;
    if (edad<=12) {
        
        descuento = 0.05;
        return  descuento;
        alert(descuento);              
    } else if(edad>=65) {
        
        descuento = 0.1;
        return descuento;
        alert(descuento);
    } 
}
    

//Calculo del descuento
function calculoDescuento(descuento, precioBase) {
    let precioFinal = precioBase - (precioBase*descuento);
    return precioFinal;
}

//Simulador
let precioBase = 12000;
let edad = Number(prompt("Por favor ingrese la edad del pasajero: " ));
let descuento = porcentajeDescuento(edad);
let precio = calculoDescuento(descuento, precioBase);
alert(`El descuento aplicado al pasajero es del ${descuento*100}% y el total del boleto es de ${precio}`);