$(document).ready(function() {
  console.log("we loaded");


  $("#button1").click(function() {

    $("#mustvisit").hide("big-text");

  });

  $("#button2").click(function() {
    // stuff we put here will happen when you click button 2.

    $("#title").removeClass("big-text");
  });

  $("tips").mouseover(function() {

    $("tips").css("font-size", "50");

  });

});