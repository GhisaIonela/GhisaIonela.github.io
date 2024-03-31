// import text from './translations.json' assert {type:"json"};
const language = "en"
var text = {}

$(document).ready(function(){
    $.getJSON("./translations.json", function(data){
        text = data;
    });
    translate_page("ro");
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