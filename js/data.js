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

function createSlide(imageSrc, parentElement) {
  const divSlide = document.createElement('div');
  divSlide.classList.add('swiper-slide', 'slide');

  const divImage = document.createElement('div');
  divImage.classList.add('image');

  const imgElement = document.createElement('img');
  imgElement.referrerPolicy = 'noreferrer';
  imgElement.src = imageSrc;
  imgElement.alt = 'Imagem';
  divImage.appendChild(imgElement);
  divSlide.appendChild(divImage);

  parentElement.appendChild(divSlide);
}

async function createCarousel() {
  const carrossel = document.getElementById('swiper-wrapper');
  let cachedImageUrls = JSON.parse(localStorage.getItem('cachedImageUrls'));

  if (!cachedImageUrls) {
    try {
      const animalsData = await fetchAnimais();
      cachedImageUrls = animalsData.map(animal => animal.foto);
    } catch (error) {
      console.error('Erro:', error);
      return;
    }
  }
  cachedImageUrls.forEach(imageUrl => createSlide(imageUrl, carrossel));
}

createCarousel();

const interval = 3600000;

setInterval(async () => {
  try {
    await fetchAnimais();
  } catch (error) {
    console.error('Erro na verificação periódica:', error);
  }
}, interval);