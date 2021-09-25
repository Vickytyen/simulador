/*
    CODERHOUSE
    Curso: Javascript
    Profesor: Nicolas Martini
    Tutor: German Cuevas
    Alumna: Victoria Yen
    Entrega: N° 10 
*/
  
//Hice una lista anidada de objetos para que cuando seleccione "categorias" recorra el array de la lista de "ingredientes"
let categorias = ["Harinas con gluten","Harinas sin gluten", "Ingrediente humedo", "Ingrediente humedo vegano", "Leche animal con lactosa", "Leche vegana sin lactosa", 
"Relleno tradicional", "Relleno vegetal sin lactosa","cobertura tradicional", "cobertura vegana sin lactosa"]
let ingredientes = ["Harina de trigo", "Maicena", "Harina de arroz" , "Harina de avena", "Harina de Almendras", "Huevo", "Banana", "chiaegg", "Pasta de Garbanzos",
"Leche animal", "Leche de soja", "Leche de almendras", "Leche de castañas", "Leche de avellanas", "Leche de avena", "Mousse", "Buttercream", "Fruta", "Buttercream vegetal",
"Crema", "Buttercream vegetal"];

let lista1= document.getElementById("lista1")
let lista2= document.getElementById("lista2")

function recorrer (listas,valores) {
    lista2.innerHTML=""

    for(let index of valores){
        listas.innerHTML += `<option>$(index)</option>`
    }
}

function llenar() {
    recorrer(lista1,categorias)    
}


//Peeeeroo... nada funciono xD

llenar()
lista1.addEventListener("change",(e )=> {
    let dato= e.target.value

    switch (dato) {
        case "Harinas con gluten":
            recorrer (lista2,ingredientes.slice(0))    
            break;
        case "Harinas sin gluten":
            recorrer(lista2, ingredientes.slice(1,4))
            break;
        case "Ingrediente humedo":
            recorrer(lista2, ingredientes.slice(4))
            break;   
        default:
            break;
    }
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




