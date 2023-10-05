const field__box = document.querySelector('[data-field]')
const foward = document.querySelector('[data-foward]')
const back = document.querySelector('[data-back]')

const handleValue = (event) => {
  sessionStorage.setItem(event.target.name, event.target.value)
}

const handleRadio = (radio) => {
  sessionStorage.setItem(radio.name, radio.parentElement.querySelector('.radio-label').textContent)
}

back.disabled = true
back.style.display = 'none'


field__box.innerHTML = `
<pre>Qual é o seu nome?</pre>
<div class="form__group field">
<input type="input" name="nome" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('nome') ? sessionStorage.getItem('nome') : ''}" placeholder="Nome">
<label for="name" class="form__label">Nome</label>
</div>`

let currentField = 'nome'

foward.addEventListener("click", (event) => {

  field__box.classList.add('hide')

  switch (currentField) {
    case 'nome':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Insira nome da sua empresa</pre>
        <div class="form__group field">
            <input type="input" name="empresa" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('empresa') ? sessionStorage.getItem('empresa') : ''}" placeholder="Nome da empresa">
            <label for="empresa" class="form__label">Nome da empresa</label>
            </div>`
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'empresa'
      back.style.display = 'block'
      break;

    case 'empresa':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Insira o seu telefone para contato</pre>
        <div class="form__group field">
            <input type="number" name="telefone" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('telefone') ? sessionStorage.getItem('telefone') : ''}" placeholder="Telefone">
            <label for="telefone" class="form__label">Telefone</label>
            </div>`
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'telefone'
      break;

    case 'telefone':
      setTimeout(function () {
        field__box.innerHTML = `
          <pre>Insira o seu melhor e-mail</pre>
          <div class="form__group field">
            <input type="email" name="email" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('email') ? sessionStorage.getItem('email') : ''}" placeholder="E-mail">
            <label for="email" class="form__label">E-mail</label>
            </div>`
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'email'
      break;

    case 'email':
      setTimeout(function () {
        field__box.innerHTML = `
            <pre>Quantos funcionários compoem a sua empresa?</pre>
            <div class="radio-container">
              <div class="radio-wrapper">
                <label class="radio-button">
                  <input id="option1" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '0-10' ? 'checked' : ''}>
                  <span class="radio-checkmark"></span>
                  <span class="radio-label">0-10</span>
                </label>
              </div>
            
              <div class="radio-wrapper">
                <label class="radio-button">
                  <input id="option2" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '11-30' ? 'checked' : ''}>
                  <span class="radio-checkmark"></span>
                  <span class="radio-label">11-30</span>
                </label>
              </div>
            
              <div class="radio-wrapper">
                <label class="radio-button">
                  <input id="option3" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '31-50' ? 'checked' : ''}>
                  <span class="radio-checkmark"></span>
                  <span class="radio-label">31-50</span>
                </label>
              </div>
            
              <div class="radio-wrapper">
                <label class="radio-button">
                  <input id="option3" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '51-100' ? 'checked' : ''}>
                  <span class="radio-checkmark"></span>
                  <span class="radio-label">51-100</span>
                </label>
              </div>
            </div>
            `
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'funcionarios'
      break;

    case 'funcionarios':
      setTimeout(function () {
        field__box.innerHTML = `
            <pre>Já anuncia online?</pre>
            <div class="radio-container">
             <div class="radio-wrapper">
               <label class="radio-button">
                 <input id="option1" name="online" type="radio" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('online') == 'Sim' ? 'checked' : ''}>
                 <span class="radio-checkmark"></span>
                 <span class="radio-label">Sim</span>
               </label>
             </div>
          
             <div class="radio-wrapper">
               <label class="radio-button">
                 <input id="option2" name="online" type="radio" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('online') == 'Não' ? 'checked' : ''}>
                 <span class="radio-checkmark"></span>
                 <span class="radio-label">Não</span>
               </label>
             </div>
            </div>
            `
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'online'

      break;

    case 'online':
      setTimeout(function () {
        field__box.innerHTML = `
            <pre>Já possui Social Media?</pre>
            <div class="radio-container">
              <div class="radio-wrapper">
                <label class="radio-button">
                  <input id="option1" name="social" type="radio" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('social') == 'Sim' ? 'checked' : ''}>
                  <span class="radio-checkmark"></span>
                  <span class="radio-label">Sim</span>
                </label>
              </div>
          
              <div class="radio-wrapper">
                <label class="radio-button">
                  <input id="option2" name="social" type="radio" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('social') == 'Não' ? 'checked' : ''}>
                  <span class="radio-checkmark"></span>
                  <span class="radio-label">Não</span>
                </label>
              </div>
            </div>
            `
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'social'
      foward.style.display = 'none'
      var send = document.createElement('button')
      send.classList.add('send')
      send.textContent = 'Enviar'
      send.style.backgroundColor = '#673ab7'
      document.querySelector('.control__box').appendChild(send)
      send.addEventListener('click',(evento) => {
        send.textContent = 'Enviando...'
        setTimeout(() => {
          window.location.href = 'thankyou.html'
        }, "2000");
      })
      break;


    default:
      break;
  }

  if (currentField != 'nome') {
    back.disabled = false
  } else {
    back.disabled = true
  }

})

back.addEventListener("click", (event) => {
  field__box.classList.add('hide')

  switch (currentField) {

    case 'empresa':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Qual é o seu nome?</pre>
        <div class="form__group field">
        <input type="input" name="nome" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('nome') ? sessionStorage.getItem('nome') : ''}" placeholder="Nome">
        <label for="name" class="form__label">Nome</label>
        </div>`
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'nome'
      back.style.display = 'none'
      break;

    case 'telefone':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Insira nome da sua empresa</pre>
        <div class="form__group field">
        <input type="input" name="empresa" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('empresa') ? sessionStorage.getItem('empresa') : ''}" placeholder="Nome da empresa">
        <label for="empresa" class="form__label">Nome da empresa</label>
        </div>`
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'empresa'
      break;

    case 'email':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Insira o seu telefone para contato</pre>
        <div class="form__group field">
        <input type="number" name="telefone" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('telefone') ? sessionStorage.getItem('telefone') : ''}" placeholder="Telefone">
        <label for="telefone" class="form__label">Telefone</label>
        </div>`
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'telefone'
      break;

    case 'funcionarios':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Insira o seu melhor e-mail</pre>
        <div class="form__group field">
        <input type="email" name="email" class="form__field" onchange=(handleValue(event)) value="${sessionStorage.getItem('email') ? sessionStorage.getItem('email') : ''}" placeholder="E-mail">
        <label for="email" class="form__label">E-mail</label>
        </div>`
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'email'
      break;

    case 'online':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Quantos funcionários compoem a sua empresa?</pre>
        <div class="radio-container">
          <div class="radio-wrapper">
            <label class="radio-button">
              <input id="option1" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '0-10' ? 'checked' : ''}>
              <span class="radio-checkmark"></span>
              <span class="radio-label">0-10</span>
            </label>
          </div>
        
          <div class="radio-wrapper">
            <label class="radio-button">
              <input id="option2" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '11-30' ? 'checked' : ''}>
              <span class="radio-checkmark"></span>
              <span class="radio-label">11-30</span>
            </label>
          </div>
        
          <div class="radio-wrapper">
            <label class="radio-button">
              <input id="option3" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '31-50' ? 'checked' : ''}>
              <span class="radio-checkmark"></span>
              <span class="radio-label">31-50</span>
            </label>
          </div>
        
          <div class="radio-wrapper">
            <label class="radio-button">
              <input id="option3" name="funcionarios" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('funcionarios') == '51-100' ? 'checked' : ''}>
              <span class="radio-checkmark"></span>
              <span class="radio-label">51-100</span>
            </label>
          </div>
        </div>
        `
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'funcionarios'
      break;

    case 'social':
      setTimeout(function () {
        field__box.innerHTML = `
        <pre>Já anuncia online?</pre>
        <div class="radio-container">
         <div class="radio-wrapper">
           <label class="radio-button">
             <input id="option1" name="online" type="radio" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('online') == 'Sim' ? 'checked' : ''}>
             <span class="radio-checkmark"></span>
             <span class="radio-label">Sim</span>
           </label>
         </div>
      
         <div class="radio-wrapper">
           <label class="radio-button">
             <input id="option2" name="online" type="radio" onchange="handleRadio(this)" type="radio" ${sessionStorage.getItem('online') == 'Não' ? 'checked' : ''}>
             <span class="radio-checkmark"></span>
             <span class="radio-label">Não</span>
           </label>
         </div>
        </div>
        `
        field__box.classList.remove('hide')
      }, 500)
      currentField = 'online'
      document.querySelector('.send').remove()
      foward.style.display = 'block'
      break;
    default:
      break;
  }

  if (currentField != 'nome') {
    back.disabled = false
  } else {
    back.disabled = true
  }

})
