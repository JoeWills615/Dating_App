$(document).ready(() => {
  $(".nav1").css("display", "none"); //Register
  $(".nav2").css("display", "none"); //Login
  $(".nav3").css("display", "inline-block"); //Logout
  $(".nav4").css("display", "inline-block"); //Home
  $(".nav5").css("display", "inline-block"); //Sign in as
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });
});
