$(window).on("load", function () {
  $(".loader").fadeOut(1000, function () {
    $(".body-wrapper").fadeIn(150, function () {
      setTimeout(function () {
        $(".fly-in-text").removeClass("hidden")
        $(".fest-date").fadeIn(1000)
        if ($.browser.mozilla) {
          $(".moz-text").removeClass("text")
          var moz_scroll = 1000
        } else {
          moz_scroll = 1500
        }
        if ($(window).width() > 1200) {
          // $(function() {
          //   $.scrollify({
          //     section: ".section-scroll",
          //     sectionName: "section-name",
          //     setHeights: false,
          //     scrollSpeed: moz_scroll,
          //     offset: 0,
          //     scrollbars: true
          //   })
          // })
        }
      }, 400)
    })
  })
})
$(document).ready(function () {
  $(".event-item").click(function () {
    var event_id = $(this).data("id")
    $(".event-page").hide("slow")
    $(".event-item-text").removeClass("event-section-active")
    var section_id = "#event-page" + event_id
    var text_id = "#sec" + event_id
    $(section_id).show("slow")
    $(text_id).addClass("event-section-active")
  })
  var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 15

  function moveBackground() {
    x += (lFollowX - x) * friction
    y += (lFollowY - y) * friction
    translate = "translate(" + x + "px, " + y + "px) scale(1.1)"
    $(".sports-background").css({
      "-webit-transform": translate,
      "-moz-transform": translate,
      transform: translate,
    })
    $(".fats-background").css({
      "-webit-transform": translate,
      "-moz-transform": translate,
      transform: translate,
    })
    $(".f1-background").css({
      "-webit-transform": translate,
      "-moz-transform": translate,
      transform: translate,
    })
    $(".cult-background").css({
      "-webit-transform": translate,
      "-moz-transform": translate,
      transform: translate,
    })
    $(".alum-background").css({
      "-webit-transform": translate,
      "-moz-transform": translate,
      transform: translate,
    })
    $(".photo-background").css({
      "-webit-transform": translate,
      "-moz-transform": translate,
      transform: translate,
    })
    window.requestAnimationFrame(moveBackground)
  }
  $(window).on("mousemove click", function (e) {
    var lMouseX = Math.max(
      -100,
      Math.min(100, $(window).width() / 2 - e.clientX)
    )
    var lMouseY = Math.max(
      -100,
      Math.min(100, $(window).height() / 2 - e.clientY)
    )
    lFollowX = (20 * lMouseX) / 100
    lFollowY = (10 * lMouseY) / 100
  })
  moveBackground()

  function toggleSidebar() {
    $(".button").toggleClass("active")
    $("main").toggleClass("move-to-left")
    $(".navbar-item").toggleClass("active")
    $("#bars").click()
  }
  $(".button").on("click tap", function () {
    toggleSidebar()
  })
  $("").on("click tap", function () {
    toggleSidebar()
  })
  $(document).keyup(function (e) {
    if (e.keyCode === 27) {
      toggleSidebar()
    }
  })
  $("#event-text").click(function () {
    $("#tech-right-text").fadeOut(function () {
      $(".tech-event-details").toggle("slide")
    })
  })
  $("#tech-cancel").click(function () {
    $(".tech-event-details").toggle("slide", function () {
      $("#tech-right-text").pulse()
    })
  })
  // $("#fb").click(function() {
  //   window.location.href = "https://www.facebook.com/advaita.iiit/"
  // })
  // $("#insta").click(function() {
  //   window.location.href = "https://www.instagram.com/advaita_iiitbh/"
  // })
  // $("#youtube").click(function() {
  //   window.location.href = "https://www.youtube.com/watch?v=cC39Jq_qRgA"
  // })
  // $(".ingenium-link").click(function() {
  //   window.location.href = "http://www.advaita.io/ingenium.html"
  // })
})

function toggleSidebar(ref) {
  document.getElementById("sidebar").classList.toggle("active")
  ref.classList.toggle("active")
}
$(".texting-cult").click(function () {
  $(".events-description-cult").toggle("slide")
  $(".events-description-cult").css({
    display: "block",
  })
})
$(".cult-cancel").click(function () {
  $(".events-description-cult").toggle("slide")
})
$(".texting-fats").click(function () {
  $(".events-description-fats").toggle("slide")
  $(".events-description-fats").css({
    display: "block",
  })
})
$(".fats-cancel").click(function () {
  $(".events-description-fats").toggle("slide")
})
$(".texting-fats1").click(function () {
  $(".events-description-fats1").toggle("slide")
  $(".events-description-fats1").css({
    display: "block",
  })
})
$(".fats1-cancel").click(function () {
  $(".events-description-fats1").toggle("slide")
})
$(".texting-sports").click(function () {
  $(".events-description-sports").toggle("slide")
  $(".events-description-sports").css({
    display: "block",
  })
})
$(".sports-cancel").click(function () {
  $(".events-description-sports").toggle("slide")
})
$(".texting-photo").click(function () {
  $(".events-description-photo").toggle("slide")
  $(".events-description-photo").css({
    display: "block",
  })
})
$(".photo-cancel").click(function () {
  $(".events-description-photo").toggle("slide")
})
$(".texting-tech").click(function () {
  $(".events-description-tech").toggle("slide")
  $(".events-description-tech").css({
    display: "block",
  })
})
$(".tech-cancel").click(function () {
  $(".events-description-tech").toggle("slide")
})
$("#tech-cancel").click(function () {
  $(".tech-event-details").toggle("slide", function () {
    $("#tech-right-text").pulse()
  })
})
$(".hey").hover(function () {
  $(this).toggleClass("row-event-0-color")
})
$(".row-event-1").hover(function () {
  $(this).toggleClass("row-event-0-color")
})
$(".row-event-2").hover(function () {
  $(this).toggleClass("row-event-2-color")
})
$(".row-event-3").hover(function () {
  $(this).toggleClass("row-event-3-color")
})
$(".row-event-4").hover(function () {
  $(this).toggleClass("row-event-4-color")
})
$(document).ready(function () {
  var $horizontal = $("#horizontal")
  $(window).scroll(function () {
    var s = $(this).scrollTop(),
      d = $(document).height(),
      c = $(this).height()
    scrollPercent = s / (d - c)
    var position = scrollPercent * ($(document).width() - $horizontal.width())
    $horizontal.css({
      left: position,
    })
  })
})
var time = 2000
var index = 0
var container = $("#container")
var childrenCount = $(".section1").length

function slideToNext() {
  index = (index + 1) % childrenCount
  container.css({
    marginLeft: -1 * index * 100 + "%",
  })
}
var pt = window.setInterval(function () {
  slideToNext()
}, time)(function ($) {
  // USE STRICT
  "use strict"

  $(".form-radio .radio-item").click(function () {
    //Spot switcher:
    $(this).parent().find(".radio-item").removeClass("active")
    $(this).addClass("active")
  })

  $("#time")
    .parent()
    .append('<ul class="list-item" id="newtime" name="time"></ul>')
  $("#time option").each(function () {
    $("#newtime").append(
      '<li value="' + $(this).val() + '">' + $(this).text() + "</li>"
    )
  })
  $("#time").remove()
  $("#newtime").attr("id", "time")
  $("#time li").first().addClass("init")
  $("#time").on("click", ".init", function () {
    $(this).closest("#time").children("li:not(.init)").toggle()
  })

  $("#food")
    .parent()
    .append('<ul class="list-item" id="newfood" name="food"></ul>')
  $("#food option").each(function () {
    $("#newfood").append(
      '<li value="' + $(this).val() + '">' + $(this).text() + "</li>"
    )
  })
  $("#food").remove()
  $("#newfood").attr("id", "food")
  $("#food li").first().addClass("init")
  $("#food").on("click", ".init", function () {
    $(this).closest("#food").children("li:not(.init)").toggle()
  })

  var allOptions = $("#time").children("li:not(.init)")
  $("#time").on("click", "li:not(.init)", function () {
    allOptions.removeClass("selected")
    $(this).addClass("selected")
    $("#time").children(".init").html($(this).html())
    allOptions.toggle()
  })

  var FoodOptions = $("#food").children("li:not(.init)")
  $("#food").on("click", "li:not(.init)", function () {
    FoodOptions.removeClass("selected")
    $(this).addClass("selected")
    $("#food").children(".init").html($(this).html())
    FoodOptions.toggle()
  })
})(jQuery)
