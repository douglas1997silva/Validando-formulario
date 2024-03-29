const botaoIniciarCamera = document.querySelector('[data-video-botao]');
const campoCamera = document.querySelector('[data-camera]');
const video = document.querySelector('[data-video]');
const botaoTirarFoto = document.querySelector('[data-tirar-foto]');
const canvas = document.querySelector('[data-video-canvas]');
const mensagem = document.querySelector('[data-mensagem]');
const botaoEnviarFoto = document.querySelector('[ data-enviar]')

let imagemURL = '';

// essa função esta inicializando a camera pelo click
botaoIniciarCamera.addEventListener('click', async function (){
    const inicirVideo = await navigator.mediaDevices
    .getUserMedia({video:true,audio:false})

    botaoIniciarCamera.style.display = 'none'
    campoCamera.style.display = 'block'
    video.srcObject = inicirVideo;
})

botaoTirarFoto.addEventListener('click', function(){
   canvas.getContext('2d').drawImage(video, 0 ,0 ,canvas.width, canvas.height)
   imagemURL = canvas.toDataURL('imagem/jpeg');
   campoCamera.style.display = 'none'
   mensagem.style.display = 'block'
})

botaoEnviarFoto.addEventListener('click', ()=>{
    const receberDadosExistente = localStorage.getItem('cadastro');
    const converteDados = JSON.parse(receberDadosExistente)
    converteDados.imagem = imagemURL;

    localStorage.getItem('cadastro', JSON.stringify(converteDados));

    window.location.href = '../pages/abrir-conta-form-3.html';
})