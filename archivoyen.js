/*
    CODERHOUSE
    Curso: Javascript
    Profesor: Nicolas Martini
    Tutor: German Cuevas
    Alumna: Victoria Yen
    Entrega: N°6  
*/
  

function simulador() {

class Cake {
    base;
    ingredienteHumedo;
    ingrediente1;
    relleno;
    cobertura;
    topping;

    // Desafio Arrays
    posiblesValores = {
        bases: ["harina", "maicena", "harina de garbanzo", "harina de arroz"],
        ingredienteHumedos: ["leche animal", "leche vegetal"],
        ingredientes: ["banana", "huevo"],
        relleno: ["fruta", "mousse"],
        cobertura: ["buttercream vegetal", "crema"],
        
    };

    getPosiblesBases(){
        let texto = "";
      
      const values = this.posiblesValores.bases;
      
      for(let i = 0; i < values.length; i++){
        texto += values[i] + ", ";
      }
       return texto;
    }

    getTipoDeCake(){
        let esLibreDeGluten = true;
        let esVegana = true;
        let esLibreDeLactosa = true;
        

        if (this.base === "harina") {
            esLibreDeGluten = false;
        }

        if (this.ingredienteHumedo === "leche animal") {
            esVegana = false;
            esLibreDeLactosa = false;
        }

        if(this.ingrediente1 === "huevo") {
            esVegana = false;
        }

        if (this.relleno === "mousse") {
            esVegana = false;
        }

        if (this.cobertura === "crema") {
            esVegana = false;
        }

        let mensaje = "La torta es ";
        if (esVegana) {
            mensaje += " vegana";
        } else {
            mensaje += " tradicional";
        }

        if (esLibreDeGluten) {
            mensaje += ", libre de gluten ";
        } else {
            mensaje += ", no es libre de gluten ";
        }

        if (esLibreDeLactosa) {
            mensaje += " y libre de lactosa ";
        } else {mensaje
            mensaje += " y no es libre de lactosa ";
        }

        alert (mensaje);

    }

}

const cake = new Cake();

const posiblesBasesString = cake.getPosiblesBases();

const basePrompt = prompt("Ingrese la base que puede ser: "+posiblesBasesString); 
const ingredienteHumedoPrompt = prompt("Ingrese el ingrediente humedo que puede ser leche vegetal o animal"); 
const ingredientePrompt = prompt("Ingrese el primer ingrediente que puede ser banana o huevo"); 
const rellenoPrompt = prompt("Elija un relleno que puede ser fruta o mousse");
const coberturaPrompt = prompt("Por ultimo la cobertura que puede ser buttercream vegetal o crema");


cake.base = basePrompt;
cake.ingredienteHumedo = ingredienteHumedoPrompt;
cake.ingrediente1 = ingredientePrompt;
cake.relleno = rellenoPrompt;
cake.cobertura = coberturaPrompt

const tipoDeTorta = cake.getTipoDeCake();

}



