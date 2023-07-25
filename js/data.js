async function fetchAnimais() {
    try {
      const response = await fetch('https://adote-amor.onrender.com/upload');
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      const data = await response.json();
      const imageUrls = data.map(animal => animal.foto);
      localStorage.setItem('cachedImageUrls', JSON.stringify(imageUrls));
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
    imgElement.referrerPolicy = 'noreferrer'
    imgElement.src = imageSrc;
    imgElement.alt = 'Imagem'; // Defina um texto alternativo para a imagem
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
      }
    }
    cachedImageUrls.forEach(imageUrl => createSlide(imageUrl, carrossel));
  }
  
  
  createCarousel();
  