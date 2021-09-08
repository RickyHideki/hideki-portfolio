var modalBox = document.getElementById("contato");

function abrirModal() {
  modalBox.style.display = "flex";
}

function fecharModal() {
  modalBox.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalBox) {
    modalBox.style.display = "none";
  }
}
