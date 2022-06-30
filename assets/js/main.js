const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")


      
/* ========================== SHOW MENU ====================================== */
// ---- validar si existe -----//
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

/* ============== MENU HIDDEN ============= */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

/* ============== REMOVE MENU MOBILE ============= */
const navLinks = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    //cuando hace click se va
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/* ============== SCROLL SECTIONS ACTIVE LINK ============= */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 250,
        sectionId = current.getAttribute("id");
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.add("active-link")
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId +']').classList.remove("active-link")
        }
    })
}


/* ============== THEME/DISPLAY CUSTOMIZATION ============= */
document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('header')[0].classList.toggle("dark-nav");
});

/* ============== FORM EMAIL ============= */    
    window.addEventListener("DOMContentLoaded", function(){
      const form = document.getElementById("my-form");

      const status = document.getElementById("status");

      function success() {
        form.reset();
        status.classList.add('success');
        status.innerHTML = "Gracias por contactarme, te escribiré pronto!";
      }
      function error() {
        status.classList.add('error');
        status.innerHTML = "Oops! Se encuentra un problema."
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        const data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
      });
    });

    // ayuda function para enviar en AJAX request
    function ajax(method, url, data, success, error) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = function() {
            if(xhr.readyState !== XMLHttpRequest.DONE) return;
            if(xhr.status === 200) {
                success(xhr.response, xhr.responseType);
            } else {
                error(xhr.status, xhr.response, xhr.responseType);
            }
        };
        xhr.send(data);
    }