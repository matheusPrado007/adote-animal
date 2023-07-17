const fetchAnimais = async () => {
    try {
      const response = await fetch('https://api-adote.onrender.com/animais');
      if (!response.ok) {
        throw new Error('Erro na solicitação');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro:', error);
    }
  };
  
  fetchAnimais();

  const form = document.getElementById('animalForm');

  form.addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const formData = new FormData(form);
    const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://api-adote.onrender.com/animais';
  
    try {
      const response = await fetch(corsAnywhereUrl + apiUrl, {
        method: 'POST',
        headers: {
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: formData
      });
  
      const resultado = await response.json();
      console.log('Dados enviados com sucesso:', resultado);
    } catch (erro) {
      console.error('Erro ao enviar os dados:', erro);
    }
  });
  

function processarImagem(foto) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function() {
      const dataUrl = reader.result;
      resolve(dataUrl);
    };

    reader.onerror = function(error) {
      reject(error);
    };

    reader.readAsDataURL(foto);
  });
}
