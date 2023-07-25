$("form").on("submit", function (e) {
  e.preventDefault();
  let $movieTitle = $("#title").val();
  let $rating = $("#rating").val();
  //   console.log($movieTitle);
  $("#list").append(
    `<li id=$("li").length> ${$movieTitle} with a rating of a ${$rating} </li><button id=$("li").length>Delete</button>`
  );
  //   console.log($("li").length);
  $("#li.length")("<button>Delete</button>");
  // ("click", function () {
  //       $("li", "button").remove();
  //     });
});
