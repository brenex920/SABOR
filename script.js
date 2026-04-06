gsap.registerPlugin(ScrollTrigger);

// Animação de entrada da Home
window.addEventListener('load', () => {
    const tl = gsap.timeline();
    
    tl.from(".navbar", { y: -50, opacity: 0, duration: 1 })
      .from(".reveal", { y: 30, opacity: 0, stagger: 0.2, duration: 0.8, ease: "power3.out" }, "-=0.5")
      .from("#mascote", { x: 100, opacity: 0, duration: 1.2, ease: "elastic.out(1, 0.7)" }, "-=1");
});

// Efeito flutuante do mascote
gsap.to("#mascote", {
    y: 30,
    repeat: -1,
    yoyo: true,
    duration: 2.5,
    ease: "sine.inOut"
});

// Troca de cor do fundo ao rolar pelos sabores
gsap.utils.toArray(".card").forEach(card => {
    ScrollTrigger.create({
        trigger: card,
        start: "top center",
        onEnter: () => gsap.to("body", { backgroundColor: card.dataset.color + "22", duration: 0.8 }),
        onLeaveBack: () => gsap.to("body", { backgroundColor: "#f9fbf9", duration: 0.8 })
    });
});

// Revelação suave das seções
gsap.utils.toArray(".section").forEach(sec => {
    gsap.from(sec, {
        scrollTrigger: { trigger: sec, start: "top 80%" },
        y: 50,
        opacity: 0,
        duration: 1
    });
});
// A arara se move levemente conforme o mouse se mexe
document.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.pageX) / 30;
    const y = (window.innerHeight / 2 - e.pageY) / 30;
    
    gsap.to("#mascote", {
        x: x,
        y: y,
        duration: 1,
        ease: "power2.out"
    });
});

// As frutas nos cards "saltam" ao entrar na tela
gsap.from(".card-img img", {
    scrollTrigger: {
        trigger: ".grid-container",
        start: "top 80%"
    },
    scale: 0.5,
    rotation: -15,
    opacity: 0,
    duration: 1.2,
    stagger: 0.2,
    ease: "back.out(1.7)"
});
gsap.registerPlugin(ScrollTrigger);

// 1. Mudança dinâmica de cor no fundo do círculo do card
document.querySelectorAll('.card').forEach(card => {
    const color = card.getAttribute('data-color');
    card.style.color = color; // Define a cor do círculo decorativo

    card.addEventListener('mouseenter', () => {
        // Muda o fundo da página levemente para a cor do suco
        gsap.to("body", { backgroundColor: color + "11", duration: 0.6 });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to("body", { backgroundColor: "#fbf9f8", duration: 0.6 });
    });
});

// 2. Animação de revelação dos cards ao rolar a página
gsap.from(".fade-card", {
    scrollTrigger: {
        trigger: ".grid-container",
        start: "top 85%",
    },
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1.2,
    ease: "power4.out"
});
