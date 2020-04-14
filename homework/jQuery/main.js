$(document).ready(function() {
  console.log("we loaded");


  $("#title").click(function() {
    $("#title").html("Guide to <em>Lisbon</em>");
  });

  $("#title").click(function() {
    $("#title").html("Guide to <em>Lisbon, Portugal</em>");
  });

  $("#button1").click(function() {

    $("#mustvisit").toggle();

  });

  $("#button2").click(function() {

    $("#musteat").toggle();
  });

  $("#tips").mouseover(function() {
    $("#tips").css("font-size", "50px");

  });

  $("#tips").mouseleave(function() {
    $("#tips").css("font-size", "100%");


  });

});