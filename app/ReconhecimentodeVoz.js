const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const chute = document.getElementById('chute');
const recognition = new SpeechRecognition();
recognition.lang = 'pt-BR';
recognition.start();

recognition.addEventListener('result', oneSpeak);

function oneSpeak(e) {
  const chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
}

function exibeChuteNaTela(chute) {
  const elementoChute = document.getElementById('chute');
  elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
  `;
}
