$("form").submit(function (e) {
  e.preventDefault();
  let $movieTitle = $("#title").val();
  let $rating = $("#rating").val();
  $("#list").append(
    `<li> ${$movieTitle} with a rating of a ${$rating} <button class="delete-button">Delete</button></li>`
  );
  $("#title").val("");
  $("#rating").val("");
});

$("#list").on("click", ".delete-button", function () {
  $(this).parent().remove();
});
