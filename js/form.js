// const form = document.getElementById('animalForm');

// form.addEventListener('submit', async function(event) {
//   event.preventDefault();

//   const formData = new FormData(form);
//   const url = 'https://api-adote.onrender.com/animais';

//   const animalData = {};
//   for (let [key, value] of formData.entries()) {
//     animalData[key] = value;
//   }

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(animalData)
//     });
    
//     const result = await response.json();
//     console.log('Dados enviados com sucesso:', result);
//     // Faça algo com a resposta da API aqui
//   } catch (error) {
//     console.error('Erro ao enviar os dados:', error);
//     // Trate o erro de acordo com suas necessidades
//   }
// });

