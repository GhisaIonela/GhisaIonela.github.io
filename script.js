// import text from './translations.json' assert {type:"json"};
var language = "en"
var text = {}

$(document).ready(function(){
    $.getJSON("./translations.json", function(data){
        text = data;
    });
    selectLanguage("ro", true);
    open_tab("cv");
});

function translate_page(language) {
    $("[text]").each(function(index) {
        var key = $(this).attr("id");
        if (key in text) {
            $(this).html(text[key][language]);
        } else {
            console.log("WARNING: no translation for " + key)
        }
    });
}

function open_tab(tab_id) {
    // window.scroll({
    //     top: 0,  
    //     behavior: 'smooth' 
    // });

    $(".tabcontent").hide();
    $(".tab > button").removeClass('active');

    $("#" + tab_id).show();

    $(".tablinks." + tab_id).addClass("active");

    switch(tab_id) {
        case 'cv':
            $(".dwd_cv").show();
            break;
        case 'projects':
            $(".dwd_cv").hide();
            break;
    }

    window.scrollTo(0, 0);
}

function selectLanguage(lang, is_init = false) {
    language = lang;
    var container = ".language_switch." + lang

    $(".language_switch").removeClass("active");
    $(container).addClass("active");
    if (!is_init) {
        $(container + "> span:first-child").addClass("strech_string_" + lang);
        setTimeout(() => { $(container + "> span:first-child").removeClass("strech_string_" + lang); }, 300);
    }

    translate_page(lang);

    switch(lang) {
        case "ro" :
            $(".dwd_cv").attr("href", "Ghișa Ionela Curriculum Vitae Ro.pdf");
            $(".dwd_cv").attr("download", "CV_GHISA_IONELA_RO");
            break;
        case "en" :
            $(".dwd_cv").attr('href', "Ghișa Ionela Curriculum Vitae En.pdf");
            $(".dwd_cv").attr("download", "CV_GHISA_IONELA_EN");
            break;
    }
}

function closeNarrowMenu() {
    $(".narrow_menu").removeClass("expanded");
    $(".content").removeClass("shrink");
}

function openNarrowMenu() {
    $(".narrow_menu").addClass("expanded");
    $(".content").addClass("shrink");
}


// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex-1].style.display = "block";
// }