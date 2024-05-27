 // Agregar un evento 'slid.bs.carousel' para detectar cuando el carrusel cambia de slide
 document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.getElementById('carouselExampleCaptions');
    myCarousel.addEventListener('slid.bs.carousel', function () {
        var activeItem = this.querySelector('.carousel-item.active');
        var isLastItem = activeItem.isSameNode(activeItem.parentElement.lastElementChild);

        // Si el slide activo es el último, restablecer el carrusel al primer slide
        if (isLastItem) {
            // Establecer un tiempo de espera antes de reiniciar el carrusel
            setTimeout(function () {
                var firstIndicator = myCarousel.querySelector('.carousel-indicators button:first-child');
                var firstItem = myCarousel.querySelector('.carousel-item:first-child');
                firstIndicator.click();
                firstItem.classList.add('active');
            }, 5000); // 5000 milisegundos = 5 segundos
        }
    });
});