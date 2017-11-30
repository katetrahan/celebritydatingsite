$(document).ready(function() {
  $("form#dating").submit(function(event) {
    event.preventDefault();
    var preference = $("#interest").val();
    var agerange = parseInt($("input#age").val());

    if (agerange < 21) {
        $("#yourdate").addClass("puppydate");
        $("#date").text("a puppy");
    }
    else if (preference === "male" && agerange >= 21 && agerange < 41) {
        $("#yourdate").addClass("ryangosling");
        $("#date").text("Ryan Gosling");
    }
    else if (preference === "male" && agerange >= 41) {
        $("#yourdate").addClass("georgeclooney");
        $("#date").text("George Clooney");
    }
    else if (preference === "female" && agerange >= 21 && agerange < 41) {
        $("#yourdate").addClass("emmastone");
        $("#date").text("Emma Stone");
    }
    else if (preference === "female" && agerange >= 41) {
        $("#yourdate").addClass("helenmirren");
        $("#date").text("Helen Mirren");
    }
    else {
      $("#agecontrol").addClass("has-error");
      alert ("Enter a number!")
    }

  });
});
