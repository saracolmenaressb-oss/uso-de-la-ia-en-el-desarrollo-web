// ===============================
// ANIMACIÓN AL HACER SCROLL
// ===============================

// Seleccionamos todas las cards
const cards = document.querySelectorAll(".card");

// Función para detectar cuando
// un elemento aparece en pantalla
const mostrarCards = () => {

    cards.forEach((card) => {

        // Posición de la card
        const top = card.getBoundingClientRect().top;

        // Altura visible de la ventana
        const visible = window.innerHeight - 100;

        // Si la card entra en pantalla
        if(top < visible){

            card.classList.add("show");
        }
    });
};

// Evento scroll
window.addEventListener("scroll", mostrarCards);

// Ejecutar al cargar
mostrarCards();