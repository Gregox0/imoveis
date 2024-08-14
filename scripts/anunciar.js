document.getElementById('voltar').addEventListener('click', () => {
    window.location.href = 'index.html'
})
let dados = {
  acao: null,
  type: null,
  imovel: null
}
let currentButton = {
  button: null,
  buttonIdentify: null
}
let currentButtonType = {
  button: null,
  buttonIdentify: null
}
function toggleWant(identify) {
  if(currentButton.buttonIdentify != identify) {
    dados.acao = identify
    let button = document.getElementById(identify + 'b')
    currentButton.buttonIdentify = identify
    
    if (currentButton.button != null) {
      currentButton.button.classList.remove('selected')
      currentButton.button.classList.add('cadButtonbutton')
    }
    button.classList.remove('cadButtonbutton')
    button.classList.add('selected')
    
    currentButton.button = button
  }
  changeDisplay('type')
}
function toggleType(identify) {
  if (currentButtonType.buttonIdentify != identify) {
    dados.type = identify
    let button = document.getElementById(identify + 'b')
    currentButtonType.buttonIdentify = identify

    if (currentButtonType.button != null) {
      currentButtonType.button.classList.remove('selected')
      currentButtonType.button.classList.add('cadButtonbutton')
    }
    button.classList.remove('cadButtonbutton')
    button.classList.add('selected')

    currentButtonType.button = button
  }
  changeDisplay('slc')
  selectContainer(identify)
}
function changeDisplay(i) {
  document.getElementById(i + "Container").classList.remove('dpNo')
}
let opcoes = false
function mostrarOpcoes() {
  if (!opcoes) {
    document.getElementById('optionsContainer').style.display = 'block'
    opcoes = true
  }else{
    document.getElementById('optionsContainer').style.display = 'none'
    opcoes = false
  }
}
function selectContainer(identify) {
  if (identify == 'r') {
    document.getElementById('residencial').classList.remove('dpNo')
    document.getElementById('comercial').classList.add('dpNo')
  }else{
    document.getElementById('comercial').classList.remove('dpNo')
    document.getElementById('residencial').classList.add('dpNo')
  }
}

const checkboxes = document.querySelectorAll('.property-checkbox');

checkboxes.forEach(checkbox => {checkbox.addEventListener('change', function() {
    let parentDiv = this.parentElement;
    let pElement = parentDiv.querySelector('p');
    let pText = pElement.textContent || pElement.innerText;
    if (this.checked) {
      checkboxes.forEach(cb => {
        if (cb !== this) {
          cb.checked = false;
        }
      });
    }
    getSelectedValue(pText)
  });
});
function getSelectedValue(checkboxValue) {
  const selectedCheckbox = document.querySelector('.property-checkbox:checked');

  if (selectedCheckbox) {
    dados.imovel = checkboxValue
    document.getElementById('barra').innerText = checkboxValue
  } else {
    document.getElementById('barra').innerText = 'Escolha uma opção'
    dados.imovel = null
  }
  changeDisplay('cad')
  changeDisplay('cadastrar')
}
function verify() {
  let cidade = document.getElementById('cidade')
  let estado = document.getElementById('estado')
  let rua = document.getElementById('rua')
  let numero = document.getElementById('numero')
  let complemento = document.getElementById('complemento')
  
  let endereco = {
    cidade: cidade,
    estado: estado,
    rua: rua,
    numero: numero,
    complemento: complemento
  }
  for (let i in endereco) {
    if (i != 'complemento') {
      if (endereco[i].value == '') {
        
      }
    }
  }
        }
