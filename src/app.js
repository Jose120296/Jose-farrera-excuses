import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
  let pronombre = ["Un", "El"];
  let sujeto = ["corredor", "mapache", "perro", "conductor", "comediante"];
  let accion = ["tomó mi", "lanzó mi", "gritó a mi", "robó mi", "mordió mi"];
  let posesion = ["tarea", "dedo del pie", "coche", "zapato"];
  let lugar = ["en la calle", "en mi casa", "en mi entrada"];

  let indicePronombre = Math.floor(Math.random() * pronombre.length);
  let indiceSujeto = Math.floor(Math.random() * sujeto.length);
  let indiceAccion = Math.floor(Math.random() * accion.length);
  let indicePosesion = Math.floor(Math.random() * posesion.length);
  let indiceLugar = Math.floor(Math.random() * lugar.length);

  return (
    pronombre[indicePronombre] +
    " " +
    sujeto[indiceSujeto] +
    " " +
    accion[indiceAccion] +
    " " +
    posesion[indicePosesion] +
    " " +
    lugar[indiceLugar]
  );
};
