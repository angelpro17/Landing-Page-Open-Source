let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

document.onscroll = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const lang = navigator.language.startsWith('es') ? 'es' : 'en'; 
    loadTranslations(lang);

    const langSelector = document.getElementById('lang-selector');
    langSelector.value = lang;
    langSelector.addEventListener('change', (event) => {
        loadTranslations(event.target.value);
    });
});

function loadTranslations(lang) {
    fetch(`./locales/${lang}.json`)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = translations[key];
            });
        })
        .catch(error => console.error('Error loading translations:', error));
}
