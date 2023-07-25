const formElement = document.getElementById('animalForm');

formElement.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const foto = document.getElementById('photo').files[0]; 
  const idade = document.getElementById('age').value;
  const descricao = document.getElementById('description').value;
  const cidade = document.getElementById('city').value;
  const uf = document.getElementById('state').value;
  const adotado = document.getElementById('adopted').value

  const formData = new FormData();
  formData.append('name', name);
  formData.append('imagem', foto);
  formData.append('idade', idade);
  formData.append('descricao', descricao);
  formData.append('cidade', cidade);
  formData.append('uf', uf);
  formData.append('adotado', adotado)

  try {
    const response = await fetch('https://adote-amor.onrender.com/upload', {
      method: 'POST',
      body: formData 
    });

    if (!response.ok) {
      swal('Oh no...', 'Algo deu errado!', 'error')
      throw new Error('Erro na solicitação');
    }

    const data = await response.json();
    swal('Boa!', 'Deu tudo certo!', 'success')

    document.getElementById('name').value = '';
    document.getElementById('photo').value = '';
    document.getElementById('age').value = '';
    document.getElementById('description').value = '';
    document.getElementById('city').value = '';
    document.getElementById('state').value = '';
    document.getElementById('adopted').value = '';
  } catch (error) {
    swal('Oh no...', 'Algo deu errado!', 'error')
    console.error('Caiu no Erro:', error);
  }
});