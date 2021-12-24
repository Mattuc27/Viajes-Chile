var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(document).ready(function(){
    // Probando jQuery.
    $("#montana").click(function() {
        alert("Hicisite click en la Montaña");
    })

    // Smooth Scroll al clickear los links de la barra de navegación.
    $("a").click(function(){
        var gato = this.hash

        $("html, body").animate({
            scrollTop: $(gato).offset().top - 60
        },
        800)
    })

    // Cambiando los colores de la barra de navegación cuando se hace scroll.
    $(window).scroll(function(){
        var p = $(window).scrollTop();

        if (p >= 500) {
            $(".navbar").addClass("scrolling navbar-light")
            $(".navbar").removeClass("navbar-dark")
        }
        else {
            $(".navbar").removeClass("scrolling navbar-light")
            $(".navbar").addClass("navbar-dark")
        }

    })
})