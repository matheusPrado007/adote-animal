const personForm = document.getElementById('personForm');
    const peopleList = document.getElementById('peopleList');

    personForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Obter os valores dos campos de entrada
      const name = document.getElementById('name').value;
      const photo = document.getElementById('photo').value;
      const age = document.getElementById('age').value;
      const description = document.getElementById('description').value;
      const city = document.getElementById('city').value;
      const state = document.getElementById('state').value;

      // Criar um objeto com as informações da pessoa
      const person = {
        name: name,
        photo: photo,
        age: age,
        description: description,
        city: city,
        state: state
      };

      // Adicionar a pessoa à lista
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <h3>${person.name}</h3>
        <img src="${person.photo}" alt="${person.name}">
        <p>Idade: ${person.age}</p>
        <p>${person.description}</p>
        <p>${person.city}, ${person.state}</p>
      `;
      peopleList.appendChild(listItem);

      // Limpar os campos do formulário
      personForm.reset();
    });
