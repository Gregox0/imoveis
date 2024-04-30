document.getElementById('logButton').addEventListener('click', () => {
    window.location.href = 'loginCad.html?action=login'
})
document.getElementById('cadButton').addEventListener('click', () => {
    window.location.href = 'loginCad.html?action=cadastro'
})

let estado = true
//false == comprar, true == alugar//
function toggle(type){
  if(type == 'a'){
    document.getElementById('c').classList.remove('buttonSelect')
    document.getElementById('a').classList.add('buttonSelect')
    document.getElementById('borderBottom').style.background = 'linear-gradient(to right, #ccc 50%, #007ea7 50%)'
    estado = true
  }
  if (type == 'c') {
    document.getElementById('a').classList.remove('buttonSelect')
    document.getElementById('c').classList.add('buttonSelect')
    document.getElementById('borderBottom').style.background = 'linear-gradient(to right, #007ea7 50%, #ccc 50%)'
    estado = false
  }
}
