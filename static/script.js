// Scroll suave nos links do menu
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const alvo = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top: alvo.offsetTop - 80,
            behavior: "smooth"
        });
    });
});

// Animação simples na entrada
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "0.6s";
        document.body.style.opacity = "1";
    }, 50);
});
