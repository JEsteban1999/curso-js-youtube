precioCofla = prompt("Ingrese el dinero disponible, Cofla: ");
precioRoberto = prompt("Ingrese el dinero disponible, Roberto: ");
precioPedro = prompt("Ingrese el dinero disponible, Pedro: ");

precioCofla = parseInt(precioCofla);
precioRoberto = parseInt(precioRoberto);
precioPedro = parseInt(precioPedro);


// Cofla

if (precioCofla >= 0.6 && precioCofla < 1){
    alert("Cofla, comprate el helado de agua");
    alert("Y te sobran " + (precioCofla - 0.6));
}

else if (precioCofla >= 1 && precioCofla < 1.6){
    alert("Cofla, comprate el helado de crema");
    alert("Y te sobran " + (precioCofla - 1));
}

else if (precioCofla >= 1.6 && precioCofla < 1.7){
    alert("Cofla, comprate el helado de heladix");
    alert("Y te sobran " + (precioCofla - 1.6));
}

else if (precioCofla >= 1.7 && precioCofla < 1.8){
    alert("Cofla, comprate el helado de helaldovich");
    alert("Y te sobran " + (precioCofla - 1.7));
}

else if (precioCofla >= 1.8 && precioCofla < 2.9){
    alert("Cofla, comprate el helado de helardo");
    alert("Y te sobran " + (precioCofla - 1.8));
}

else if (precioCofla >= 2.9){
    alert("Cofla, comprate el helado con confites o el pote de 1/4 kg");
    alert("Y te sobran " + (precioCofla - 2.9));
}

else{
    alert("Lo siento Cofla, no te alcanza para ningun helado");
}

// Roberto

if (precioRoberto >= 0.6 && precioRoberto < 1){
    alert("Roberto, comprate el helado de agua");
    alert("Y te sobran " + (precioRoberto - 0.6));
}

else if (precioRoberto >= 1 && precioRoberto < 1.6){
    alert("Roberto, comprate el helado de crema");
    alert("Y te sobran " + (precioRoberto - 1));
}

else if (precioRoberto >= 1.6 && precioRoberto < 1.7){
    alert("Roberto, comprate el helado de heladix");
    alert("Y te sobran " + (precioRoberto - 1.6));
}

else if (precioRoberto >= 1.7 && precioRoberto < 1.8){
    alert("Roberto, comprate el helado de helaldovich");
    alert("Y te sobran " + (precioRoberto - 1.7));
}

else if (precioRoberto >= 1.8 && precioRoberto < 2.9){
    alert("Roberto, comprate el helado de helardo");
    alert("Y te sobran " + (precioRoberto - 1.8));
}

else if (precioRoberto >= 2.9){
    alert("Roberto, comprate el helado con confites o el pote de 1/4 kg");
    alert("Y te sobran " + (precioRoberto - 2.9));
}

else{
    alert("Lo siento Roberto, no te alcanza para ningun helado");
}

// Pedro

if (precioPedro >= 0.6 && precioPedro < 1){
    alert("Pedro, comprate el helado de agua");
    alert("Y te sobran " + (precioPedro - 0.6));
}

else if (precioPedro >= 1 && precioPedro < 1.6){
    alert("Pedro, comprate el helado de crema");
    alert("Y te sobran " + (precioPedro - 1));
}

else if (precioPedro >= 1.6 && precioPedro < 1.7){
    alert("Pedro, comprate el helado de heladix");
    alert("Y te sobran " + (precioPedro - 1.6));
}

else if (precioPedro >= 1.7 && precioPedro < 1.8){
    alert("Pedro, comprate el helado de helaldovich");
    alert("Y te sobran " + (precioPedro - 1.7));
}

else if (precioPedro >= 1.8 && precioPedro < 2.9){
    alert("Pedro, comprate el helado de helardo");
    alert("Y te sobran " + (precioPedro - 1.8));
}

else if (precioPedro >= 2.9){
    alert("Pedro, comprate el helado con confites o el pote de 1/4 kg");
    alert("Y te sobran " + (precioPedro - 2.9));
}

else{
    alert("Lo siento Pedro, no te alcanza para ningun helado");
}