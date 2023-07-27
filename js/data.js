const API_URL = 'https://adote-amor.onrender.com/upload';
const ADOPTED_ANIMAL_STATUS = 'S';

async function fetchAnimais() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erro na solicitação: ' + response.status);
    }
    const data = await response.json();
    const imageUrls = data.filter(animal => animal.adotado.toUpperCase() === ADOPTED_ANIMAL_STATUS).map(animal => animal.foto);
    localStorage.setItem('cachedImageUrls', JSON.stringify(imageUrls));
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}

async function createCarousel() {
  const carrossel = document.getElementById('swiper-wrapper');
  let cachedImageUrls = JSON.parse(localStorage.getItem('cachedImageUrls'));

  if (!cachedImageUrls) {
    try {
      const animalsData = await fetchAnimais();
      cachedImageUrls = animalsData
        .filter(animal => animal.adotado.toUpperCase() === ADOPTED_ANIMAL_STATUS)
        .map(animal => animal.foto);
      localStorage.setItem('cachedImageUrls', JSON.stringify(cachedImageUrls));
    } catch (error) {
      console.error('Erro:', error);
      return;
    }
  }

  // Limpa o carrossel antes de adicionar os slides atualizados
  carrossel.innerHTML = '';

  // Adiciona as imagens como slides diretamente no conteúdo HTML existente
  cachedImageUrls.forEach(imageUrl => {
    const slide = `<div class="swiper-slide slide">
      <div class="image">
        <img class="adop" referrerPolicy="noreferrer" src="${imageUrl}" alt="Imagem">
      </div>
    </div>`;
    carrossel.insertAdjacentHTML('beforeend', slide);
  });

  // Inicializa o Swiper.js
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, 
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3500,
      disableOnInteraction: true, 
    },
  });
}

createCarousel();

const interval = 3600000;

setInterval(async () => {
  try {
    await fetchAnimais();
    createCarousel(); // Atualiza o carrossel após buscar novos dados
  } catch (error) {
    console.error('Erro na verificação periódica:', error);
  }
}, interval);
