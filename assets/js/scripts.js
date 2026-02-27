$('.banner__slider').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    fade: true,
    pageDots: false,
    imagesLoaded: true,
});
jQuery('.destaque__flickity').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    selectedAttraction: 0.01,
    friction: 0.15,
    autoPlay: true,
    autoPlay: 4000,
    pageDots: false,
    imagesLoaded: true,
    fade: false,
});
jQuery('.Hotel__slide').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    fade: false,
    pageDots: true,
    imagesLoaded: true,
});
jQuery('.promo__slide').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: true,
    // wrapAround: true,
    fade: false,
    pageDots: true,
    imagesLoaded: true,
    autoPlay: 4000,
});
$('.habitaciones__slide--flickity').flickity({
    cellAlign: 'center',
    contain: true,
    prevNextButtons: true,
    wrapAround: true,
    autoPlay: true,
    autoPlay: 5500,
    selectedAttraction: 0.01,
    friction: 0.15,
    imagesLoaded: true,
    pageDots: false,
    adaptiveHeight: true,
});

jQuery('.habitaciones__slide').flickity({
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    selectedAttraction: 0.01,
    friction: 0.15,
    autoPlay: true,
    autoPlay: 4000,
    pageDots: false,
    imagesLoaded: true,
    fade: false,
    watchCSS: true,
});
//HEADROOM
const nav = document.querySelector('.bd-navbar');
let lastScrollPosition = window.pageYOffset;

window.addEventListener('scroll', function () {
    let currentScrollPosition = window.pageYOffset;
    // Verificar se o scroll atingiu o final da página
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Adicionar a classe gm-headroom-bottom
        nav.classList.add('gm-headroom-bottom');
    } else {
        // Remover a classe gm-headroom-bottom se não estiver no final da página
        nav.classList.remove('gm-headroom-bottom');
    }
    lastScrollPosition = currentScrollPosition;
});

// MENU OVERLAY
const toggleMenu = document.getElementById('toggle-menu');
const overlay = document.getElementById('overlay');
const toggleAtivo = document.getElementById('toggle-ativo');
const body = document.body;

toggleMenu.addEventListener('click', function () {
    overlay.classList.toggle('active');
});

toggleAtivo.addEventListener('click', function () {
    overlay.classList.remove('active');
});
const links = document.querySelectorAll('#overlay a');

links.forEach(link => {
    link.addEventListener('click', function () {
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    });
});

const ancora = document.querySelectorAll('a[href^="#"]');

ancora.forEach(ancora => {
    ancora.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(ancora.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    });
});
const menu = document.getElementById('menu');
const threshold = 80;
let lastScrollTop = 0;

const onScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > threshold && lastScrollTop <= scrollTop) {
        menu.classList.add('menu-active');
    } else if (scrollTop < threshold && lastScrollTop > scrollTop) {
        menu.classList.remove('menu-active');
    }

    lastScrollTop = scrollTop;
};

window.addEventListener('scroll', onScroll);
//ADICIONA CLASSE AO MENU
$('.navbar-toggler').click(function () {
    $(this).toggleClass('active');
    $('.navbar-mobi').toggleClass('active');
});
//MENU ATIVO
var paginaAtual = location.href.substring(location.href.lastIndexOf('/') + 1);
$('.nav-item').each(function (index) {
    var href = $(this).find('a').attr('href');
    if (href == paginaAtual) {
        $(this).addClass('active');
    }
});
var paginaAtual = location.href.substring(location.href.lastIndexOf('/') + 1);
if (paginaAtual == 'index' || paginaAtual == 'index.html') {
    jQuery('.nav-inicio').addClass('active');
}

var isIndex = window.location.pathname;
((isIndex = isIndex.split('/')), (isIndex = isIndex[isIndex.length - 1]));

if (isIndex == 'index' || isIndex == '') {
    jQuery('.nav-inicio').addClass('active');
}

//OCULTA A PALAVRA "SUÍTE"
var spans = document.querySelectorAll('.habitacione-nome');
spans.forEach(function (span) {
    var conteudo = span.textContent;
    var novoConteudo = conteudo.replace('Suíte', '');
    span.textContent = novoConteudo;
});

//ESCONDER IMAGEM DO MAPA NA PÁGINA DE LOCALIZAÇÃO
var paginaAtual = location.href.substring(location.href.lastIndexOf('/') + 1);
if (paginaAtual == 'localizacao' || paginaAtual == 'localizacao.php') {
    jQuery('.local').remove();
}

// ADICIONA O BOTÃO FLUTUANTE DO WHATSAPP EM TODAS AS PÁGINAS
// fetch('btn-flutuante-wpp.html')
//     .then(htmlDoBotao => htmlDoBotao.text())
//     .then(btnFluWpp => {
//         $(document.body).append($(btnFluWpp));
//     })
//     .catch(console.log);
