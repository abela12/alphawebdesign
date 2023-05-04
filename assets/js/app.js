// Initialize Isotope
var $grid = $(".product-list").isotope({
  // options
})
// Filter Product on Button Click
$(".filter-group").on("click", "button", function () {
  var filterValue = $(this).attr("data-filter")
  console.log("🚀 ~ file: script.js ~ line 8 ~ $ ~ filterValue", filterValue)
  resetFilterBtns()
  $(this).addClass("current-filter")
  $grid.isotope({ filter: filterValue })
})

var filterBtns = $(".filter-group").find("button")
console.log("🚀 ~ file: script.js ~ line 15 ~ filterBtns", filterBtns)
function resetFilterBtns() {
  filterBtns.each(function () {
    $(this).removeClass("current-filter")
  })
}
function change_image(image) {
  var container = document.getElementById("main-image")

  container.src = image.src
}
document.addEventListener("DOMContentLoaded", function (event) {})
