document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get('action');

    if (action === 'cadastro') {
      document.querySelector('#title h3').innerHTML = 'Cadastro'
      document.querySelector('#submit button').textContent = 'Cadastrar'
      document.querySelector('#es').innerHTML = 'Ainda não tem uma conta? <span>Clique aqui.</span>'
    }
});
