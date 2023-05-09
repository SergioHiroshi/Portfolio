$(".custom-control-label").on("click", function () {
  if ($(this).siblings().is(":checked")) {
    $(this).siblings().removeAttr("checked");
  } else {
    $(this).siblings().prop("checked", true);
  }
});
//radio input "Correct" Class
function checkAll() {
  var correct = 0;
  var count = 0;
  var passingGrade = 70;
  $("div.question").each(function () {
    var elem = $(this);
    $(this).find(".alertCorrect").css("display", "none");
    $(this).find(".alertWrong").css("display", "none");
    $(this).removeClass("correct");
    $(this).removeClass("incorrect");
    var isCorrect = true;
    if (!$(this).hasClass("question-form")) {
      count++;
      $(this)
        .find("input.custom-control-input")
        .each(function () {
          if ($(this).hasClass("correct")) {
            if (!$(this).is(":checked")) {
              isCorrect = false;
            }
          } else {
            if ($(this).is(":checked")) {
              isCorrect = false;
            }
          }
        });
      if (isCorrect == true) {
        correct++;
        $(this).find(".alertCorrect").css("display", "block");
        $(this).addClass("correct");
      } else {
        $(this).find(".alertWrong").css("display", "block");
        $(this).addClass("incorrect");
      }
    } else {
      for (let i = 1; i < 6; i++) {
        answer = document.getElementById(`Q${i}`);
        if (answer.value == "correct") {
          count++;
          answer.parentNode.style.backgroundColor = "#cdf9c6";
          answer.style.backgroundColor = "#cdf9c6";
          correct++;
        } else {
          count++;
          answer.style.backgroundColor = "#f9c6c6";
          answer.parentNode.style.backgroundColor = "#f9c6c6";
        }
      }
    }
  });
  $(".score > span").html(
    "Resultado: " + parseInt((correct * 100) / count) + "/100"
  );
  if (parseInt((correct * 100) / count) >= passingGrade) {
    $(".msg > span").html("¡Excelente!");
    $(".msg > span").css("color", "green");
  } else if (parseInt((correct * 100) / count) < passingGrade) {
    $(".msg > span").html(
      "Te invitamos a regresar al contenido para tu aprendizaje."
    );
    $(".msg > span").css("color", "red");
  }
}
