async function fetchAnimais() {
    try {
      const response = await fetch('https://deploy-node-in-vercel-lake.vercel.app/pictures');
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
    imgElement.referrerPolicy = 'noreferrer'
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
      animalsData.map(animal => createSlide(`https://deploy-node-in-vercel-lake.vercel.app/${animal.foto}`, carrossel));
    } catch (error) {
      console.error('Erro:', error);
    }
  }
  
  createCarousel();
  

  // async function checkImageAvailability(imageUrl) {
  //   try {
  //     const response = await fetch(imageUrl, {mode: "no-cors"});
  //     if (response.status === 200) {
  //       console.log('A imagem está disponível no servidor.');
  //     } else if (response.status === 404) {
  //       console.log('A imagem não foi encontrada no servidor.');
  //     } else {
  //       console.log('Ocorreu um erro ao carregar a imagem:', response.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Ocorreu um erro na solicitação:', error);
  //   }
  // }
  
  // // Exemplo de uso:
  // const imageUrl = 'https://deploy-node-in-vercel-matheusprado007.vercel.app/uploads/1689854652634.jpg';
  // checkImageAvailability(imageUrl);
  