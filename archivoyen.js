/*
CODERHOUSE
Curso: Javascript
Profesor: Nicolas Martini
Tutor: German Cuevas
Alumna: Victoria Yen
Entrega Final
*/

/*Aplicando local storage, guardar, cargar y eliminar datos ingresados por el usuario*/

const mensaje = document.getElementById("mensaje");
const form = document.forms.usuario;

function guardar() {
  const jsonData = {
    nombreP: form.nombreP.value,
    nombreF: form.nombreF.value,
    preferencias: form.preferencias.value,
  };

  window.localStorage.setItem("userData", JSON.stringify(jsonData)); // pasar objetos a string
  mostrarMensaje("datos guardados");
}

function cargarDatos() {
  const data = window.localStorage.getItem("userData");
  const dataValues = JSON.parse(data);
  if (!dataValues) {
    mostrarMensaje("no hay datos");
    return;
  }
  form.nombreP.value = dataValues.nombreP;
  form.nombreF.value = dataValues.nombreF;
  form.preferencias.value = dataValues.preferencias;

  mostrarMensaje("datos cargados desde localStorage");
}

function reset() {
  form.reset();
  mostrarMensaje("");
}

function borrarDatos() {
  window.localStorage.removeItem("userData");
  form.reset();
  mostrarMensaje("datos borrados de localStorage");
}

function mostrarMensaje(str) {
  mensaje.innerHTML = str;
}


const ingredientTypes = [
  { id: 1, name: "Secos" },
  { id: 2, name: "Liquidos" },
  { id: 3, name: "Humedos" },
  { id: 4, name: "Rellenos" },
  { id: 5, name: "Coberturas" },
];

const ingredientes = [
  {
    id: 1,
    name: "harina de trigo",
    isVegan: true,
    hasGluten: true,
    hasLactose: false,
    typeId: 1,
  },
  {
    id: 2,
    name: "harina de maiz",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 1,
  },
  {
    id: 3,
    name: "harina de centeno",
    isVegan: true,
    hasGluten: true,
    hasLactose: false,
    typeId: 1,
  },
    {
    id: 4 ,
    name: "harina de avena",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 1,
  },
  {
    id: 5,
    name: "leche de soja",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 2,
  },
  {
    id: 6,
    name: "leche de avena",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 2,
  },
    {
    id: 7,
    name: "Leche de almendras",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 2 ,
  },
  {
    id: 5,
    name: "leche de vaca",
    isVegan: false,
    hasGluten: false,
    hasLactose: true,
    typeId: 2,
  },
    {
    id: 6,
    name: "Banana",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 3,
  },
    {
    id: 7,
    name: "Chiaegg",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 3,
  },
    {
    id: 8,
    name: "Huevo",
    isVegan: false,
    hasGluten: false,
    hasLactose: false,
    typeId: 3,
  },
  {
    id: 9,
    name: "dulce de leche",
    isVegan: false,
    hasGluten: false,
    hasLactose: false,
    typeId: 4,
  },
  {
    id: 10,
    name: "mermelada",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 4,
  },
  {
    id: 11,
    name: "crema",
    isVegan: false,
    hasGluten: false,
    hasLactose: true,
    typeId: 4,
  },
    {
    id: 12,
    name: "Baño de chocolate",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 5,
  },
    {
    id: 13,
    name: "Buttercream vegetal",
    isVegan: true,
    hasGluten: false,
    hasLactose: false,
    typeId: 5,
  },
    {
    id: 14,
    name: "Buttercream",
    isVegan: false,
    hasGluten: false,
    hasLactose: true,
    typeId: 5,
  },
];

const $form = document.forms["cakesForm"];

function createElm(tag, content = null) {
  const elm = document.createElement(tag);
  if (content) {
    elm.innerHTML = content;
  }
  return elm;
}

function getElm(id) {
  return document.getElementById(id);
}

function renderForm() {
  const $form = getElm("form");
  ingredientTypes.forEach((type) => {
    const $fieldset = createElm("fieldset");
    const $title = createElm("h4", type.name);
    $fieldset.appendChild($title);

    const ingrs = ingredientes.filter((ing) => ing.typeId === type.id);
    ingrs.forEach((ing) => {
      const $label = createElm("label"); // creamos un elemento <label>
      if (ing.isVegan) {
        $label.classList.add("isVegan");
      }
      if (!ing.hasGluten) {
        $label.classList.add("sinGluten");
      }
      if (!ing.hasLactose) {
        $label.classList.add("sinLactosa");
      }

      const $radio = createElm("input"); // creamos el elemento <input/>
      $radio.setAttribute("type", "radio");
      $radio.setAttribute("name", type.name);
      $radio.setAttribute("value", ing.id);

      $label.appendChild($radio);
      $label.appendChild(createElm("span", ing.name));

      $fieldset.appendChild($label);
    });

    $form.appendChild($fieldset);
  });
}

function filterIngredients() {
  const filtro = $form.filtro.value;
  if (filtro === "none") {
    //mostrar todos
    const all = document.querySelectorAll("label");
    for (let i = 0; i < all.length; ++i) {
      all[i].style.display = "block";
    }
    return;
  }
  // escondemos todos los elementos label
  const elms = document.querySelectorAll("label");
  for (let i = 0; i < elms.length; ++i) {
    elms[i].style.display = "none";
  }
  const displayElms = document.querySelectorAll(`.${filtro}`);
  for (let i = 0; i < displayElms.length; ++i) {
    displayElms[i].style.display = "block";
  }
}

function getCakeType(ingredients) {
  let isVegan = true;
  let hasGluten = false;
  let hasLactose = false;
  ingredients.forEach((ing) => {
    if (!ing.isVegan) {
      isVegan = false;
    }
    if (ing.hasGluten) {
      hasGluten = true;
    }
    if (ing.hasLactose) {
      hasLactose = true;
    }
  });

  let typeName = "";
  typeName += isVegan ? "Vegana, " : "Con ingredientes de origen vegetal, ";
  typeName += (hasGluten ? "con" : "sin") + " gluten y ";
  typeName += (hasLactose ? "con" : "sin") + " lactosa.";

  return typeName;
}

function finish() {
  const nombreP = $form.nombreP.value;
  const nombreF = $form.nombreF.value;
  const preferencias = $form.preferencias.value;
  const selectedIngredients = getSelectedIngredients();
  const ingredientesTexto = selectedIngredients.map((i) => i.name).join(", ");
  const cakeType = getCakeType(selectedIngredients);

  let mensaje = `Hola ${nombreP}. Conocido como ${nombreF}, con preferencias de pastelería ${preferencias} Elegiste: ${ingredientesTexto} y creaste una torta ${cakeType}`;

  const $result = getElm("result");
  $result.innerHTML = mensaje;
}

function getSelectedIngredients() {
  const selectedIds = ingredientTypes.map((type) =>
    parseInt($form[type.name].value)
  );
  return ingredientes.filter((i) => selectedIds.includes(i.id));
}

// iniciamos la app
renderForm();


//JQuery + AJAX JSONplaceholder
$(document).ready(function () {
  $("#load").click(function () {
    $("#list").empty(); 
    $("#loader").show();
    $.ajax("https://jsonplaceholder.typicode.com/users").done(function (users) {
      $("#loader").hide();
      users.forEach(function (user) {
        $("#list").append(`<li>${user.name}</li>`);
      });
    });
  });
});

// JQuery animaciones
$(function () {
  $("#botont").on("click", function () {
    $("#caja").fadeOut(1000, function () {
      $("#caja").text(
        "Los ingredientes utilizados en una torta TRADICIONAL contiene ingredientes con gluten, ingredientes de origen animal, ademas de lactosa"
      );
    });
    $("#caja").fadeIn();
  });

  $("#botonv").on("click", function () {
    $("#caja").fadeOut(1000, function () {
      $("#caja").text(
        "Los ingredientes utilizados en una torta VEGANA contiene ingredientes de origen animal, ademas de lactosa"
      );
    });
    $("#caja").fadeIn();
  });
  $("#botong").on("click", function () {
    $("#caja").fadeOut(1000, function () {
      $("#caja").text(
        "Los ingredientes utilizados en una torta GLUTEN FREE no contiene ingredientes secos que contengan gluten de trigo"
      );
    });
    $("#caja").fadeIn();
  });

  $("#botonl").on("click", function () {
    $("#caja").fadeOut(1000, function () {
      $("#caja").text(
        "Los ingredientes utilizados en una torta SIN LACTOSA no contiene ingredientes de origen animal, ademas de lactosa"
      );
    });

    $("#caja").fadeOut();
  });
});




