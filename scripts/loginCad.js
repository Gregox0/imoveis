document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');

    if (action === 'cadastro') {
      document.querySelector('#title h3').innerHTML = 'Cadastro'
      document.querySelector('#submit button').textContent = 'Cadastrar'
      document.querySelector('#es').innerHTML = 'Ainda não tem uma conta? <span>Clique aqui.</span>'
    }
});

let eye = document.getElementById('eye')
let att = false
let attInfo = false
function change(type){
  if (type == 'eye') {
    if (!att) {
      eye.classList.remove('fa-eye-slash')
      eye.classList.add('fa-eye')
      att = true
      document.getElementById('pass').type = 'text'
    }else{
      eye.classList.remove('fa-eye')
      eye.classList.add('fa-eye-slash')
      att = false
      document.getElementById('pass').type = 'password'
    }
  }else{
    if (!attInfo) {
      document.querySelector('#title h3').innerHTML = 'Cadastro'
      document.querySelector('#submit button').textContent = 'Cadastrar'
      document.querySelector('#es').innerHTML = 'Já tem uma conta? <span onclick="change()">Clique aqui.</span>'
      attInfo = 'True'
    }else{
      document.querySelector('#title h3').innerHTML = 'Login'
      document.querySelector('#submit button').textContent = 'Logar'
      document.querySelector('#es').innerHTML = 'Ainda não tem uma conta? <span onclick="change()">Clique aqui.</span>'
      attInfo = false
    }
  }
}


let passRegex = /^(?.*[A-Z])[a-zA-Z0-9_.-]{8,}$/
let emailRegex = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,}$/
function verify(){
  let emailInput = document.getElementById('email')
  let passInput = document.getElementById('pass')
}
