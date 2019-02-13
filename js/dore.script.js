// call persian date picker
$('.datepicker').persianDatepicker();

$('.date').persianDatepicker();

$('.date-inline').persianDatepicker({
    inline: true,

});

$('.calendar').persianDatepicker({
    inline: true,

});

$.fn.addCommas = function(e) {
    for (var t = (e += "").split("."), a = t[0], o = t.length > 1 ? "." + t[1] : "", n = /(\d+)(\d{3})/; n.test(a);) a = a.replace(n, "$1,$2");
    return a + o
}, $.fn.shiftSelectable = function(e) {
    e = $.extend({
        items: 'input[type="checkbox"]'
    }, e);
    var t, a = null,
        o = this.find(e.items);
    this.data("checkAll") && (a = $("#" + this.data("checkAll"))).on("click", function() {
        o.prop("checked", $(a).prop("checked")).trigger("change")
    }), this.on("click", e.items, function(e) {
        if (t || (t = this), t) {
            if (e.shiftKey) {
                var n = o.index(this),
                    i = o.index(t);
                o.slice(Math.min(n, i), Math.max(n, i) + 1).prop("checked", t.checked).trigger("change")
            }
            t = this
        }
        if (a) {
            var r = !1,
                s = !0;
            o.each(function() {
                $(this).prop("checked") ? r = !0 : s = !1
            }), r ? a.prop("indeterminate", r) : (a.prop("indeterminate", r), a.prop("checked", r)), s && (a.prop("indeterminate", !1), a.prop("checked", s))
        }
    })
}, $.dore = function(e, t) {
    var a = {},
        o = this;
    o.settings = {};
    $(e), e = e;
    ! function() {
        re = re || {}, o.settings = $.extend({}, a, re);
        var e = getComputedStyle(document.body),
            t = e.getPropertyValue("--theme-color-1").trim(),
            n = e.getPropertyValue("--theme-color-2").trim(),
            i = e.getPropertyValue("--theme-color-3").trim(),
            r = e.getPropertyValue("--theme-color-4").trim(),
            s = e.getPropertyValue("--theme-color-5").trim(),
            l = (e.getPropertyValue("--theme-color-6").trim(), e.getPropertyValue("--theme-color-1-10").trim()),
            d = e.getPropertyValue("--theme-color-2-10").trim(),
            c = e.getPropertyValue("--theme-color-3-10").trim(),
            u = e.getPropertyValue("--theme-color-4-10").trim(),
            p = e.getPropertyValue("--theme-color-5-10").trim(),
            h = (e.getPropertyValue("--theme-color-6-10").trim(), 1440),
            m = 768,
            g = 768;

        function b() {
            var e = $(window).outerHeight(),
                t = $(window).outerWidth(),
                a = $(".navbar").outerHeight(),
                o = parseInt($(".sub-menu .scroll").css("margin-top"), 10);
            $(".sub-menu .scroll").css("height", e - a - 2 * o), $(".main-menu .scroll").css("height", e - a), $(".app-menu .scroll").css("height", e - a - 40), $(".chat-app .scroll").length > 0 && ae && ($(".chat-app .scroll").scrollTop($(".chat-app .scroll").prop("scrollHeight")), ae.update()), t < g ? $("#app-container").addClass("menu-mobile") : t < h ? ($("#app-container").removeClass("menu-mobile"), $("#app-container").hasClass("menu-default") && $("#app-container").attr("class", "menu-default menu-sub-hidden")) : ($("#app-container").removeClass("menu-mobile"), $("#app-container").hasClass("menu-default") && $("#app-container").hasClass("menu-sub-hidden") && $("#app-container").removeClass("menu-sub-hidden")), w(0)
        }

        function f() {
            var e = $(".search input").val(),
                t = $(".search").data("searchPath");
            "" != e && ($(".search input").val(""), window.location.href = t + e)
        }

        function C() {
            $(".search").hasClass("mobile-view") && ($(".search").removeClass("mobile-view"), $(".search input").val(""))
        }
        $(window).on("resize", function(e) {
            e.originalEvent.isTrusted && b()
        }), b(), $(".search .search-icon").on("click", function() {
            $(window).outerWidth() < m ? $(".search").hasClass("mobile-view") ? ($(".search").removeClass("mobile-view"), f()) : ($(".search").addClass("mobile-view"), $(".search input").focus()) : f()
        }), $(".search input").on("keyup", function(e) {
            13 == e.which && f(), 27 == e.which && C()
        }), $(document).on("click", function(e) {
            $(e.target).parents().hasClass("search") || C()
        }), $(".list").shiftSelectable();
        var y = 0;

        function w(e) {
            y = e;
            var t = $("#app-container");
            if (0 != t.length) {
                var a = t.attr("class").split(" ").filter(e => "" != e),
                    o = "";
                e % 4 == 0 ? (a.includes("menu-default") && a.includes("menu-sub-hidden") ? o = "menu-default menu-sub-hidden" : a.includes("menu-default") ? o = "menu-default" : a.includes("menu-sub-hidden") ? o = "menu-sub-hidden" : a.includes("menu-hidden") && (o = "menu-hidden"), y = 0) : e % 4 == 1 ? a.includes("menu-default") && a.includes("menu-sub-hidden") ? o = "menu-default menu-sub-hidden main-hidden sub-hidden" : a.includes("menu-default") ? o = "menu-default sub-hidden" : a.includes("menu-sub-hidden") ? o = "menu-sub-hidden main-hidden sub-hidden" : a.includes("menu-hidden") && (o = "menu-hidden main-show-temporary") : e % 4 == 2 ? a.includes("menu-default") && a.includes("menu-sub-hidden") ? o = "menu-default menu-sub-hidden sub-hidden" : a.includes("menu-default") ? o = "menu-default main-hidden sub-hidden" : a.includes("menu-sub-hidden") ? o = "menu-sub-hidden sub-hidden" : a.includes("menu-hidden") && (o = "menu-hidden main-show-temporary sub-show-temporary") : e % 4 == 3 && (a.includes("menu-default") && a.includes("menu-sub-hidden") ? o = "menu-default menu-sub-hidden sub-show-temporary" : a.includes("menu-default") ? o = "menu-default sub-hidden" : a.includes("menu-sub-hidden") ? o = "menu-sub-hidden sub-show-temporary" : a.includes("menu-hidden") && (o = "menu-hidden main-show-temporary")), a.includes("menu-mobile") && (o += " menu-mobile"), t.attr("class", o), setTimeout(function() {
                    var e = document.createEvent("HTMLEvents");
                    e.initEvent("resize", !1, !1), window.dispatchEvent(e)
                }, 350)
            }
        }
        $(".menu-button").on("click", function() {
            event.preventDefault(), w(++y)
        }), $(".menu-button-mobile").on("click", function(e) {
            return e.preventDefault(), $("#app-container").removeClass("sub-show-temporary").toggleClass("main-show-temporary"), !1
        }), $(".main-menu").on("click", "a", function(e) {
            e.preventDefault();
            var t = $(this).attr("href").replace("#", "");
            if (0 != $(".sub-menu ul[data-link='" + t + "']").length) return x($(this).attr("href")), $("#app-container"), $("#app-container").hasClass("menu-mobile") ? $("#app-container").addClass("sub-show-temporary") : !$("#app-container").hasClass("menu-sub-hidden") || 2 != y && 0 != y ? !$("#app-container").hasClass("menu-hidden") || 1 != y && 3 != y ? !$("#app-container").hasClass("menu-default") || $("#app-container").hasClass("menu-sub-hidden") || 1 != y && 3 != y || w(0) : w(2) : w(3), !1;
            window.location.href = t
        }), $(document).on("click", function(e) {
            $(e.target).parents().hasClass("menu-button") || $(e.target).hasClass("menu-button") || $(e.target).parents().hasClass("sidebar") || $(e.target).hasClass("sidebar") || ($("#app-container").hasClass("menu-sub-hidden") && 3 == y ? w(2) : ($("#app-container").hasClass("menu-hidden") || $("#app-container").hasClass("menu-mobile")) && w(0))
        });
        var v = "";

        function x(e) {
            if (0 != $(".main-menu").length) {
                var t = e.replace("#", "");
                if (0 == $(".sub-menu ul[data-link='" + t + "']").length) return $("#app-container").removeClass("sub-show-temporary"), $(".sub-menu").addClass("no-transition"), $("main").addClass("no-transition"), void setTimeout(function() {
                    $(".sub-menu").removeClass("no-transition"), $("main").removeClass("no-transition")
                }, 350);
                t != v && ($(".sub-menu ul").fadeOut(0), $(".sub-menu ul[data-link='" + t + "']").slideDown(100), $(".sub-menu .scroll").scrollTop(0), v = t)
            }
        }

        function k(e) {
            var t = $(e.parents(".question"));
            t.toggleClass("edit-quesiton"), t.toggleClass("view-quesiton");
            var a = t.find(".question-collapse");
            a.hasClass("show") || (a.collapse("toggle"), t.find(".rotate-icon-click").toggleClass("rotate"))
        }
        if (x($(".main-menu ul li.active a").attr("href")), $(".app-menu-button").on("click", function() {
                event.preventDefault(), $(".app-menu").hasClass("shown") ? $(".app-menu").removeClass("shown") : $(".app-menu").addClass("shown")
            }), $(document).on("click", function(e) {
                $(e.target).parents().hasClass("app-menu") || $(e.target).parents().hasClass("app-menu-button") || $(e.target).hasClass("app-menu-button") || $(e.target).hasClass("app-menu") || $(".app-menu").hasClass("shown") && $(".app-menu").removeClass("shown")
            }), $(document).on("click", ".question .view-button", function() {
                k($(this))
            }), $(document).on("click", ".question .edit-button", function() {
                k($(this))
            }), $(document).on("click", ".rotate-icon-click", function() {
                $(this).toggleClass("rotate")
            }), "undefined" != typeof Chart) {
            Chart.defaults.global.defaultFontFamily = "'iransans-ulight', iransans-light", Chart.defaults.LineWithShadow = Chart.defaults.line, Chart.controllers.LineWithShadow = Chart.controllers.line.extend({
                draw: function(e) {
                    Chart.controllers.line.prototype.draw.call(this, e);
                    var t = this.chart.ctx;
                    t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 10, t.shadowOffsetX = 0, t.shadowOffsetY = 10, t.responsive = !0, t.stroke(), Chart.controllers.line.prototype.draw.apply(this, arguments), t.restore()
                }
            }), Chart.defaults.BarWithShadow = Chart.defaults.bar, Chart.controllers.BarWithShadow = Chart.controllers.bar.extend({
                draw: function(e) {
                    Chart.controllers.bar.prototype.draw.call(this, e);
                    var t = this.chart.ctx;
                    t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 12, t.shadowOffsetX = 5, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.bar.prototype.draw.apply(this, arguments), t.restore()
                }
            }), Chart.defaults.LineWithLine = Chart.defaults.line, Chart.controllers.LineWithLine = Chart.controllers.line.extend({
                draw: function(e) {
                    if (Chart.controllers.line.prototype.draw.call(this, e), this.chart.tooltip._active && this.chart.tooltip._active.length) {
                        var t = this.chart.tooltip._active[0],
                            a = this.chart.ctx,
                            o = t.tooltipPosition().x,
                            n = this.chart.scales["y-axis-0"].top,
                            i = this.chart.scales["y-axis-0"].bottom;
                        a.save(), a.beginPath(), a.moveTo(o, n), a.lineTo(o, i), a.lineWidth = 1, a.strokeStyle = "rgba(0,0,0,0.1)", a.stroke(), a.restore()
                    }
                }
            }), Chart.defaults.DoughnutWithShadow = Chart.defaults.doughnut, Chart.controllers.DoughnutWithShadow = Chart.controllers.doughnut.extend({
                draw: function(e) {
                    Chart.controllers.doughnut.prototype.draw.call(this, e);
                    let t = this.chart.chart.ctx;
                    t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 10, t.shadowOffsetX = 0, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.doughnut.prototype.draw.apply(this, arguments), t.restore()
                }
            }), Chart.defaults.PieWithShadow = Chart.defaults.pie, Chart.controllers.PieWithShadow = Chart.controllers.pie.extend({
                draw: function(e) {
                    Chart.controllers.pie.prototype.draw.call(this, e);
                    let t = this.chart.chart.ctx;
                    t.save(), t.shadowColor = "rgba(0,0,0,0.15)", t.shadowBlur = 10, t.shadowOffsetX = 0, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.pie.prototype.draw.apply(this, arguments), t.restore()
                }
            }), Chart.defaults.ScatterWithShadow = Chart.defaults.scatter, Chart.controllers.ScatterWithShadow = Chart.controllers.scatter.extend({
                draw: function(e) {
                    Chart.controllers.scatter.prototype.draw.call(this, e);
                    let t = this.chart.chart.ctx;
                    t.save(), t.shadowColor = "rgba(0,0,0,0.2)", t.shadowBlur = 7, t.shadowOffsetX = 0, t.shadowOffsetY = 7, t.responsive = !0, Chart.controllers.scatter.prototype.draw.apply(this, arguments), t.restore()
                }
            }), Chart.defaults.RadarWithShadow = Chart.defaults.radar, Chart.controllers.RadarWithShadow = Chart.controllers.radar.extend({
                draw: function(e) {
                    Chart.controllers.radar.prototype.draw.call(this, e);
                    let t = this.chart.chart.ctx;
                    t.save(), t.shadowColor = "rgba(0,0,0,0.2)", t.shadowBlur = 7, t.shadowOffsetX = 0, t.shadowOffsetY = 7, t.responsive = !0, Chart.controllers.radar.prototype.draw.apply(this, arguments), t.restore()
                }
            }), Chart.defaults.PolarWithShadow = Chart.defaults.polarArea, Chart.controllers.PolarWithShadow = Chart.controllers.polarArea.extend({
                draw: function(e) {
                    Chart.controllers.polarArea.prototype.draw.call(this, e);
                    let t = this.chart.chart.ctx;
                    t.save(), t.shadowColor = "rgba(0,0,0,0.2)", t.shadowBlur = 10, t.shadowOffsetX = 5, t.shadowOffsetY = 10, t.responsive = !0, Chart.controllers.polarArea.prototype.draw.apply(this, arguments), t.restore()
                }
            });
            var S = {
                backgroundColor: "#fff",
                titleFontColor: "#636363",
                borderColor: "#d7d7d7",
                borderWidth: .5,
                bodyFontColor: "#636363",
                bodySpacing: 10,
                xPadding: 15,
                yPadding: 15,
                cornerRadius: .15
            };
            if (document.getElementById("visitChartFull")) {
                var B = document.getElementById("visitChartFull").getContext("2d");
                new Chart(B, {
                    type: "LineWithShadow",
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "تاریخ",
                            borderColor: t,
                            pointBorderColor: t,
                            pointBackgroundColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: t,
                            pointRadius: 3,
                            pointBorderWidth: 3,
                            pointHoverRadius: 3,
                            fill: !0,
                            backgroundColor: l,
                            borderWidth: 2,
                            data: [180, 140, 150, 120, 180, 110, 160],
                            datalabels: {
                                align: "end",
                                anchor: "end"
                            }
                        }]
                    },
                    options: {
                        layout: {
                            padding: {
                                left: 0,
                                right: 0,
                                top: 40,
                                bottom: 0
                            }
                        },
                        plugins: {
                            datalabels: {
                                backgroundColor: "transparent",
                                borderRadius: 30,
                                borderWidth: 1,
                                padding: 5,
                                borderColor: function(e) {
                                    return e.dataset.borderColor
                                },
                                color: function(e) {
                                    return e.dataset.borderColor
                                },
                                font: {
                                    weight: "bold",
                                    size: 10
                                },
                                formatter: Math.round
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        legend: {
                            display: !1
                        },
                        tooltips: S,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    min: 0
                                },
                                display: !1
                            }],
                            xAxes: [{
                                ticks: {
                                    min: 0
                                },
                                display: !1
                            }]
                        }
                    }
                })
            }
            if (document.getElementById("visitChart")) {
                var W = document.getElementById("visitChart").getContext("2d");
                new Chart(W, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 0
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: S
                    },
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "",
                            data: [54, 63, 60, 65, 60, 68, 60],
                            borderColor: t,
                            pointBackgroundColor: "#fff",
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: "#fff",
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: !0,
                            borderWidth: 2,
                            backgroundColor: l
                        }]
                    }
                })
            }
            if (document.getElementById("conversionChart")) {
                var A = document.getElementById("conversionChart").getContext("2d");
                new Chart(A, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 0
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: S
                    },
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "",
                            data: [65, 60, 68, 54, 63, 60, 60],
                            borderColor: n,
                            pointBackgroundColor: "#fff",
                            pointBorderColor: n,
                            pointHoverBackgroundColor: n,
                            pointHoverBorderColor: "#fff",
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: !0,
                            borderWidth: 2,
                            backgroundColor: d
                        }]
                    }
                })
            }
            var E = {
                    layout: {
                        padding: {
                            left: 5,
                            right: 5,
                            top: 10,
                            bottom: 10
                        }
                    },
                    plugins: {
                        datalabels: {
                            display: !1
                        }
                    },
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        display: !1
                    },
                    tooltips: {
                        intersect: !1,
                        enabled: !1,
                        custom: function(e) {
                            if (e && e.dataPoints) {
                                var t = $(this._chart.canvas.offsetParent),
                                    a = e.dataPoints[0].yLabel,
                                    o = e.dataPoints[0].xLabel,
                                    n = e.body[0].lines[0].split(":")[0];
                                t.find(".value").html("$" + $.fn.addCommas(a)), t.find(".label").html(n + " " + "-" + " " + o)
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: !0
                            },
                            display: !1
                        }],
                        xAxes: [{
                            display: !1
                        }]
                    }
                },
                I = {
                    afterInit: function(e, t) {
                        var a = $(e.canvas.offsetParent),
                            o = e.data.datasets[0].data[0],
                            n = e.data.labels[0],
                            i = e.data.datasets[0].label;
                        a.find(".value").html("$" + $.fn.addCommas(o)), a.find(".label").html(i + " " + "-" + " " + n)
                    }
                };
            if (document.getElementById("smallChart1")) {
                var R = document.getElementById("smallChart1").getContext("2d");
                new Chart(R, {
                    type: "LineWithLine",
                    plugins: [I],
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "کل سفارشات",
                            borderColor: t,
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: t,
                            pointRadius: 2,
                            pointBorderWidth: 3,
                            pointHoverRadius: 2,
                            fill: !1,
                            borderWidth: 2,
                            data: [1250, 1300, 1550, 921, 1810, 1106, 1610],
                            datalabels: {
                                align: "end",
                                anchor: "end"
                            }
                        }]
                    },
                    options: E
                })
            }
            if (document.getElementById("smallChart2") && (R = document.getElementById("smallChart2").getContext("2d"), new Chart(R, {
                    type: "LineWithLine",
                    plugins: [I],
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "سفارشات درحال انتظار",
                            fontsize:5 ,
                            borderColor: t,
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: t,
                            pointRadius: 2,
                            pointBorderWidth: 3,
                            pointHoverRadius: 2,
                            fill: !1,
                            borderWidth: 2,
                            data: [115, 120, 300, 222, 105, 85, 36],
                            datalabels: {
                                align: "end",
                                anchor: "end"
                            }
                        }]
                    },
                    options: E
                })), document.getElementById("smallChart3") && (R = document.getElementById("smallChart3").getContext("2d"), new Chart(R, {
                    type: "LineWithLine",
                    plugins: [I],
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "سفارشات فعال",
                            borderColor: t,
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: t,
                            pointRadius: 2,
                            pointBorderWidth: 3,
                            pointHoverRadius: 2,
                            fill: !1,
                            borderWidth: 2,
                            data: [350, 452, 762, 952, 630, 85, 158],
                            datalabels: {
                                align: "end",
                                anchor: "end"
                            }
                        }]
                    },
                    options: E
                })), document.getElementById("smallChart4") && (R = document.getElementById("smallChart4").getContext("2d"), new Chart(R, {
                    type: "LineWithLine",
                    plugins: [I],
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "سفارشات ارسال شده",
                            borderColor: t,
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: t,
                            pointRadius: 2,
                            pointBorderWidth: 3,
                            pointHoverRadius: 2,
                            fill: !1,
                            borderWidth: 2,
                            data: [200, 452, 250, 630, 125, 85, 20],
                            datalabels: {
                                align: "end",
                                anchor: "end"
                            }
                        }]
                    },
                    options: E
                })), document.getElementById("salesChart")) {
                var P = document.getElementById("salesChart").getContext("2d");
                new Chart(P, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: S
                    },
                    data: {
                        labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "",
                            data: [54, 63, 60, 65, 60, 68, 60],
                            borderColor: t,
                            pointBackgroundColor: "#fff",
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: "#fff",
                            pointRadius: 6,
                            pointBorderWidth: 2,
                            pointHoverRadius: 8,
                            fill: !1
                        }]
                    }
                })
            }
            if (document.getElementById("areaChart")) {
                var T = document.getElementById("areaChart").getContext("2d");
                new Chart(T, {
                    type: "LineWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 0
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: S
                    },
                    data: {
                       labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "",
                            data: [54, 63, 60, 65, 60, 68, 60],
                            borderColor: t,
                            pointBackgroundColor: "#fff",
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: "#fff",
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: !0,
                            borderWidth: 2,
                            backgroundColor: l
                        }]
                    }
                })
            }
            if (document.getElementById("areaChartNoShadow")) {
                var z = document.getElementById("areaChartNoShadow").getContext("2d");
                new Chart(z, {
                    type: "line",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 0
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: S
                    },
                    data: {
                       labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "",
                            data: [54, 63, 60, 65, 60, 68, 60],
                            borderColor: t,
                            pointBackgroundColor: "#fff",
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: "#fff",
                            pointRadius: 4,
                            pointBorderWidth: 2,
                            pointHoverRadius: 5,
                            fill: !0,
                            borderWidth: 2,
                            backgroundColor: l
                        }]
                    }
                })
            }
            if (document.getElementById("scatterChart")) {
                var D = document.getElementById("scatterChart").getContext("2d");
                new Chart(D, {
                    type: "ScatterWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 20,
                                    min: -80,
                                    max: 80,
                                    padding: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)"
                                }
                            }]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        datasets: [{
                            borderWidth: 2,
                            label: "موجودی",
                            borderColor: t,
                            backgroundColor: l,
                            data: [{
                                x: 62,
                                y: -78
                            }, {
                                x: -0,
                                y: 74
                            }, {
                                x: -67,
                                y: 45
                            }, {
                                x: -26,
                                y: -43
                            }, {
                                x: -15,
                                y: -30
                            }, {
                                x: 65,
                                y: -68
                            }, {
                                x: -28,
                                y: -61
                            }]
                        }, {
                            borderWidth: 2,
                            label: "فروش",
                            borderColor: n,
                            backgroundColor: d,
                            data: [{
                                x: 79,
                                y: 62
                            }, {
                                x: 62,
                                y: 0
                            }, {
                                x: -76,
                                y: -81
                            }, {
                                x: -51,
                                y: 41
                            }, {
                                x: -9,
                                y: 9
                            }, {
                                x: 72,
                                y: -37
                            }, {
                                x: 62,
                                y: -26
                            }]
                        }]
                    }
                })
            }
            if (document.getElementById("scatterChartNoShadow")) {
                var L = document.getElementById("scatterChartNoShadow").getContext("2d");
                new Chart(L, {
                    type: "scatter",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 20,
                                    min: -80,
                                    max: 80,
                                    padding: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)"
                                }
                            }]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        datasets: [{
                            borderWidth: 2,
                            label: "موجودی",
                            borderColor: t,
                            backgroundColor: l,
                            data: [{
                                x: 62,
                                y: -78
                            }, {
                                x: -0,
                                y: 74
                            }, {
                                x: -67,
                                y: 45
                            }, {
                                x: -26,
                                y: -43
                            }, {
                                x: -15,
                                y: -30
                            }, {
                                x: 65,
                                y: -68
                            }, {
                                x: -28,
                                y: -61
                            }]
                        }, {
                            borderWidth: 2,
                            label: "فروش",
                            borderColor: n,
                            backgroundColor: d,
                            data: [{
                                x: 79,
                                y: 62
                            }, {
                                x: 62,
                                y: 0
                            }, {
                                x: -76,
                                y: -81
                            }, {
                                x: -51,
                                y: 41
                            }, {
                                x: -9,
                                y: 9
                            }, {
                                x: 72,
                                y: -37
                            }, {
                                x: 62,
                                y: -26
                            }]
                        }]
                    }
                })
            }
            if (document.getElementById("radarChartNoShadow")) {
                var F = document.getElementById("radarChartNoShadow").getContext("2d");
                new Chart(F, {
                    type: "radar",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scale: {
                            ticks: {
                                display: !1
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 10
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        datasets: [{
                            label: "موجودی",
                            borderWidth: 2,
                            pointBackgroundColor: t,
                            borderColor: t,
                            backgroundColor: l,
                            data: [80, 90, 70]
                        }, {
                            label: "سفارش",
                            borderWidth: 2,
                            pointBackgroundColor: n,
                            borderColor: n,
                            backgroundColor: d,
                            data: [68, 80, 95]
                        }],
                         labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"]
                    }
                })
            }
            if (document.getElementById("radarChart")) {
                var H = document.getElementById("radarChart").getContext("2d");
                new Chart(H, {
                    type: "RadarWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scale: {
                            ticks: {
                                display: !1
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 10
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        datasets: [{
                            label: "موجودی",
                            borderWidth: 2,
                            pointBackgroundColor: t,
                            borderColor: t,
                            backgroundColor: l,
                            data: [80, 90, 70]
                        }, {
                            label: "سفارش",
                            borderWidth: 2,
                            pointBackgroundColor: n,
                            borderColor: n,
                            backgroundColor: d,
                            data: [68, 80, 95]
                        }],
                         labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"]
                    }
                })
            }
            if (document.getElementById("polarChart")) {
                var M = document.getElementById("polarChart").getContext("2d");
                new Chart(M, {
                    type: "PolarWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scale: {
                            ticks: {
                                display: !1
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 10
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        datasets: [{
                            label: "موجودی",
                            borderWidth: 2,
                            pointBackgroundColor: t,
                            borderColor: [t, n, i],
                            backgroundColor: [l, d, c],
                            data: [80, 90, 70]
                        }],
                         labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"]
                    }
                })
            }
            if (document.getElementById("polarChartNoShadow")) {
                var N = document.getElementById("polarChartNoShadow").getContext("2d");
                new Chart(N, {
                    type: "polarArea",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scale: {
                            ticks: {
                                display: !1
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 10
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        datasets: [{
                            label: "موجودی",
                            borderWidth: 2,
                            pointBackgroundColor: t,
                            borderColor: [t, n, i],
                            backgroundColor: [l, d, c],
                            data: [80, 90, 70]
                        }],
                         labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"]
                    }
                })
            }
            if (document.getElementById("salesChartNoShadow")) {
                var O = document.getElementById("salesChartNoShadow").getContext("2d");
                new Chart(O, {
                    type: "line",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 5,
                                    min: 50,
                                    max: 70,
                                    padding: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            display: !1
                        },
                        tooltips: S
                    },
                    data: {
                       labels: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
                        datasets: [{
                            label: "",
                            data: [54, 63, 60, 65, 60, 68, 60],
                            borderColor: t,
                            pointBackgroundColor: "#fff",
                            pointBorderColor: t,
                            pointHoverBackgroundColor: t,
                            pointHoverBorderColor: "#fff",
                            pointRadius: 6,
                            pointBorderWidth: 2,
                            pointHoverRadius: 8,
                            fill: !1
                        }]
                    }
                })
            }
            if (document.getElementById("productChart")) {
                var q = document.getElementById("productChart").getContext("2d");
                new Chart(q, {
                    type: "BarWithShadow",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 100,
                                    min: 300,
                                    max: 800,
                                    padding: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
                        datasets: [{
                            label: "موجودی",
                            borderColor: t,
                            backgroundColor: l,
                            data: [456, 479, 324, 569, 702, 600],
                            borderWidth: 2
                        }, {
                            label: "فروش",
                            borderColor: n,
                            backgroundColor: d,
                            data: [364, 504, 605, 400, 345, 320],
                            borderWidth: 2
                        }]
                    }
                })
            }
            if (document.getElementById("productChartNoShadow")) {
                var _ = document.getElementById("productChartNoShadow").getContext("2d");
                new Chart(_, {
                    type: "bar",
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: !0,
                                    lineWidth: 1,
                                    color: "rgba(0,0,0,0.1)",
                                    drawBorder: !1
                                },
                                ticks: {
                                    beginAtZero: !0,
                                    stepSize: 100,
                                    min: 300,
                                    max: 800,
                                    padding: 20
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: !1
                                }
                            }]
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    },
                    data: {
                        labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
                        datasets: [{
                            label: "موجودی",
                            borderColor: t,
                            backgroundColor: l,
                            data: [456, 479, 324, 569, 702, 600],
                            borderWidth: 2
                        }, {
                            label: "فروش",
                            borderColor: n,
                            backgroundColor: d,
                            data: [364, 504, 605, 400, 345, 320],
                            borderWidth: 2
                        }]
                    }
                })
            }
            var V = {
                type: "LineWithShadow",
                options: {
                    plugins: {
                        datalabels: {
                            display: !1
                        }
                    },
                    responsive: !0,
                    maintainAspectRatio: !1,
                    scales: {
                        yAxes: [{
                            gridLines: {
                                display: !0,
                                lineWidth: 1,
                                color: "rgba(0,0,0,0.1)",
                                drawBorder: !1
                            },
                            ticks: {
                                beginAtZero: !0,
                                stepSize: 5,
                                min: 50,
                                max: 70,
                                padding: 20
                            }
                        }],
                        xAxes: [{
                            gridLines: {
                                display: !1
                            }
                        }]
                    },
                    legend: {
                        display: !1
                    },
                    tooltips: S
                },
                data: {
                    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                    datasets: [{
                        borderWidth: 2,
                        label: "",
                        data: [54, 63, 60, 65, 60, 68, 60, 63, 60, 65, 60, 68],
                        borderColor: t,
                        pointBackgroundColor: "#fff",
                        pointBorderColor: t,
                        pointHoverBackgroundColor: t,
                        pointHoverBorderColor: "#fff",
                        pointRadius: 4,
                        pointBorderWidth: 2,
                        pointHoverRadius: 5,
                        fill: !1
                    }]
                }
            };
            document.getElementById("contributionChart1") && new Chart(document.getElementById("contributionChart1").getContext("2d"), V), document.getElementById("contributionChart2") && new Chart(document.getElementById("contributionChart2").getContext("2d"), V), document.getElementById("contributionChart3") && new Chart(document.getElementById("contributionChart3").getContext("2d"), V);
            var Z = {
                afterDatasetsUpdate: function(e) {},
                beforeDraw: function(e) {
                    var t = e.chartArea.right,
                        a = e.chartArea.bottom,
                        o = e.chart.ctx;
                    o.restore();
                    var n = e.data.labels[0],
                        i = e.data.datasets[0].data[0],
                        r = e.data.datasets[0],
                        s = r._meta[Object.keys(r._meta)[0]],
                        l = s.total,
                        d = parseFloat((i / l * 100).toFixed(1));
                    d = e.legend.legendItems[0].hidden ? 0 : d, e.pointAvailable && (n = e.data.labels[e.pointIndex], i = e.data.datasets[e.pointDataIndex].data[e.pointIndex], l = (s = (r = e.data.datasets[e.pointDataIndex])._meta[Object.keys(r._meta)[0]]).total, d = parseFloat((i / l * 100).toFixed(1)), d = e.legend.legendItems[e.pointIndex].hidden ? 0 : d), o.font = "36px Nunito, sans-serif", o.textBaseline = "middle";
                    var c = d + "%",
                        u = Math.round((t - o.measureText(c).width) / 2),
                        p = a / 2;
                    o.fillText(c, u, p), o.font = "14px Nunito, sans-serif", o.textBaseline = "middle";
                    var h = n;
                    u = Math.round((t - o.measureText(h).width) / 2), p = a / 2 - 30, o.fillText(h, u, p), o.save()
                },
                beforeEvent: function(e, t, a) {
                    var o = e.getElementAtEvent(t)[0];
                    o && (e.pointIndex = o._index, e.pointDataIndex = o._datasetIndex, e.pointAvailable = !0)
                }
            };
            if (document.getElementById("categoryChart")) {
                var J = document.getElementById("categoryChart");
                new Chart(J, {
                    plugins: [Z],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"],
                        datasets: [{
                            label: "",
                            borderColor: [i, n, t],
                            backgroundColor: [c, d, l],
                            borderWidth: 2,
                            data: [15, 25, 20]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        cutoutPercentage: 80,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 10
                            }
                        },
                        tooltips: S
                    }
                })
            }
            if (document.getElementById("categoryChartNoShadow")) {
                var U = document.getElementById("categoryChartNoShadow");
                new Chart(U, {
                    plugins: [Z],
                    type: "doughnut",
                    data: {
                        labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"],
                        datasets: [{
                            label: "",
                            borderColor: [i, n, t],
                            backgroundColor: [c, d, l],
                            borderWidth: 2,
                            data: [15, 25, 20]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        cutoutPercentage: 80,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 10
                            }
                        },
                        tooltips: S
                    }
                })
            }
            if (document.getElementById("pieChartNoShadow")) {
                var Y = document.getElementById("pieChartNoShadow");
                new Chart(Y, {
                    type: "pie",
                    data: {
                        labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"],
                        datasets: [{
                            label: "",
                            borderColor: [t, n, i],
                            backgroundColor: [l, d, c],
                            borderWidth: 2,
                            data: [15, 25, 20]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 10
                            }
                        },
                        tooltips: S
                    }
                })
            }
            if (document.getElementById("pieChart") && (Y = document.getElementById("pieChart"), new Chart(Y, {
                    type: "PieWithShadow",
                    data: {
                        labels: [" سهام ارزی", " سود سالیانه", " فروش در ماه"],
                        datasets: [{
                            label: "",
                            borderColor: [t, n, i],
                            backgroundColor: [l, d, c],
                            borderWidth: 2,
                            data: [15, 25, 20]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    }
                })), document.getElementById("frequencyChart")) {
                var X = document.getElementById("frequencyChart");
                new Chart(X, {
                    plugins: [Z],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["اضافه", "ویرایش", "حذف"],
                        datasets: [{
                            label: "",
                            borderColor: [t, n, i],
                            backgroundColor: [l, d, c],
                            borderWidth: 2,
                            data: [15, 25, 20]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        cutoutPercentage: 80,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    }
                })
            }
            if (document.getElementById("ageChart")) {
                var j = document.getElementById("ageChart");
                new Chart(j, {
                    plugins: [Z],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["12-24", "24-30", "30-40", "40-50", "50-60"],
                        datasets: [{
                            label: "",
                            borderColor: [t, n, i, r, s],
                            backgroundColor: [l, d, c, u, p],
                            borderWidth: 2,
                            data: [15, 25, 20, 30, 14]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        cutoutPercentage: 80,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    }
                })
            }
            if (document.getElementById("genderChart")) {
                var K = document.getElementById("genderChart");
                new Chart(K, {
                    plugins: [Z],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["مرد", "زن", "دیگر"],
                        datasets: [{
                            label: "",
                            borderColor: [t, n, i],
                            backgroundColor: [l, d, c],
                            borderWidth: 2,
                            data: [85, 45, 20]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        cutoutPercentage: 80,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    }
                })
            }
            if (document.getElementById("workChart")) {
                var Q = document.getElementById("workChart");
                new Chart(Q, {
                    plugins: [Z],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["استخدام برای دستمزد", "دارای شغل آزاد", "از کار و به دنبال کار", "بازنشسته"],
                        datasets: [{
                            label: "",
                            borderColor: [t, n, i, r],
                            backgroundColor: [l, d, c, u],
                            borderWidth: 2,
                            data: [15, 25, 20, 8]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        cutoutPercentage: 80,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    }
                })
            }
            if (document.getElementById("codingChart")) {
                var G = document.getElementById("codingChart");
                new Chart(G, {
                    plugins: [Z],
                    type: "DoughnutWithShadow",
                    data: {
                        labels: ["پایتون", "جاوااسکریپت", "PHP", "جاوا", "C#"],
                        datasets: [{
                            label: "",
                            borderColor: [t, n, i, r, s],
                            backgroundColor: [l, d, c, u, p],
                            borderWidth: 2,
                            data: [15, 25, 20, 8, 25]
                        }]
                    },
                    draw: function() {},
                    options: {
                        plugins: {
                            datalabels: {
                                display: !1
                            }
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        cutoutPercentage: 80,
                        title: {
                            display: !1
                        },
                        layout: {
                            padding: {
                                bottom: 20
                            }
                        },
                        legend: {
                            position: "bottom",
                            labels: {
                                padding: 30,
                                usePointStyle: !0,
                                fontSize: 12
                            }
                        },
                        tooltips: S
                    }
                })
            }
        }
        if ($().fullCalendar) {
            var ee = new Date((new Date).setHours((new Date).getHours()));
            ee.getDate(), ee.getMonth(), $(".calendar").fullCalendar({
                themeSystem: "bootstrap4",
                height: "auto",
                buttonText: {
                    today: "امروز",
                    month: "ماه",
                    week: "هفته",
                    day: "روز",
                    list: "لیست"
                },
                bootstrapFontAwesome: {
                    prev: " flaticon-prev",
                    next: " flaticon-next",
                    prevYear: "left-double-arrow",
                    nextYear: "right-double-arrow"
                },
                events: [{
                    title: "حساب",
                    start: "2018-05-18"
                }, {
                    title: "تحویل",
                    start: "2018-09-22",
                    end: "2018-09-24"
                }, {
                    title: "کنفرانس",
                    start: "2018-06-07",
                    end: "2018-06-09"
                }, {
                    title: "تحویل",
                    start: "2018-11-03",
                    end: "2018-11-06"
                }, {
                    title: "جلسه",
                    start: "2018-10-07",
                    end: "2018-10-09"
                }, {
                    title: "مالیات",
                    start: "2018-08-07",
                    end: "2018-08-09"
                }]
            })
        }
        $().DataTable && $(".data-table").DataTable({
            searching: !1,
            bLengthChange: !1,
            destroy: !0,
            info: !1,
            sDom: '<"row view-filter"<"col-sm-12"<"pull-left"l><"pull-right"f><"clearfix">>>t<"row view-pager"<"col-sm-12"<"text-center"ip>>>',
            pageLength: 6,
            language: {
                paginate: {
                    previous: "<i class='flaticon-prev'></i>",
                    next: "<i class='flaticon-next'></i>"
                }
            },
            drawCallback: function() {
                $($(".dataTables_wrapper .pagination li:first-of-type")).find("a").addClass("prev"), $($(".dataTables_wrapper .pagination li:last-of-type")).find("a").addClass("next"), $(".dataTables_wrapper .pagination").addClass("pagination-sm")
            }
        }), $("body").on("click", ".notify-btn", function(e) {
            var t, a, o;
            e.preventDefault(), t = $(this).data("from"), a = $(this).data("align"), o = "secondary", $.notify({
                title: "اطلاع رسانی",
                message: "در اینجا یک اعلان است",
                target: "_blank"
            }, {
                element: "body",
                position: null,
                type: o,
                allow_dismiss: !0,
                newest_on_top: !1,
                showProgressbar: !1,
                placement: {
                    from: t,
                    align: a
                },
                offset: 20,
                spacing: 10,
                z_index: 1031,
                delay: 5e3,
                timer: 2e3,
                url_target: "_blank",
                mouse_over: null,
                animate: {
                    enter: "animated fadeInDown",
                    exit: "animated fadeOutUp"
                },
                onShow: null,
                onShown: null,
                onClose: null,
                onClosed: null,
                icon_type: "class",
                template: '<div data-notify="container" class="col-11 col-sm-3 alert  alert-{0} " role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            })
        }), $().owlCarousel && ($(".owl-carousel.basic").length > 0 && $(".owl-carousel.basic").owlCarousel({
            margin: 30,
            stagePadding: 15,
            dotsContainer: $(".owl-carousel.basic").parents(".owl-container").find(".slider-dot-container"),
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        }).data("owl.carousel").onResize(), $(".owl-carousel.dashboard-numbers").length > 0 && $(".owl-carousel.dashboard-numbers").owlCarousel({
            margin: 15,
            loop: !0,
            autoplay: !0,
            stagePadding: 5,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2
                },
                576: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1440: {
                    items: 3
                },
                1800: {
                    items: 4
                }
            }
        }).data("owl.carousel").onResize(), $(".best-rated-items").length > 0 && $(".best-rated-items").owlCarousel({
            margin: 15,
            items: 1,
            loop: !0,
            autoWidth: !0
        }).data("owl.carousel").onResize(), $(".owl-carousel.single").length > 0 && $(".owl-carousel.single").owlCarousel({
            margin: 30,
            items: 1,
            loop: !0,
            stagePadding: 15,
            dotsContainer: $(".owl-carousel.single").parents(".owl-container").find(".slider-dot-container")
        }).data("owl.carousel").onResize(), $(".owl-carousel.center").length > 0 && $(".owl-carousel.center").owlCarousel({
            loop: !0,
            margin: 30,
            stagePadding: 15,
            center: !0,
            dotsContainer: $(".owl-carousel.center").parents(".owl-container").find(".slider-dot-container"),
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        }).data("owl.carousel").onResize(), $(".owl-dot").click(function() {
            $($(this).parents(".owl-container").find(".owl-carousel")).owlCarousel().trigger("to.owl.carousel", [$(this).index(), 300])
        }), $(".owl-prev").click(function(e) {
            e.preventDefault(), $($(this).parents(".owl-container").find(".owl-carousel")).owlCarousel().trigger("prev.owl.carousel", [300])
        }), $(".owl-next").click(function(e) {
            e.preventDefault(), $($(this).parents(".owl-container").find(".owl-carousel")).owlCarousel().trigger("next.owl.carousel", [300])
        })), $().slick && ($(".slick.basic").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 4,
            appendDots: $(".slick.basic").parents(".slick-container").find(".slider-dot-container"),
            prevArrow: $(".slick.basic").parents(".slick-container").find(".slider-nav .left-arrow"),
            nextArrow: $(".slick.basic").parents(".slick-container").find(".slider-nav .right-arrow"),
            customPaging: function(e, t) {
                return '<button role="button" class="slick-dot"><span></span></button>'
            },
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: !0,
                    dots: !0
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        }), $(".slick.center").slick({
            dots: !0,
            infinite: !0,
            centerMode: !0,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            appendDots: $(".slick.center").parents(".slick-container").find(".slider-dot-container"),
            prevArrow: $(".slick.center").parents(".slick-container").find(".slider-nav .left-arrow"),
            nextArrow: $(".slick.center").parents(".slick-container").find(".slider-nav .right-arrow"),
            customPaging: function(e, t) {
                return '<button role="button" class="slick-dot"><span></span></button>'
            },
            responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: !0,
                    dots: !0,
                    centerMode: !1
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: !1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: !1
                }
            }]
        }), $(".slick.single").slick({
            dots: !0,
            infinite: !0,
            speed: 300,
            appendDots: $(".slick.single").parents(".slick-container").find(".slider-dot-container"),
            prevArrow: $(".slick.single").parents(".slick-container").find(".slider-nav .left-arrow"),
            nextArrow: $(".slick.single").parents(".slick-container").find(".slider-nav .right-arrow"),
            customPaging: function(e, t) {
                return '<button role="button" class="slick-dot"><span></span></button>'
            }
        }));
        var te = document.getElementsByClassName("needs-validation");
        Array.prototype.filter.call(te, function(e) {
            e.addEventListener("submit", function(t) {
                !1 === e.checkValidity() && (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
            }, !1)
        }), $().tooltip && $('[data-toggle="tooltip"]').tooltip(), $().popover && $('[data-toggle="popover"]').popover({
            trigger: "focus"
        }), $().select2 && $(".select2-single, .select2-multiple").select2({
            theme: "bootstrap",
            placeholder: "",
            maximumSelectionSize: 6,
            containerCssClass: ":all:"
        }), $().datepicker && ($("input.datepicker").datepicker({
            autoclose: !0,
            templates: {
                leftArrow: '<i class="flaticon-prev"></i>',
                rightArrow: '<i class="flaticon-next"></i>'
            }
        }), $(".input-daterange").datepicker({
            autoclose: !0,
            templates: {
                leftArrow: '<i class="flaticon-prev"></i>',
                rightArrow: '<i class="flaticon-next"></i>'
            }
        }), $(".input-group.date").datepicker({
            autoclose: !0,
            templates: {
                leftArrow: '<i class="flaticon-prev"></i>',
                rightArrow: '<i class="flaticon-next"></i>'
            }
        }), $(".date-inline").datepicker({
            autoclose: !0,
            templates: {
                leftArrow: '<i class="flaticon-prev"></i>',
                rightArrow: '<i class="flaticon-next"></i>'
            }
        })), $().dropzone && $(".dropzone").dropzone({
            url: "/file/post",
            thumbnailWidth: 160,
            previewTemplate: '<div class="dz-preview dz-file-preview mb-3"><div class="d-flex flex-row "> <div class="p-0 w-30 position-relative"> <div class="dz-error-mark"><span><i class="fas fa-fw fa-exclamation-triangle"></i>  </span></div>      <div class="dz-success-mark"><span><i class="fas fa-fw fa-check-circle"></i></span></div>      <img data-dz-thumbnail class="img-thumbnail border-0" /> </div> <div class="pl-3 pt-2 pr-2 pb-1 w-70 dz-details position-relative"> <div> <span data-dz-name /> </div> <div class="text-primary text-extra-small" data-dz-size /> </div> <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>        <div class="dz-error-message"><span data-dz-errormessage></span></div>            </div><a href="#" class="remove" data-dz-remove> <i class="fas fa-trash"></i> </a></div>'
        });
        var ae, oe = window.Cropper;
        if (void 0 !== oe) {
            function ne(e, t) {
                var a, o = e.length;
                for (a = 0; a < o; a++) t.call(e, e[a], a, e);
                return e
            }
            var ie = document.querySelectorAll(".cropper-preview"),
                re = {
                    aspectRatio: 4 / 3,
                    preview: ".img-preview",
                    ready: function() {
                        var e = this.cloneNode();
                        e.className = "", e.style.cssText = "display: block;width: 100%;min-width: 0;min-height: 0;max-width: none;max-height: none;", ne(ie, function(t) {
                            t.appendChild(e.cloneNode())
                        })
                    },
                    crop: function(e) {
                        var t = e.detail,
                            a = this.cropper.getImageData(),
                            o = t.width / t.height;
                        ne(ie, function(e) {
                            var n = e.getElementsByTagName("img").item(0),
                                i = e.offsetWidth,
                                r = i / o,
                                s = t.width / i;
                            e.style.height = r + "px", n && (n.style.width = a.naturalWidth / s + "px", n.style.height = a.naturalHeight / s + "px", n.style.marginLeft = -t.x / s + "px", n.style.marginTop = -t.y / s + "px")
                        })
                    },
                    zoom: function(e) {}
                };
            if ($("#inputImage").length > 0) {
                var se, le = $("#inputImage")[0],
                    de = $("#cropperImage")[0];
                le.onchange = function() {
                    var e, t = this.files;
                    t && t.length && (e = t[0], $("#cropperContainer").css("display", "block"), /^image\/\w+/.test(e.type) ? (uploadedImageType = e.type, uploadedImageName = e.name, de.src = uploadedImageURL = URL.createObjectURL(e), se && se.destroy(), se = new oe(de, re), le.value = null) : window.alert("لطفا یک فایل تصویری را انتخاب کنید"))
                }
            }
        }

        function ce() {
            return document.fullscreenElement && null !== document.fullscreenElement || document.webkitFullscreenElement && null !== document.webkitFullscreenElement || document.mozFullScreenElement && null !== document.mozFullScreenElement || document.msFullscreenElement && null !== document.msFullscreenElement
        }
        "undefined" != typeof noUiSlider && ($("#dashboardPriceRange").length > 0 && noUiSlider.create($("#dashboardPriceRange")[0], {
            start: [800, 2100],
            connect: !0,
            tooltips: !0,
            range: {
                min: 200,
                max: 2800
            },
            step: 10,
            format: {
                to: function(e) {
                    return "$" + $.fn.addCommas(Math.floor(e))
                },
                from: function(e) {
                    return e
                }
            }
        }), $("#doubleSlider").length > 0 && noUiSlider.create($("#doubleSlider")[0], {
            start: [800, 1200],
            connect: !0,
            tooltips: !0,
            range: {
                min: 500,
                max: 1500
            },
            step: 10,
            format: {
                to: function(e) {
                    return "$" + $.fn.addCommas(Math.round(e))
                },
                from: function(e) {
                    return e
                }
            }
        }), $("#singleSlider").length > 0 && noUiSlider.create($("#singleSlider")[0], {
            start: 0,
            connect: !0,
            tooltips: !0,
            range: {
                min: 0,
                max: 150
            },
            step: 1,
            format: {
                to: function(e) {
                    return $.fn.addCommas(Math.round(e))
                },
                from: function(e) {
                    return e
                }
            }
        })), $("#exampleModalContent").on("show.bs.modal", function(e) {
            var t = $(e.relatedTarget).data("whatever"),
                a = $(this);
            a.find(".modal-title").text("پیام جدید به " + t), a.find(".modal-body input").val(t)
        }), "undefined" != typeof PerfectScrollbar && $(".scroll").each(function() {
            if ($(this).parents(".chat-app").length > 0) return ae = new PerfectScrollbar($(this)[0]), $(".chat-app .scroll").scrollTop($(".chat-app .scroll").prop("scrollHeight")), void ae.update();
            new PerfectScrollbar($(this)[0])
        }), $(".progress-bar").each(function() {
            $(this).css("width", $(this).attr("aria-valuenow") + "%")
        }), "undefined" != typeof ProgressBar && $(".progress-bar-circle").each(function() {
            var e = $(this).attr("aria-valuenow"),
                a = $(this).data("color") || t,
                o = $(this).data("trailColor") || "#d7d7d7",
                n = $(this).attr("aria-valuemax") || 100,
                i = $(this).data("showPercent");
            new ProgressBar.Circle(this, {
                color: a,
                duration: 20,
                easing: "easeInOut",
                strokeWidth: 4,
                trailColor: o,
                trailWidth: 4,
                text: {
                    autoStyleContainer: !1
                },
                step: (t, a) => {
                    i ? a.setText(Math.round(100 * a.value()) + "%") : a.setText(e + "/" + n)
                }
            }).animate(e / n)
        }), $().barrating && $(".rating").each(function() {
            var e = $(this).data("currentRating"),
                t = $(this).data("readonly");
            $(this).barrating({
                theme: "bootstrap-stars",
                initialRating: e,
                readonly: t
            })
        }), $().tagsinput && ($(".tags").tagsinput({
            cancelConfirmKeysOnEmpty: !0,
            confirmKeys: [13]
        }), $("body").on("keypress", ".bootstrap-tagsinput input", function(e) {
            13 == e.which && (e.preventDefault(), e.stopPropagation())
        })), "undefined" != typeof Sortable && ($(".sortable").each(function() {
            $(this).find(".handle").length > 0 ? Sortable.create($(this)[0], {
                handle: ".handle"
            }) : Sortable.create($(this)[0])
        }), $(".sortable-survey").length > 0 && Sortable.create($(".sortable-survey")[0])), $("#successButton").on("click", function(e) {
            e.preventDefault();
            var t = $(this);
            t.hasClass("show-fail") || t.hasClass("show-spinner") || t.hasClass("show-success") || (t.addClass("show-spinner"), t.addClass("active"), setTimeout(function() {
                t.addClass("show-success"), t.removeClass("show-spinner"), t.find(".icon.success").tooltip("show"), setTimeout(function() {
                    t.removeClass("show-success"), t.removeClass("active"), t.find(".icon.success").tooltip("dispose")
                }, 2e3)
            }, 3e3))
        }), $("#failButton").on("click", function(e) {
            e.preventDefault();
            var t = $(this);
            t.hasClass("show-fail") || t.hasClass("show-spinner") || t.hasClass("show-success") || (t.addClass("show-spinner"), t.addClass("active"), setTimeout(function() {
                t.addClass("show-fail"), t.removeClass("show-spinner"), t.find(".icon.fail").tooltip("show"), setTimeout(function() {
                    t.removeClass("show-fail"), t.removeClass("active"), t.find(".icon.fail").tooltip("dispose")
                }, 2e3)
            }, 3e3))
        }), $().typeahead && $("#query").typeahead({
            source: [{
                name: "May",
                index: 0,
                id: "5a8a9bfd8bf389ba8d6bb211"
            }, {
                name: "Fuentes",
                index: 1,
                id: "5a8a9bfdee10e107f28578d4"
            }, {
                name: "Henderson",
                index: 2,
                id: "5a8a9bfd4f9e224dfa0110f3"
            }, {
                name: "Hinton",
                index: 3,
                id: "5a8a9bfde42b28e85df34630"
            }, {
                name: "Barrera",
                index: 4,
                id: "5a8a9bfdc0cba3abc4532d8d"
            }, {
                name: "Therese",
                index: 5,
                id: "5a8a9bfdedfcd1aa0f4c414e"
            }, {
                name: "Nona",
                index: 6,
                id: "5a8a9bfdd6686aa51b953c4e"
            }, {
                name: "Frye",
                index: 7,
                id: "5a8a9bfd352e2fd4c101507d"
            }, {
                name: "Cora",
                index: 8,
                id: "5a8a9bfdb5133142047f2600"
            }, {
                name: "Miles",
                index: 9,
                id: "5a8a9bfdadb1afd136117928"
            }, {
                name: "Cantrell",
                index: 10,
                id: "5a8a9bfdca4795bcbb002057"
            }, {
                name: "Benson",
                index: 11,
                id: "5a8a9bfdaa51e9a4aeeddb7d"
            }, {
                name: "Susanna",
                index: 12,
                id: "5a8a9bfd57dd857535ef5998"
            }, {
                name: "Beatrice",
                index: 13,
                id: "5a8a9bfd68b6f12828da4175"
            }, {
                name: "Tameka",
                index: 14,
                id: "5a8a9bfd2bc4a368244d5253"
            }, {
                name: "Lowe",
                index: 15,
                id: "5a8a9bfd9004fda447204d30"
            }, {
                name: "Roth",
                index: 16,
                id: "5a8a9bfdb4616dbc06af6172"
            }, {
                name: "Conley",
                index: 17,
                id: "5a8a9bfdfae43320dd8f9c5a"
            }, {
                name: "Nelda",
                index: 18,
                id: "5a8a9bfd534d9e0ba2d7c9a7"
            }, {
                name: "Angie",
                index: 19,
                id: "5a8a9bfd57de84496dc42259"
            }]
        }), $("#fullScreenButton").on("click", function(e) {
            var t, a;
            e.preventDefault(), ce() ? ($($(this).find("i")[1]).css("display", "none"), $($(this).find("i")[0]).css("display", "inline")) : ($($(this).find("i")[1]).css("display", "inline"), $($(this).find("i")[0]).css("display", "none")), t = ce(), a = document.documentElement, t ? document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullScreen ? a.webkitRequestFullScreen() : a.msRequestFullscreen && a.msRequestFullscreen()
        }), "undefined" != typeof Quill && (new Quill("#quillEditor", {
            modules: {
                toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    ["blockquote", "code-block"],
                    [{
                        header: 1
                    }, {
                        header: 2
                    }],
                    [{
                        list: "ordered"
                    }, {
                        list: "bullet"
                    }],
                    [{
                        script: "sub"
                    }, {
                        script: "super"
                    }],
                    [{
                        indent: "-1"
                    }, {
                        indent: "+1"
                    }],
                    [{
                        direction: "rtl"
                    }],
                    [{
                        size: ["small", !1, "large", "huge"]
                    }],
                    [{
                        header: [1, 2, 3, 4, 5, 6, !1]
                    }],
                    [{
                        color: []
                    }, {
                        background: []
                    }],
                    [{
                        font: []
                    }],
                    [{
                        align: []
                    }],
                    ["clean"]
                ]
            },
            theme: "snow"
        }), new Quill("#quillEditorBubble", {
            modules: {
                toolbar: [
                    ["bold", "italic", "underline", "strike"],
                    [{
                        list: "ordered"
                    }, {
                        list: "bullet"
                    }],
                    [{
                        size: ["small", !1, "large", "huge"]
                    }],
                    [{
                        color: []
                    }],
                    [{
                        align: []
                    }]
                ]
            },
            theme: "bubble"
        }));
        "undefined" != typeof ClassicEditor && ClassicEditor.create(document.querySelector("#ckEditorClassic")).catch(e => {}), $("html").animate({
            opacity: 1
        }, 500)
    }()
}, $.fn.dore = function(e) {
    return this.each(function() {
        if (null == $(this).data("dore")) {
            var t = new $.dore(this, e);
            $(this).data("dore", t)
        }
    })
};