$(document).ready(function() {
  console.log("we loaded");


  $("#title").click(function() {
    $("#title").html("Guide to <em>Lisbon</em>");
  });

  $("#title").click(function() {
    $("#title").html("Guide to <em>Lisbon, Portugal</em>");
  });

  $("#navigation").mouseover(function() {
    $("navigation").css("background-color", "#B0BF1A")

  });

  $("#button1").click(function() {

    $("#mustvisit").toggle();

  });

  $("#button2").click(function() {
    // stuff we put here will happen when you click button 2.

    $("#title").removeClass("big-text");
  });

  $("#tips").mouseover(function() {
    $("#tips").css("font-size", "50px");

  });

  $("#tips").mouseleave(function() {
    $("#tips").css("font-size", "100%");


  });

});