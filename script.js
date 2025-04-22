// Banco de dados de filmes
const dados = {
  filmes: [
    {
      id: 1,
      titulo: "O Poderoso Chefão",
      descricao: "A história da família mafiosa Corleone.",
      conteudo: "Don Vito Corleone é o chefe de uma família mafiosa...",
      categoria: "Drama",
      diretor: "Francis Ford Coppola",
      destaque: true,
      data: "1972",
      trailer: "sY1S34973zA",
      imagem_principal: "images/Godfather.jpg",
      imagens_complementares: [
        { id: 1, src: "images/Godfather_1.jpg", descricao: "Don Corleone" }
      ],
      avaliacao: {
        media: 4.8,
        total: 342
      }
    },
    {
      id: 2,
      titulo: "Batman: O Cavaleiro das Trevas",
      descricao: "O confronto entre Batman e Coringa.",
      conteudo: "Batman enfrenta o Coringa em Gotham City...",
      categoria: "Ação",
      diretor: "Christopher Nolan",
      destaque: true,
      data: "2008",
      trailer: "a-PVBsMmTho",
      imagem_principal: "images/batman.jpg",
      imagens_complementares: [
        { id: 1, src: "images/batman_1.jpg", descricao: "Batman e Coringa" }
      ],
      avaliacao: {
        media: 4.7,
        total: 289
      }
    }
  ]
};

// Sistema de Favoritos
function toggleFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const index = favoritos.indexOf(id);
  
  if (index === -1) {
    favoritos.push(id);
  } else {
    favoritos.splice(index, 1);
  }
  
  localStorage.setItem('favoritos', JSON.stringify(favoritos));
  atualizarIconeFavorito(id);
}

function atualizarIconeFavorito(id) {
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  const btn = document.querySelector(`.btn-favorito[data-id="${id}"]`);
  if (btn) {
    btn.className = favoritos.includes(id) ? 
      'btn btn-danger btn-favorito' : 
      'btn btn-outline-danger btn-favorito';
    btn.innerHTML = favoritos.includes(id) ? 
      '<i class="bi bi-heart-fill"></i>' : 
      '<i class="bi bi-heart"></i>';
  }
}

// Filtro por Gênero
function carregarGeneros() {
  const select = document.getElementById('filtro-genero');
  const generos = [...new Set(dados.filmes.map(f => f.categoria))];
  
  generos.forEach(genero => {
    const option = document.createElement('option');
    option.value = genero;
    option.textContent = genero;
    select.appendChild(option);
  });

  select.addEventListener('change', () => {
    const genero = select.value;
    const filmes = genero ? dados.filmes.filter(f => f.categoria === genero) : dados.filmes;
    renderizarFilmes(filmes);
  });
}

// Renderização de Filmes
function renderizarFilmes(filmes) {
  const container = document.getElementById('filmes-container');
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  
  container.innerHTML = filmes.map(filme => `
    <div class="col-md-6 col-lg-4 col-xl-3 mb-4">
      <div class="card card-film h-100">
        <img src="${filme.imagem_principal}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${filme.titulo}</h5>
          <span class="badge bg-primary">${filme.categoria}</span>
          <a href="detalhes.html?id=${filme.id}" class="btn btn-outline-primary w-100 mt-2">Detalhes</a>
        </div>
        <div class="card-footer bg-transparent">
          <button class="btn btn-sm btn-favorito ${favoritos.includes(filme.id) ? 'btn-danger' : 'btn-outline-danger'}" 
                  data-id="${filme.id}" 
                  onclick="toggleFavorito(${filme.id})">
            <i class="bi ${favoritos.includes(filme.id) ? 'bi-heart-fill' : 'bi-heart'}"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Carregar Detalhes do Filme
function carregarDetalhes() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const filme = dados.filmes.find(f => f.id === id);
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

  if (filme) {
    const container = document.getElementById('detalhes-container');
    container.innerHTML = `
      <div class="col-lg-6">
        <img src="${filme.imagem_principal}" class="img-fluid rounded mb-4">
        <div class="row g-2">
          ${filme.imagens_complementares.map(img => `
            <div class="col-4">
              <img src="${img.src}" class="img-thumbnail w-100" alt="${img.descricao}">
            </div>
          `).join('')}
        </div>
      </div>
      <div class="col-lg-6">
        <h1>${filme.titulo}</h1>
        
        <!-- Avaliação -->
        <div class="avaliacao my-3">
          <h5>Avaliação: ${filme.avaliacao.media.toFixed(1)}/5</h5>
          <div class="stars">
            ${[1, 2, 3, 4, 5].map(i => `
              <i class="bi bi-star${i <= Math.floor(filme.avaliacao.media) ? '-fill' : ''}"></i>
            `).join('')}
            <small>(${filme.avaliacao.total} avaliações)</small>
          </div>
        </div>
        
        <button class="btn ${favoritos.includes(filme.id) ? 'btn-danger' : 'btn-outline-danger'} mb-3" 
                onclick="toggleFavorito(${filme.id})">
          <i class="bi ${favoritos.includes(filme.id) ? 'bi-heart-fill' : 'bi-heart'}"></i>
          ${favoritos.includes(filme.id) ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
        </button>
        
        <p><strong>Diretor:</strong> ${filme.diretor}</p>
        <p><strong>Gênero:</strong> ${filme.categoria}</p>
        <p><strong>Ano:</strong> ${filme.data}</p>
        
        <div class="mt-4">
          <h4>Sinopse</h4>
          <p>${filme.conteudo}</p>
        </div>
        
        <div class="mt-4">
          <h4>Trailer</h4>
          <div class="ratio ratio-16x9">
            <iframe src="https://www.youtube.com/embed/${filme.trailer}" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    `;
  } else {
    window.location.href = 'index.html';
  }
}

// Carregar Destaques (Carrossel)
function carregarDestaques() {
  const destaques = dados.filmes.filter(f => f.destaque);
  const carousel = document.getElementById('carousel-inner');
  
  destaques.forEach((filme, i) => {
    const item = document.createElement('div');
    item.className = `carousel-item ${i === 0 ? 'active' : ''}`;
    item.innerHTML = `
      <img src="${filme.imagem_principal}" class="d-block w-100" style="height: 500px; object-fit: cover;">
      <div class="carousel-caption">
        <h3>${filme.titulo}</h3>
        <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Ver Detalhes</a>
      </div>
    `;
    carousel.appendChild(item);
  });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('detalhes.html')) {
    carregarDetalhes();
  } else if (window.location.pathname.includes('index.html')) {
    carregarGeneros();
    carregarDestaques();
    renderizarFilmes(dados.filmes);
  }
});