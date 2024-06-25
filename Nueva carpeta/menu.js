document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.querySelector('.hamburguer');
    const menu = document.querySelector('.menu-navegacion');

    hamburguer.addEventListener('click', function() {
        hamburguer.classList.toggle('open');
        menu.classList.toggle('show');
    });

    // Animación de menú hamburguesa
    hamburguer.addEventListener('click', function() {
        hamburguer.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
});
