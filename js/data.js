async function fetchAnimais() {
    try {
      const response = await fetch('https://api-adote-mongo.onrender.com/pictures');
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  function createSlide(imageSrc, parentElement) {
    const divSlide = document.createElement('div');
    divSlide.classList.add('swiper-slide', 'slide');
  
    const divImage = document.createElement('div');
    divImage.classList.add('image');
  
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = 'Imagem'; // Defina um texto alternativo para a imagem
  
    divImage.appendChild(imgElement);
    divSlide.appendChild(divImage);
  
    parentElement.appendChild(divSlide);
  }
  
  async function createCarousel() {
    const carrossel = document.getElementById('swiper-wrapper');
    try {
      const animalsData = await fetchAnimais();
      animalsData.map(animal => createSlide(`https://api-adote-mongo.onrender.com/${animal.foto}`, carrossel));
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  createCarousel();
  