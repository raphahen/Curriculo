const secoes = document.querySelectorAll(".secao");
const botoesMenu = document.querySelectorAll("[data-target]");
const botoesVoltar = document.querySelectorAll(".btnVoltar");

function mostrarSecao(id) {
  secoes.forEach(secao => secao.classList.remove("ativa"));
  document.getElementById(id).classList.add("ativa");
}

// Botões do menu inicial
botoesMenu.forEach(botao => {
  botao.addEventListener("click", () => {
    mostrarSecao(botao.dataset.target);
  });
});

// Botão único de voltar
botoesVoltar.forEach(botao => {
  botao.addEventListener("click", () => {
    mostrarSecao("inicio");
  });
});