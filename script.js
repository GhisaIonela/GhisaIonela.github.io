// import text from './translations.json' assert {type:"json"};
var language = "en"
var text = {}

$(document).ready(function(){
    $.getJSON("./translations.json", function(data){
        text = data;
    });
    selectLanguage("ro", true);
    open_tab("CV_tab", "CV");
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

function open_tab(button_id, tab_id) {
    $(".tabcontent").hide();
    $(".tab > button").removeClass('active');

    $("#" + tab_id).show();

    if (button_id != "") {
        $("#" + button_id).addClass("active");
    }

    if (tab_id == 'CV'){
        $(".dwd_cv").show();
    } else {
        $(".dwd_cv").hide();
    }
}

function selectLanguage(lang, is_init = false) {
    language = lang;
    var container = ".language_switch." + lang

    $(".language_switch").removeClass("active");
    $(container).addClass("active");
    if (!is_init) {
        $(container + "> span:first").addClass("strech_string_" + lang);
        setTimeout(() => { $(container + "> span:first").removeClass("strech_string_" + lang); }, 300);
    }

    translate_page(lang);
}

function closeNarrowMenu() {
    $(".narrow_menu").removeClass("expanded");
    $(".content").removeClass("shrink");
}

function openNarrowMenu() {
    $(".narrow_menu").addClass("expanded");
    $(".content").addClass("shrink");
}