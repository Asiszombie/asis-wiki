/* ==========================================
   ZOMBIE ARCHIVE
   script.js
========================================== */

/* ========= БОКОВОЕ МЕНЮ ========= */

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

menuButton.addEventListener("click", () => {

    sideMenu.classList.add("open");
    overlay.classList.add("show");

});

closeMenu.addEventListener("click", closeSideMenu);
overlay.addEventListener("click", closeSideMenu);

function closeSideMenu(){

    sideMenu.classList.remove("open");
    overlay.classList.remove("show");

}

/* ========= ПОДСВЕТКА АКТИВНОЙ СТРАНИЦЫ ========= */

const currentPage =
window.location.pathname.split("/").pop();

document
.querySelectorAll(".navigation a")
.forEach(link=>{

    const href = link.getAttribute("href");

    if(href===currentPage){

        link.classList.add("active");

    }

});

/* ========= КНОПКА НАВЕРХ ========= */

const scrollTopButton =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollTopButton.classList.add("show");

    }else{

        scrollTopButton.classList.remove("show");

    }

});

scrollTopButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ========= ПОЯВЛЕНИЕ БЛОКОВ ========= */

const reveals =
document.querySelectorAll(".reveal");

function revealAnimation(){

    reveals.forEach(item=>{

        const top =
        item.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll",revealAnimation);

revealAnimation();

/* ========= ПОИСК ========= */

const searchInput =
document.getElementById("searchInput");

const searchable =
document.querySelectorAll(".searchable");

searchInput.addEventListener("input",()=>{

    const value =
    searchInput.value.toLowerCase();

    searchable.forEach(card=>{

        const text =
        card.textContent.toLowerCase();

        if(text.includes(value)){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});
/* ==========================================
   КАРУСЕЛИ
========================================== */

const newsCarousel =
document.getElementById("newsCarousel");

const updateCarousel =
document.getElementById("updateCarousel");

/* ========= КНОПКИ ========= */

const prevNews =
document.querySelector(".prev-news");

const nextNews =
document.querySelector(".next-news");

const prevUpdate =
document.querySelector(".prev-update");

const nextUpdate =
document.querySelector(".next-update");

/* ========= ШАГ ПРОКРУТКИ ========= */

const CARD_WIDTH = 344;

/* ========= НОВОСТИ ========= */

nextNews.addEventListener("click",()=>{

    newsCarousel.scrollBy({

        left:CARD_WIDTH,

        behavior:"smooth"

    });

});

prevNews.addEventListener("click",()=>{

    newsCarousel.scrollBy({

        left:-CARD_WIDTH,

        behavior:"smooth"

    });

});

/* ========= ОБНОВЛЕНИЯ ========= */

nextUpdate.addEventListener("click",()=>{

    updateCarousel.scrollBy({

        left:CARD_WIDTH,

        behavior:"smooth"

    });

});

prevUpdate.addEventListener("click",()=>{

    updateCarousel.scrollBy({

        left:-CARD_WIDTH,

        behavior:"smooth"

    });

});

/* ==========================================
   СВАЙПЫ НА ТЕЛЕФОНЕ
========================================== */

function enableSwipe(slider){

    let startX = 0;

    let endX = 0;

    slider.addEventListener("touchstart",(e)=>{

        startX = e.touches[0].clientX;

    });

    slider.addEventListener("touchend",(e)=>{

        endX = e.changedTouches[0].clientX;

        const distance = startX - endX;

        if(Math.abs(distance) < 40){

            return;

        }

        slider.scrollBy({

            left: distance > 0 ? CARD_WIDTH : -CARD_WIDTH,

            behavior:"smooth"

        });

    });

}

enableSwipe(newsCarousel);
enableSwipe(updateCarousel);

/* ==========================================
   ПРОКРУТКА КОЛЕСОМ МЫШИ
========================================== */

function wheelScroll(slider){

    slider.addEventListener("wheel",(e)=>{

        e.preventDefault();

        slider.scrollLeft += e.deltaY;

    });

}

wheelScroll(newsCarousel);
wheelScroll(updateCarousel);

/* ==========================================
   ЗАЩИТА ОТ ВЫДЕЛЕНИЯ ПРИ ПЕРЕТАСКИВАНИИ
========================================== */

document.querySelectorAll(".card").forEach(card=>{

    card.setAttribute("draggable","false");

});
/* ==========================================
   АВТОПРОКРУТКА КАРУСЕЛЕЙ
========================================== */

function autoScroll(carousel){

    let timer = setInterval(()=>{

        const maxScroll =
        carousel.scrollWidth - carousel.clientWidth;

        if(carousel.scrollLeft >= maxScroll-5){

            carousel.scrollTo({

                left:0,

                behavior:"smooth"

            });

        }else{

            carousel.scrollBy({

                left:CARD_WIDTH,

                behavior:"smooth"

            });

        }

    },5000);

    carousel.addEventListener("mouseenter",()=>{

        clearInterval(timer);

    });

    carousel.addEventListener("mouseleave",()=>{

        timer = setInterval(()=>{

            const maxScroll =
            carousel.scrollWidth-carousel.clientWidth;

            if(carousel.scrollLeft>=maxScroll-5){

                carousel.scrollTo({

                    left:0,

                    behavior:"smooth"

                });

            }else{

                carousel.scrollBy({

                    left:CARD_WIDTH,

                    behavior:"smooth"

                });

            }

        },5000);

    });

}

autoScroll(newsCarousel);
autoScroll(updateCarousel);

/* ==========================================
   ЭФФЕКТ ШАПКИ
========================================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(8,8,8,.96)";
        header.style.boxShadow="0 5px 25px rgba(0,0,0,.55)";

    }else{

        header.style.background="rgba(12,12,12,.85)";
        header.style.boxShadow="none";

    }

});

/* ==========================================
   СВЕЧЕНИЕ КАРТОЧЕК
========================================== */

document.querySelectorAll(".card").forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(76,175,80,.18),
        #161616 60%
        )`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="#161616";

    });

});

/* ==========================================
   ПОИСК ПО САЙТУ (ЗАГОТОВКА)
========================================== */

const articles = [

    {
        title:"Начало заражения",
        url:"news1.html"
    },

    {
        title:"Военные потеряли контроль",
        url:"news2.html"
    },

    {
        title:"Последний сигнал",
        url:"news3.html"
    },

    {
        title:"Новая база выживших",
        url:"news4.html"
    }

];

/*
Позже сюда можно добавить статьи энциклопедии:

{
title:"Зомби-бегун",
url:"zombie-runner.html"
}

и поиск будет работать автоматически.
*/
/* ==========================================
   УМНЫЙ ПОИСК
========================================== */

searchInput.addEventListener("keydown",(e)=>{

    if(e.key !== "Enter") return;

    const value = searchInput.value
        .trim()
        .toLowerCase();

    if(value==="") return;

    const result = articles.find(article=>
        article.title.toLowerCase().includes(value)
    );

    if(result){

        window.location.href=result.url;

    }else{

        alert("Статья не найдена.");

    }

});

/* ==========================================
   LAZY LOADING
========================================== */

document
.querySelectorAll("img")
.forEach(img=>{

    img.loading="lazy";

});

/* ==========================================
   ESC ЗАКРЫВАЕТ БОКОВОЕ МЕНЮ
========================================== */

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        closeSideMenu();

    }

});

/* ==========================================
   ЗАПРЕТ ПЕРЕТАСКИВАНИЯ ИЗОБРАЖЕНИЙ
========================================== */

document.querySelectorAll("img").forEach(img=>{

    img.draggable=false;

});

/* ==========================================
   PRELOAD HERO
========================================== */

const preloadHero = new Image();

preloadHero.src="hero.jpg";

/* ==========================================
   КОНЕЦ SCRIPT.JS
========================================== */

console.log(
"%cZombie Archive загружен",
"color:#4caf50;font-size:18px;font-weight:bold;"
);
