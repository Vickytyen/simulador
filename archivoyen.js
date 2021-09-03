/*
    CODERHOUSE
    Curso: Javascript
    Profesor: Nicolas Martini
    Tutor: German Cuevas
    Alumna: Victoria Yen
    Entrega: N°5  
*/


//Prototipo a desarrollar utilizando if, if else y else (idea general de como funcionaria el simulador interactivo muy muy basico)

var mensaje1 = prompt ("Hola pastelero! Ingrese su ingrediente base: harina o maicena");
var  base1 = "harina"
var base2 = "maicena"

var mensaje2 = prompt ("Hora de elegir el sabor: vainilla o chocolate");
var  sabor1 = "vainilla"
var sabor2 = "chocolate"

var mensaje3 = prompt ("Ahora ingrese el siguiente ingrediente: huevo o banana");
var  ingr1 = "huevo"
var ingr2 = "banana"

var mensaje4 = prompt ("Seleccione el siguiente ingrediente: leche o leche vegetal");
var  ingr3 = "leche"
var ingr4 = "leche vegetal"

var mensaje5= prompt ("Ahora elegimos el relleno: fruta o mousse");
var  fill1 = "fruta"
var fill2 = "mousse"

var mensaje6 = prompt ("Elija una cobertura: buttercream vegetal o crema");
var  frost1 = "buttercream vegetal"
var frost2 = "crema"

var mensaje7 = prompt ("Y por último, ingrese el topping: fruta o sprinkles");
var  top1 = "fruta"
var top2 = "sprinkles"




if (mensaje1 == "maicena"){

    alert ("Felicidades pastelero! Ha logrado una torta libre de gluten") ; 
}

else if (mensaje3 == "banana" && mensaje4 == "leche vegetal" && mensaje5 == "fruta" && mensaje6 == "buttercream vegetal"){
    

    alert ("Felicidades pastelero! Ha logrado una torta vegana y sin lactosa!") ;
}

else if (mensaje3 == "huevo" && mensaje4 == "leche" && mensaje5 == "mousse" && mensaje6 == "crema"){
    

    alert ("Felicidades pastelero! Ha logrado una torta clasica") ;
}

else  {

   alert ("Debe elegir primero los ingredientes") ;
}



// Concepto Prototipo 2 utilizando switch (a desarrollar)

let entrada = prompt ("Ingrese que tipo de ingredientes quiere usar");
switch (entrada) {

    case "harina" :
        alert ("Ingrediente CON gluten") ;
        break;
    case "maicena" :
         alert ("Ingrediente SIN gluten") ; 
        break;    
    case "huevo" :
         alert ("Ingrediente origen animal") ; 
        break;
    case "banana" :
         alert ("Ingrediente vegano") ;
        break;
    case "leche" :
         alert ("Ingrediente origen animal") ;
        break;  
    case "leche vegetal" :
         alert ("Ingrediente vegano") ;
        break;        
    default:
        alert ("El ingrediente que ingresó no se utiliza para la elaboración de tortas D:");
}

// Incorporar OBJETOS


let tortaVegana = {
    base : "harina" || "maicena",
    sabor: "chocolate" || "vainilla" ,
    ingrediente1: "banana" ,
    ingrediente2: "leche vegetal" , 
    relleno: "fruta" , 
    cobertura: "buttercream vegetal" ,
    topping: "fruta" || "sprinkles"
}

let vegano = confirm ("Querés saber como hacer una torta vegana?");

if (vegano) {
    alert("Para que una torta sea vegana, el relleno debe ser de origen no animal. Por ejemplo: "+tortaVegana.relleno);
    alert("Además, una torta vegana reemplaza el huevo por "+tortaVegana.ingrediente1);

}else {
    alert ("Aprender nunca está de más");
}   



