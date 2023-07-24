$("document").ready(function () {
  console.log("Let's get ready to party with jQuery!");
});
$("img, article").addClass("image-center");
$("p").eq(5).remove();
$("#title").css("font-size", Math.random() * 100);
$("ol").append("<li>He's cute but not as cute as Rosie🐶</li>");
$("aside")
  .empty()
  .append("<p>This list is ridiculous.  I'm sorry it exists</p>");

$(".form-control").on("keyup blur change", function () {
  let $red = $("input").eq(0).val();
  let $blue = $("input").eq(1).val();
  let $green = $("input").eq(2).val();
  $("body").css(
    "background-color",
    "rgb(" + $red + "," + $green + "," + $blue + ")"
  );
});
$("img").on("click", function () {
  $(this).remove();
});
