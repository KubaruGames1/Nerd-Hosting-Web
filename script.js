document.addEventListener('DOMContentLoaded', function() {
    const enlaces = document.querySelectorAll('a[href^="#"]');

    for (const enlace of enlaces) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            const id = this.getAttribute('href');
            const elementoDestino = document.querySelector(id);
            elementoDestino.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Animación de carga
    const loader = document.getElementById('loader');
    const loaderText = document.querySelector('.loader-text'); // Seleccionar el texto del loader

    let dots = 0;
    const loadingInterval = setInterval(function() {
        dots = (dots + 1) % 4; // Ciclo de 0 a 3 puntos
        loaderText.textContent = 'Loading' + '.'.repeat(dots);
    }, 500); // Actualizar cada 500 ms

    setTimeout(function() {
        clearInterval(loadingInterval); // Detener la animación de puntos
        loader.style.opacity = 0;
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500); // Tiempo de transición (0.5 segundos)
    }, 5000); // Duración de la animación de carga (5 segundos)
});
