// Manejo del menú hamburguesa
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Cambia el atributo aria-expanded
    const expanded = menuToggle.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', expanded);
  });

  // Cierra el menú al hacer clic en un enlace
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Carousel

  document.querySelectorAll(".carousel-container").forEach(container=>{

    const track=container.querySelector(".carousel-track");

    const next=container.querySelector(".next");

    const prev=container.querySelector(".prev");

    const scrollAmount=350;

    next.addEventListener("click",()=>{

        track.scrollBy({

            left:scrollAmount,

            behavior:"smooth"

        });

    });

    prev.addEventListener("click",()=>{

        track.scrollBy({

            left:-scrollAmount,

            behavior:"smooth"

        });

    });

});
