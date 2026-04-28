const cadastrar = (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!nome || !email) {
    alert("Preencha nome e email antes de cadastrar.");
    return;
  }

  const lista = document.getElementById("lista");
  const novoItem = document.createElement("li");
  novoItem.className = "usuario-item";

  const textoUsuario = document.createElement("span");
  textoUsuario.innerText = `${nome} - ${email}`;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.innerText = "Excluir";
  botaoExcluir.className = "btn-excluir";
  botaoExcluir.addEventListener("click", () => {
    novoItem.remove();
  });

  novoItem.appendChild(textoUsuario);
  novoItem.appendChild(botaoExcluir);
  lista.appendChild(novoItem);

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
};
