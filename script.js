var imagens = document.querySelectorAll('.minhaImagem');
  imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
      abrirPopup(imagem);
    });
  });

  // Função para abrir o popup com a imagem clicada
  function abrirPopup(imagem) {
    var popup = document.getElementById("meuPopup");
    var imagemPopup = document.getElementById("imagemPopup");
    imagemPopup.src = imagem.src;
    popup.style.display = "block";
  }

  // Função para fechar o popup
  function fecharPopup() {
    document.getElementById("meuPopup").style.display = "none";
  }

