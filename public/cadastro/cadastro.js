import { EmitirCadastro } from "./socket-cadastro.js";

const form = document.getElementById("form-cadastro");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = form["input-usuario"].value;
  const senha = form["input-senha"].value;

  EmitirCadastro({nome, senha})
});