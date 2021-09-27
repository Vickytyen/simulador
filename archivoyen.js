/*
    CODERHOUSE
    Curso: Javascript
    Profesor: Nicolas Martini
    Tutor: German Cuevas
    Alumna: Victoria Yen
    Entrega: N° 10 
*/
  
function recolectarDatos() {

    let form = document.forms["myForm"]

    let nombreP = form.nombreP.value;
    let nombreF = form.nombreF.value;
    let preferencias = form.preferencias.value;

    let harina = form.harina.value;
    let humedo = form.humedo.value;
    let liquido = form.liquido.value;
    let relleno = form.relleno.value;
    let cobertura = form.cobertura.value;

   let toppings = document.getElementsByName("toppings[]");
   let mensaje = "Nuestro pastelero curioso "+ nombreP +" conocido como " + nombreF + ", con preferencias en pasteles " + preferencias + ". Ha hecho un pastel " + 
                 " con base de bizcochuelo de: " + harina +
                 ", con ingrediente húmedo de: " + humedo +
                 ", con ingrediente leche de: " + liquido +
                 ", con un delicioso relleno de: " + relleno +
                 " y una irresistible cobertura de: " + cobertura +
                 ", ademas agregó toppings de: ";
    
    for (let i = 0;i < toppings.length; i++){
        const element = toppings[i];

        if(element.checked){
            mensaje += element.value + " ";
        }
        
    }
    alert(mensaje);  
}


/* NO DARLE BOLA A ESTO
const cakes = ["Tradicional","Vegana","Libre de Gluten","Sin Lactosa"]

const cakelist = document.getElementById("cakeList");
const selectcake = document.getElementById("selectCake");


const fragment = document.createDocumentFragment()

for (const cake of cakes){
    const selectItem = document.createElement("option")
    selectItem.setAttribute("value", cake.toLowerCase())
    selectItem.textContent = cake
    fragment.appendChild(selectItem)  
}

selectcake.appendChild(fragment);
*/




