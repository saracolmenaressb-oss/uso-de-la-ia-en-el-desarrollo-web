/**
 * PROYECTO PORTAFOLIO PERSONAL - SARA
 * Script encargado de interactividad móvil, optimizaciones de UI y efectos scroll.
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. MENÚ HAMBURGUESA PARA DISPOSITIVOS MÓVILES ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Evita que el fondo haga scroll si el menú está abierto en móvil
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : 'auto';
    };

    menuToggle.addEventListener('click', toggleMenu);

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace (Ancla)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });


    // --- 2. OPTIMIZACIÓN VISUAL DEL HEADER AL HACER SCROLL ---
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        // Si el usuario baja más de 50px de la pantalla, agregamos la clase scrolled
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    // --- 3. EXTRA OPCIONAL: ANIMACIÓN APARICIÓN SUAVE (SCROLL REVEAL) ---
    // Usamos la API moderna de JavaScript: IntersectionObserver
    const sectionsToReveal = document.querySelectorAll('.scroll-reveal');

    const revealOptions = {
        threshold: 0.15, // Se activa cuando el 15% de la sección es visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase CSS que ejecuta la transición
                entry.target.classList.add('visible');
                // Dejamos de observar la sección una vez ya apareció
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    sectionsToReveal.forEach(section => {
        revealObserver.observe(section);
    });

});