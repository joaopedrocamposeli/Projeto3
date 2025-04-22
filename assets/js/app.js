// Banco de dados de filmes
const dados = {
  filmes: [
    {
      id: 1,
      titulo: "O Poderoso Chefão",
      descricao: "A história da família mafiosa Corleone.",
      conteudo: "Em 1945, Don Corleone é o chefe de uma mafiosa família italiana de Nova York. Ele costuma apadrinhar várias pessoas, realizando importantes favores para elas, em troca de favores futuros. Com a chegada das drogas, as famílias começam uma disputa pelo promissor mercado. Quando Corleone se recusa a facilitar a entrada dos narcóticos na cidade, não oferecendo ajuda política e policial, sua família começa a sofrer atentados para que mudem de posição. É nessa complicada época que Michael, um herói de guerra nunca envolvido nos negócios da família, vê a necessidade de proteger o seu pai e tudo o que ele construiu ao longo dos anos.",
      categoria: "Drama",
      diretor: "Francis Ford Coppola",
      destaque: true,
      data: "1972",
      trailer: "https://youtu.be/0v6MO0EB7UY",
      imagem_principal: "assets/img/filmes/Godfather.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/poderosochefao-01.jpg" }
      ],
      avaliacao: {
        media: 4.8,
        total: 342
      }
    },
    {
      id: 2,
      titulo: "Um Filme Minecraft",
      descricao: "Prepare-se para a maior aventura já construída.",
      conteudo: "Quatro desajustados enfrentam problemas comuns do dia a dia quando, de repente, são sugados por um portal misterioso para o Overworld: uma terra fascinante e cúbica, movida pela imaginação. Para voltarem para casa, eles precisarão dominar esse novo mundo enquanto embarcam em uma jornada mágica ao lado de um crafter experiente e inesperado: Steve.",
      categoria: "Aventura",
      diretor: "CJared Hess",
      destaque: true,
      data: "2025",
      trailer: "https://youtu.be/EVKYAAES6JQ",
      imagem_principal: "assets/img/filmes/minecraft.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/minecraft-01.jpg", }
      ],
      avaliacao: {
        media: 4.7,
        total: 289
      }
    },
    {
      id: 3,
      titulo: "Interestelar",
      descricao: "Uma jornada além do tempo e espaço.",
      conteudo: "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
      categoria: "Ficção Científica",
      diretor: "Christopher Nolan",
      destaque: true,
      data: "2014",
      trailer: "https://youtu.be/BYUZhddDbdc7E",
      imagem_principal: "assets/img/filmes/interestelar.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/interestelar-01.jpg", descricao: "Cooper na nave" }
      ],
      avaliacao: {
        media: 4.9,
        total: 512
      }
    },
    {
      id: 4,
      titulo: "Parasita",
      descricao: "Uma família pobre infiltra-se em uma casa rica.",
      conteudo: "Toda a família de Ki-taek está desempregada, vivendo em um porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à filha de um rico. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
      categoria: "Suspense",
      diretor: "Bong Joon-ho",
      destaque: false,
      data: "2019",
      trailer: "https://youtu.be/ruaBfQWvHKI",
      imagem_principal: "assets/img/filmes/parasita.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/parasita-01.jpg", descricao: "Família Kim" }
      ],
      avaliacao: {
        media: 4.6,
        total: 421
      }
    },
    {
      id: 5,
      titulo: "Clube da Luta",
      descricao: "Um homem desiludido cria um clube subterrâneo.",
      conteudo: "Um homem deprimido que sofre de insônia conhece um estranho vendedor de sabonetes chamado Tyler Durden e se vê morando em uma casa suja depois que seu perfeito apartamento é destruído. A dupla forma um clube com regras rígidas onde homens lutam. A parceria perfeita é comprometida quando uma mulher, Marla, atrai a atenção de Tyler.",
      categoria: "Drama",
      diretor: "David Fincher",
      destaque: false,
      data: "1999",
      trailer: "https://youtu.be/eBKvlCf0B4g",
      imagem_principal: "assets/img/filmes/clubedaluta.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/clubedalutab-01.jpg", descricao: "Tyler e Jack" }
      ],
      avaliacao: {
        media: 4.7,
        total: 387
      }
    },
    {
      id: 6,
      titulo: "O Senhor dos Anéis: O Retorno do Rei",
      descricao: "A jornada final para destruir o Um Anel.",
      conteudo: "O confronto final entre as forças do bem e do mal que lutam pelo controle do futuro da Terra Média se aproxima. Sauron planeja um grande ataque a Minas Tirith, capital de Gondor. Enquanto isso, Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o Um Anel.",
      categoria: "Fantasia",
      diretor: "Peter Jackson",
      destaque: true,
      data: "2003",
      trailer: "https://youtu.be/LiKeQrChkTY",
      imagem_principal: "assets/img/filmes/senhoraneis.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/senhoraneis-01.jpg", descricao: "Frodo e Sam" }
      ],
      avaliacao: {
        media: 4.9,
        total: 623
      }
    },
    {
      id: 7,
      titulo: "Pulp Fiction",
      descricao: "Histórias interligadas de criminosos em Los Angeles.",
      conteudo: "Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la. Um boxeador descumpre sua promessa de perder uma luta e um casal tenta um assalto que rapidamente sai do controle.",
      categoria: "Crime",
      diretor: "Quentin Tarantino",
      destaque: false,
      data: "1994",
      trailer: "https://youtu.be/YBZp3tkua2Y",
      imagem_principal: "assets/img/filmes/pulp.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/pulp-01.jpg", descricao: "Vincent e Jules" }
      ],
      avaliacao: {
        media: 4.8,
        total: 498
      }
    },
    {
      id: 8,
      titulo: "Cidade de Deus",
      descricao: "A vida na favela carioca nas décadas de 1960 e 1970.",
      conteudo: "Buscapé é um jovem pobre, negro e sensível, que cresce em um universo de muita violência. Ele vive na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio. Amedrontado com a possibilidade de se tornar um bandido, Buscapé é salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É por meio de seu olhar atrás da câmera que ele analisa o dia a dia da favela.",
      categoria: "Drama",
      diretor: "Fernando Meirelles",
      destaque: true,
      data: "2002",
      trailer: "https://youtu.be/fZJUKixyeXM",
      imagem_principal: "assets/img/filmes/cidadededeus.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/cidadededeus-01.jpg", descricao: "Zé Pequeno" }
      ],
      avaliacao: {
        media: 4.9,
        total: 587
      }
    },
    {
      id: 9,
      titulo: "Matrix",
      descricao: "Um hacker descobre a verdade sobre a realidade.",
      conteudo: "Um jovem programador é atormentado por estranhos pesadelos nos quais sempre está conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a levantar dúvidas sobre a realidade. E quando encontra os misteriosos Morpheus e Trinity, ele descobre que é vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.",
      categoria: "Ficção Científica",
      diretor: "Lana e Lilly Wachowski",
      destaque: false,
      data: "1999",
      trailer: "https://youtu.be/mPYfd6PCmYY",
      imagem_principal: "assets/img/filmes/matrix.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/matrix-01.jpg", descricao: "Neo e Morpheus" }
      ],
      avaliacao: {
        media: 4.7,
        total: 432
      }
    },
    {
      id: 10,
      titulo: "Titanic",
      descricao: "Um romance épico no navio mais famoso do mundo.",
      conteudo: "Jack é um jovem aventureiro que, na mesa de jogo, ganha uma passagem para a primeira viagem do transatlântico Titanic. Trata-se de um luxuoso e imponente navio, anunciado na época como inafundável. Nele, também está Rose, uma jovem cansada das mesmices da alta sociedade. Rose está descontente com sua vida e com a pressão para que se case com Cal, um arrogante milionário. Jack e Rose se conhecem e, apesar das diferenças de classe social, se apaixonam. O navio colide com um iceberg e começa a afundar.",
      categoria: "Romance",
      diretor: "James Cameron",
      destaque: true,
      data: "1997",
      trailer: "https://youtu.be/IH6_CA_ocqY",
      imagem_principal: "assets/img/filmes/titanic.jpg",
      imagens_complementares: [
        { id: 1, src: "assets/img/filmes/titanic-01.jpg", descricao: "Jack e Rose" }
      ],
      avaliacao: {
        media: 4.5,
        total: 378
      }
    },
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
      'btn-favorito ativo' : 
      'btn-favorito';
    btn.innerHTML = favoritos.includes(id) ? 
      '❤️ Remover Favorito' : 
      '🤍 Adicionar Favorito';
  }
}

// Carrossel de Destaques
function carregarDestaques() {
  const destaques = dados.filmes.filter(f => f.destaque);
  const container = document.querySelector('.carrossel-container');
  
  if (container && destaques.length > 0) {
    container.innerHTML = destaques.map((filme, index) => `
      <div class="carrossel-item ${index === 0 ? 'ativo' : ''}">
        <img src="${filme.imagem_principal}" alt="${filme.titulo}">
        <div class="carrossel-info">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          <a href="detalhes.html?id=${filme.id}" class="btn-carrossel">Ver Detalhes</a>
        </div>
      </div>
    `).join('');
    
    
    container.insertAdjacentHTML('afterend', `
      <button class="carrossel-controle anterior">❮</button>
      <button class="carrossel-controle proximo">❯</button>
    `);
    
    
    document.querySelectorAll('.carrossel-controle').forEach(btn => {
      btn.addEventListener('click', () => {
        const direction = btn.classList.contains('anterior') ? -1 : 1;
        navegarCarrossel(direction);
      });
    });
  }
}

function navegarCarrossel(direction) {
  const items = document.querySelectorAll('.carrossel-item');
  const ativo = document.querySelector('.carrossel-item.ativo');
  let novoIndex = [...items].indexOf(ativo) + direction;
  
  if (novoIndex < 0) novoIndex = items.length - 1;
  if (novoIndex >= items.length) novoIndex = 0;
  
  ativo.classList.remove('ativo');
  items[novoIndex].classList.add('ativo');
}

// Listagem de Filmes
function carregarFilmes() {
  const container = document.getElementById('filmes-container');
  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  
  if (container) {
    container.innerHTML = dados.filmes.map(filme => `
      <div class="filme">
        <img src="${filme.imagem_principal}" alt="${filme.titulo}">
        <div class="filme-info">
          <h3>${filme.titulo}</h3>
          <p class="filme-descricao">${filme.descricao}</p>
          <div class="filme-metadata">
            <span class="filme-categoria">${filme.categoria}</span>
            <span class="filme-ano">${filme.data}</span>
          </div>
          <div class="filme-acoes">
            <a href="detalhes.html?id=${filme.id}" class="btn-detalhes">Ver Detalhes</a>
            <button class="btn-favorito ${favoritos.includes(filme.id) ? 'ativo' : ''}" 
                    data-id="${filme.id}" 
                    onclick="toggleFavorito(${filme.id})">
              ${favoritos.includes(filme.id) ? '❤️ Remover Favorito' : '🤍 Adicionar Favorito'}
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }
}

// Página de Detalhes
function carregarDetalhes() {
  const id = new URLSearchParams(window.location.search).get('id');
  const filme = dados.filmes.find(f => f.id == id);
  
  if (filme) {
    // Informações principais
    document.getElementById('detalhe-titulo').textContent = filme.titulo;
    document.getElementById('detalhe-descricao').textContent = filme.descricao;
    document.getElementById('detalhe-conteudo').textContent = filme.conteudo;
    document.getElementById('detalhe-imagem').src = filme.imagem_principal;
    document.getElementById('detalhe-categoria').textContent = filme.categoria;
    document.getElementById('detalhe-diretor').textContent = filme.diretor;
    document.getElementById('detalhe-ano').textContent = filme.data;
    
    // Avaliação
    const avaliacao = document.getElementById('detalhe-avaliacao');
    avaliacao.innerHTML = `
      ${'★'.repeat(Math.floor(filme.avaliacao.media))}${'☆'.repeat(5 - Math.floor(filme.avaliacao.media))}
      (${filme.avaliacao.total} avaliações)
    `;
    
    // Trailer
    const trailer = document.getElementById('detalhe-trailer');
    if (trailer) {
      trailer.src = `https://www.youtube.com/embed/${filme.trailer}`;
    }
    
    // Favorito
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const btnFavorito = document.getElementById('btn-favorito');
    if (btnFavorito) {
      btnFavorito.className = favoritos.includes(filme.id) ? 'btn-favorito ativo' : 'btn-favorito';
      btnFavorito.innerHTML = favoritos.includes(filme.id) ? 
        '❤️ Remover Favorito' : 
        '🤍 Adicionar Favorito';
      btnFavorito.onclick = () => toggleFavorito(filme.id);
    }
    
    // Galeria
    const galeria = document.getElementById('galeria-filme');
    if (galeria && filme.imagens_complementares.length > 0) {
      galeria.innerHTML = filme.imagens_complementares.map(img => `
        <div class="galeria-item">
          <img src="${img.src}" alt="${img.descricao}">
          <p>${img.descricao}</p>
        </div>
      `).join('');
    }
  } else {
    // Filme não encontrado, redirecionar
    window.location.href = 'index.html';
  }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('detalhes.html')) {
    carregarDetalhes();
  } else {
    carregarDestaques();
    carregarFilmes();
  }
  
  const sobreAluno = document.querySelector('.sobre-aluno');
  if (sobreAluno) {
    sobreAluno.innerHTML = `
      <h2>Sobre o Autor</h2>
      <div class="aluno-info">
        <img src="assets/img/filmes/perfil.jpg" alt="Foto do Aluno">
        <div>
          <p>Nome: João Pedro Campos Curso: Ciências da Computação Matrícula: 891100</p>
        </div>
      </div>
    `;
  }
});