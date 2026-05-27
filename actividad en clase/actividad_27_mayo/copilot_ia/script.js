// Scroll suave al hacer clic en el botón del Hero
document.getElementById('hero-btn').addEventListener('click', () => {
    document.getElementById('hobbies').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Animación de aparición suave al hacer scroll
  const cards = document.querySelectorAll('.card');
  
  // Configuramos IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Cuando el elemento entra en pantalla, aplicamos estilos
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
        entry.target.style.transition = "all 0.6s ease";
      }
    });
  });
  
  // Inicialmente ocultamos las cards y las observamos
  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(50px)";
    observer.observe(card);
  });
  