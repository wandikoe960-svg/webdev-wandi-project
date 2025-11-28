document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("h1");
    const nav = document.querySelector("nav");
    const mainContent = document.querySelector("main");
    const aside = document.querySelector("aside");
    const header = document.querySelector("header")
    const article = document.querySelector("article")

    title.textContent = "Belajar Javascript Dasar - Interaksi Pertama! 💀";
    article.textContent = " terus berkembang layaknya teknologi";
    title.addEventListener("click", () => {
        nav.classList.toggle("show-nav");
    });


    document.addEventListener("keydown",(event) => {
        if(event.key === "d") {
            document.body.classList.toggle("dark");
        }
    });

    header.addEventListener("mouseover", () => {
        header.style.backgroundColor = "rgba(0, 38, 73, 0.9)";
    });

    header.addEventListener("mouseout", () => {
        header.style.backgroundColor = "rgba(111, 145, 255, 0.8)";
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "f") {
            nav.classList.toggle("nav-font-change");
        }
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            document.body.classList.add("scrolled-bg");
        } else { 
            document.body.classList.remove("scrolled-bg");
        
        }
    });

    let count = 0;
    mainContent.addEventListener("click", () => {
        count++;
        aside.textContent = `Kamu klik konten ini sebanyak ${count} kali`;
    })
});
