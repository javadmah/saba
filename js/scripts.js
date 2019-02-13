function loadStyle(e, t) {
    for (var o = 0; o < document.styleSheets.length; o++)
        if (document.styleSheets[o].href == e) return;
    var a = document.getElementsByTagName("head")[0],
        s = document.createElement("link");
    s.rel = "stylesheet", s.type = "text/css", s.href = e, t && (s.onload = function() {
        t()
    }), a.appendChild(s)
}! function(e) {
    e().dropzone && (Dropzone.autoDiscover = !1);
    e("body").append('<div class="theme-colors"> <div class="p-4"> <p class="text-muted mb-2"> تم روشن</p> <div class="d-flex flex-row justify-content-between mb-4"> <a href="#" data-theme="dore.light.blue.min.css" class="theme-color theme-color-blue"></a> <a href="#" data-theme="dore.light.purple.min.css" class="theme-color theme-color-purple"></a> <a href="#" data-theme="dore.light.green.min.css" class="theme-color theme-color-green"></a> <a href="#" data-theme="dore.light.orange.min.css" class="theme-color theme-color-orange"></a> <a href="#" data-theme="dore.light.red.min.css" class="theme-color theme-color-red"></a> </div> <p class="text-muted mb-2">تم تیره </p> <div class="d-flex flex-row justify-content-between"> <a href="#" data-theme="dore.dark.blue.min.css" class="theme-color theme-color-blue"></a> <a href="#" data-theme="dore.dark.purple.min.css" class="theme-color theme-color-purple"></a> <a href="#" data-theme="dore.dark.green.min.css" class="theme-color theme-color-green"></a> <a href="#" data-theme="dore.dark.orange.min.css" class="theme-color theme-color-orange"></a> <a href="#" data-theme="dore.dark.red.min.css" class="theme-color theme-color-red"></a> </div> </div> <a href="#" class="theme-button"> <i class="fas fa-fw fa-palette"></i> </a> </div>');
    var t = "dore.light.blue.min.css";

    function o() {
        e("body").dore()
    }
    "undefined" != typeof Storage && localStorage.getItem("theme") && (t = localStorage.getItem("theme")), e(".theme-color[data-theme='" + t + "']").addClass("active"), loadStyle("css/" + t, function() {
        setTimeout(o, 300)
    }), e("body").on("click", ".theme-color", function(t) {
        t.preventDefault();
        var o = e(this).data("theme");
        "undefined" != typeof Storage && (localStorage.setItem("theme", o), window.location.reload())
    }), e(".theme-button").on("click", function(t) {
        t.preventDefault(), e(this).parents(".theme-colors").toggleClass("shown")
    }), e(document).on("click", function(t) {
        e(t.target).parents().hasClass("theme-colors") || e(t.target).parents().hasClass("theme-button") || e(t.target).hasClass("theme-button") || e(t.target).hasClass("theme-colors") || e(".theme-colors").hasClass("shown") && e(".theme-colors").removeClass("shown")
    })
}(jQuery);