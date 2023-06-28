function loading_page(){
// Obtém a referência para a seção
const minhaSecao = document.getElementById('serviços');

// Função para carregar a página HTML
function carregarPaginaHTML(url) {
  // Cria um objeto XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // Configura a função de callback para quando a requisição for concluída
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Define o conteúdo da seção com o conteúdo da página HTML
      minhaSecao.innerHTML = xhr.responseText;
    }
  };

  // Faz a requisição para a página HTML
  xhr.open('GET', url, true);
  xhr.send();
}

// Chama a função para carregar a página HTML desejada
carregarPaginaHTML('pagina.html');
}