$(".color-option").click(function () {
  var colorOption = $(this).data("color")
  var variantId = "#variant-" + colorOption
  $(".bike-variant").addClass("variant-inactive")
  $(variantId).removeClass("variant-inactive")
  $(".color-option").removeClass("color-active")
  $("#" + colorOption).addClass("color-active")
})
