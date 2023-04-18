//habilidades
ScrollReveal().reveal('.eventos', { delay: 100 });
ScrollReveal().reveal('.html', { delay: 300 });
ScrollReveal().reveal('.css', { delay: 500 });
ScrollReveal().reveal('.js', { delay: 700 });
ScrollReveal().reveal('.c', { delay: 900 });
ScrollReveal().reveal('.python', { delay: 1000 });
ScrollReveal().reveal('.material', { delay: 1500 });
ScrollReveal().reveal('.next', { delay: 1700 });

//sobre
ScrollReveal().reveal('.you-about', { delay: 200 });
ScrollReveal().reveal('.p1', { delay: 400 });
ScrollReveal().reveal('.p2', { delay: 500 });
ScrollReveal().reveal('.p3', { delay: 600 });
ScrollReveal().reveal('.redes', { delay: 700 });
ScrollReveal().reveal('.ilustra', { delay: 300 });

//projetos
ScrollReveal().reveal('h3', { delay: 200 });
ScrollReveal().reveal('.card-container', { delay: 400 });

//contato
ScrollReveal().reveal('.d-e', { delay: 300 });
ScrollReveal().reveal('.d-n', { delay: 400 });
ScrollReveal().reveal('.d-m', { delay: 500 });
ScrollReveal().reveal('button', { delay: 600 });

//footer
ScrollReveal().reveal('.pzin', { delay: 200 });

//EVENTOS DE MOUSE

// DECLARANDO AS VARIASVEIS DOS BOXES
let  html = document.querySelector('.html') 
let css = document.querySelector('.css')
let js = document.querySelector('.js')
let c = document.querySelector('.c')
let python = document.querySelector('.python')
let material = document.querySelector('.material')
let next = document.querySelector('.next')
let evento = document.querySelector('.evento')

//ADICIONANDO EVENTOS
html.addEventListener('mouseenter', entrarHtml)
html.addEventListener('mouseout', sairHtml)
css.addEventListener('mouseenter', entrarCss)
css.addEventListener('mouseout', sairCss)
js.addEventListener('mouseenter', entrarJs)
js.addEventListener('mouseout', sairJs)
c.addEventListener('mouseenter', entrarC)
c.addEventListener('mouseout', sairC)
python.addEventListener('mouseenter', entrarPython)
python.addEventListener('mouseout', sairPython)
material.addEventListener('mouseenter', entrarMaterial)
material.addEventListener('mouseout', sairMaterial)
next.addEventListener('mouseenter', entrarNext)
next.addEventListener('mouseout', sairNext)

//DECLARANDO FUNCTIONS
function entrarHtml(){
evento.innerText = 'Tenho contato com o HTML desde 2021, quando iniciei o meu curso técnico.'
}
function sairHtml(){
evento.innerText = "Passe o cursor ou click"
}
function entrarCss(){
evento.innerText = 'Conheci o CSS em 2022 e de lá para cá venho cada vez mais tentar aprender e conhecer melhor a mesma.'
}
function sairCss(){
evento.innerText = "Passe o cursor ou click"
}
function entrarJs(){
evento.innerText = 'Uso JS desde 2022, não é uma linguagem de domínio ainda, mas acho incrível o que JS pode fazer em seu projeto.'
}
function sairJs(){
evento.innerText = "Passe o cursor ou click"
}
function entrarC(){
evento.innerText = ' O C# é a minha linguagem mais antiga, uso ela desde 2021.'
}
function sairC(){
evento.innerText = "Passe o cursor ou click"
}
function entrarPython(){
evento.innerText = 'Achei o Python bem legal e desde 2022 venho procurando entender melhor sobre ela e praticando também.'
}
function sairPython(){
evento.innerText = "Passe o cursor ou click"
}
function entrarMaterial(){
evento.innerText = 'Biblioteca de componentes React para um desenvolvimento ágil e fácil.'
}
function sairMaterial(){
evento.innerText = "passe o cursor no card para ler"
}
function entrarNext(){
evento.innerText = 'O Next.js é o framework mais adotado pela comunidade do React. O seu maior objetivo é tornar nossa aplicação React mais performática e permitir a indexação do conteúdo da página pelos motores de busca.'
}
function sairNext(){
evento.innerText = "passe o cursor no card para ler"
}

ScrollReveal().reveal('.sociais-scroll', { delay: 100 });
ScrollReveal().reveal('.sociais-scroll1', { delay: 200 });
ScrollReveal().reveal('.sociais-scroll2', { delay: 300 });