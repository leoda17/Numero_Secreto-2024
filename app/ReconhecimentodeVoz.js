const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const chute = document.getElementById ('chute')

  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-br'
  recognition.start()

  recognition.addEventListerner('result, on Speak')

  function onSpeak(e){
    console.log(e.results [0] [0].transcript)
    exibeChuteNaTela(chute)
  }

  function exibeChuteNaTela(chute) {
      ElementoChute.innerHTML = '
      <div>Você disse </div>
      <span class="box"> $ {chute} </span>
      `
  }