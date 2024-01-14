document.getElementById('cep').addEventListener('blur', buscarEndereco);

function buscarEndereco() {
  const cepInput = document.getElementById('cep').value;

  fetch(`https://viacep.com.br/ws/${cepInput}/json/`)
    .then(response => response.json())
    .then(data => preencherCamposEndereco(data))
    .catch(error => console.error('Erro ao buscar endereço:', error));
}

function preencherCamposEndereco(data) {
  document.getElementById('logradouro').value = data.logradouro + ", " + data.complemento || '';
  document.getElementById('localidade').value = data.localidade || '';
  document.getElementById('estado').value = data.uf || '';
  document.getElementById('bairro').value = data.bairro || '';
}

function cadastrarEndereco() {
  const endereco = {
    cep: document.getElementById('cep').value,
    logradouro: document.getElementById('logradouro').value,
    complemento: document.getElementById('complemento').value,
    localidade: document.getElementById('localidade').value,
    estado: document.getElementById('estado').value,
    bairro: document.getElementById('bairro').value,
    numero: document.getElementById('numero').value,
    complemento: document.getElementById('complemento').value,
  };

  // Simulação de envio para um servidor (substituir por lógica real de envio para o banco de dados)
  console.log('Dados enviados para o servidor:', endereco);
}
